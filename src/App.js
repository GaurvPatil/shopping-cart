import { useState } from "react";
import { Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

function App() {
  const [product, setProducts] = useState({
    products: data.products,
    size: "",
    sort: "",
  });
  const [cartItems, setCartItems] = useState([]);

  // filter functions

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setProducts({
        size: event.target.value,
        products: data.products,
      });
    } else {
      const filterArr = data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >= 0
      );

      setProducts((product) => ({
        ...product,
        size: event.target.value,
        products: filterArr,
      }));
    }
  };

  const sortProducts = (event) => {
    const sort = event.target.value;
    setProducts((product) => ({
      ...product,
      sort: sort,
      products: product.products.sort((a, b) =>
        sort === "Lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "Highest"
          ? a.price < b.price
            ? 1
            : -1
          : a.id < b.id
          ? 1
          : -1
      ),
    }));
  };

  // cart function
  const addToCart = (product) => {
    const cartArr = cartItems;
    let alreadyInCart = false;
    cartArr.forEach((item) => {
      if (item.id === product.id) {
        alreadyInCart = true;
      }
      return;
    });
    if (!alreadyInCart) {
      cartArr.push({ ...product, count: 1 });
    }

    setCartItems([...cartArr]);
  };

  // cart remove function

  const removeFromCart = (cart) => {
    setCartItems(cartItems.filter((item) => item.id !== cart.id));
  };

  // addOne removeOne

  const addOne = (cartItem) => {
    const addArr = cartItems;
    addArr.forEach((item) => {
      if (item.id === cartItem.id) {
        item.count++;
      }
    });

    setCartItems([...addArr]);
  };

  const removeOne = (cartItem) => {
    const minusArr = cartItems;
    minusArr.forEach((item) => {
      if (item.id === cartItem.id) {
        if (cartItem.count === 1) {
          item.count = 1;
        } else {
          item.count--;
        }
      }
    });

    setCartItems([...minusArr]);
  };

  return (
    <div className="grid-contaainer">
      {/* header  */}
      <header>
        <Link to="">React Shopping Cart </Link>
      </header>

      {/* main  */}
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={product.products.length}
              size={product.size}
              sort={product.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={product.products} addToCart={addToCart} />
          </div>
          <aside className="sidebar">
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              addOne={addOne}
              removeOne={removeOne}
            />
          </aside>
        </div>
      </main>

      {/* footer  */}
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
