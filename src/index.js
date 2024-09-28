import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY"); // Replace with your Stripe public key

// Get the root DOM element where the app will be mounted
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create root using createRoot

// Render your app with Stripe Elements in React 18's createRoot
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
