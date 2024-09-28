import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import './GuestDashboard.css'; // Import the CSS file

function GuestDashboard() {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleSuccessfulCheckout = () => {
    setCartItems([]);
    setIsCheckingOut(false);
    alert("Thank you for checking out as a guest!");
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="guest-dashboard-container">
      <h1>Welcome, Guest!</h1>
      <p>You have limited access. Please sign up or log in for full features.</p>
      
      <div className="product-list-container">
        <ProductList addToCart={addToCart} />
      </div>

      <div className="cart-container">
        <Cart cartItems={cartItems} />

        {cartItems.length > 0 && !isCheckingOut && (
          <button className="checkout-button" onClick={() => setIsCheckingOut(true)}>
            Proceed to Checkout
          </button>
        )}

        {isCheckingOut && (
          <Checkout
            totalAmount={totalAmount}
            onSuccessfulCheckout={handleSuccessfulCheckout}
          />
        )}
      </div>
    </div>
  );
}

export default GuestDashboard;
