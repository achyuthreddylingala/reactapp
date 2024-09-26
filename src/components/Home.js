// components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Our Application</h1>
      <p>Choose how you want to proceed:</p>

      <div className="home-buttons">
        <button onClick={() => navigate("/signup")}>Sign Up</button>
        <button onClick={() => navigate("/guest")}>Continue as Guest</button>
        <button onClick={() => navigate("/login")}>Login as Admin</button>
        <button onClick={() => navigate("/user-login")}>Login as User</button>
        <button onClick={() => navigate("/admin-signup")}>Sign Up as Admin</button>
      </div>
    </div>
  );
}

export default Home;
