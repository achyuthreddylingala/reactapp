import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import './UserDashboard.css'; // Import the CSS

function UserDashboard({ isGuest }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false); // Indicates if the user is currently checking out

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleSuccessfulCheckout = () => {
    setCartItems([]); // Clear the cart after successful checkout
    setIsCheckingOut(false); // Reset checkout state
  };

  // Calculate total amount in cents for Stripe
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0) * 100;

  return (
    <div className="dashboard-container">
      <h1>{isGuest ? "Welcome, Guest!" : "Welcome, User!"}</h1>
      {isGuest ? (
        <p className="guest-warning">You have limited access. Please sign up or log in for full features.</p>
      ) : (
        <>
          <div className="product-list-container">
            <ProductList addToCart={addToCart} />
          </div>
          <div className="cart-container">
            <Cart cartItems={cartItems} />
            {/* Only show the checkout button if there are items in the cart and the user isn't checking out yet */}
            {cartItems.length > 0 && !isCheckingOut && (
              <button
                className="checkout-initiate-button"
                onClick={() => setIsCheckingOut(true)}
              >
                Proceed to Checkout
              </button>
            )}
            {/* Show the Checkout component if the user clicks to checkout */}
            {isCheckingOut && (
              <Checkout
                totalAmount={totalAmount}
                onSuccessfulCheckout={handleSuccessfulCheckout}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default UserDashboard;
