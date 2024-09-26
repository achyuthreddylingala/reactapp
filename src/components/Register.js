// components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Make sure you have Firebase initialized

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setError(""); // Reset any previous error messages

    try {
      // Create a new user with Firebase Authentication
      await auth.createUserWithEmailAndPassword(email, password);
      
      // Navigate to the User Panel after successful sign-up
      navigate("/user");
    } catch (error) {
      // Set an error message if sign-up fails
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSignUp} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>} {/* Error message */}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
