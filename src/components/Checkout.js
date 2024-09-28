// Checkout.js
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./Checkout.css"; // Import the CSS file

function Checkout({ totalAmount, onSuccessfulCheckout }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const response = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount }),
    });

    const { clientSecret } = await response.json();

    const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (stripeError) {
      setError(stripeError.message);
      setIsProcessing(false);
    } else {
      onSuccessfulCheckout();
      setIsProcessing(false);
      alert("Payment Successful!");
    }
  };

  return (
    <form onSubmit={handleCheckout} className="checkout-form">
      <h2>Checkout</h2>
      <CardElement className="card-element" />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="checkout-button"
      >
        {isProcessing ? "Processing..." : `Pay $${(totalAmount / 100).toFixed(2)}`}
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}

export default Checkout;
