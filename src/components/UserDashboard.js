// components/UserDashboard.js
import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

function UserDashboard({ isGuest }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <h1>{isGuest ? "Welcome, Guest!" : "Welcome, User!"}</h1>
      {isGuest ? (
        <p>You have limited access. Please sign up or log in for full features.</p>
      ) : (
        <>
          <ProductList addToCart={addToCart} />
          <Cart cartItems={cartItems} />
        </>
      )}
    </div>
  );
}

export default UserDashboard;
