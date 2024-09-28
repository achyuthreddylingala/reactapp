import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminSignup.css'; // Import CSS

function AdminSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminSignup = (e) => {
    e.preventDefault();
    // Add logic to sign up admin here (Firebase or other)
    console.log("Admin signed up:", email);
    navigate("/admin"); // Navigate to Admin Dashboard
  };

  return (
    <div className="signup-container">
      <h2>Sign Up as Admin</h2>
      <form onSubmit={handleAdminSignup}>
        <input
          type="email"
          placeholder="Admin Email"
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default AdminSignup;
