import React from "react";
import "./Cart.css";

function Cart({ cartItems }) {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3 className="item-name">{item.item}</h3>
            <p className="item-quantity">Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
