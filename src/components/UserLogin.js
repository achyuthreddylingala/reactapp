// components/UserLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    // Add logic to authenticate user here (Firebase or other)
    console.log("User logged in:", email);
    navigate("/user"); // Navigate to User Dashboard
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleUserLogin}>
        <input
          type="email"
          placeholder="User Email"
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
