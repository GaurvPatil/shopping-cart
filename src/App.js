import { useState } from "react";
import { Route, Link } from "react-router-dom";
import Products from "./components/Products";
import data from "./data.json";

function App() {
  const [product, setProducts] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

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
            <Products products={product.products} />
          </div>
          <aside className="sidebar">Cart items</aside>
        </div>
      </main>

      {/* footer  */}
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
