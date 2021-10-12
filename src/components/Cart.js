import React, { useState } from "react";
import formatCurrency from "../util";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const Cart = ({ cartItems, removeFromCart, addOne, removeOne }) => {
  const [showChekOut, setShowCheckOut] = useState(false);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart Is Empty</div>
      ) : (
        <div className="cart cart-header">
          You Have {cartItems.length} Items In Your Cart
        </div>
      )}
      <div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => {
              const { id, image, title, price, count } = item;
              return (
                <li key={id}>
                  <div>
                    <img src={image} alt={title} />
                  </div>
                  <div className="extraadd">
                    <button onClick={() => addOne(item)}>
                      <GrAddCircle />
                    </button>

                    <button onClick={() => removeOne(item)}>
                      <AiOutlineMinusCircle />
                    </button>
                  </div>
                  <div className="right">
                    <h5>{title}</h5>
                    <h3>
                      {" "}
                      {formatCurrency(price)} x {count} {"  "}{" "}
                    </h3>
                    <button
                      className="removebtn"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div>
          <div className="cart">
            <div className="total">
              <div>
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce(
                    (acc, curr) => acc + curr.price * curr.count,
                    0
                  )
                )}
              </div>
              <button
                className="button-primary"
                onClick={() => setShowCheckOut(true)}
              >
                Proceed
              </button>
            </div>
          </div>
        {showChekOut && (
          <div className="cart">
            <form>
        
            </form>
          </div>
        )}
        </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
