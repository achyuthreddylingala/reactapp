import React from "react";
import './Cart.css'; // Import the CSS

function Cart({ cartItems }) {
  // Calculate the total price
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
