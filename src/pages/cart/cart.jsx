import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      {totalAmount > 0 ? (
        <div className="cart">
          <div>
            <h1> Your Cart Items </h1>
          </div>

          <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>

          <div className="checkout">
            <p> Total: ₱{totalAmount}</p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button> Checkout </button>
          </div>
        </div>
      ) : (
        <div className="checkout">
          <h1> Your Cart is Empty </h1>
          <button onClick={() => navigate("/")}> Go back to Shopping </button>
        </div>
      )}
    </>
  );
};
