import React from "react";
import { Link } from "react-router-dom";
import formatCurrency from "../util";

const Products = ({ products,addToCart }) => {
  return (
    <div>
      <ul className="products">
        {products.map((product) => {
          const { id, title, image, price } = product;
          return (
            <li key={id}>
              <div className="product">
                <Link to={"" + id}>
                  <img src={image} alt={title} />
                  <p> {title} </p>
                </Link>
              </div>
              <div className="product-price">
                <h3>{formatCurrency(price)}</h3>
                <button className="button-primary"
                onClick={()=>addToCart(product)}
                >Add To Cart</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
