// components/UserDashboard.js
import React from "react";

function UserDashboard({ isGuest }) {
  return (
    <div>
      <h1>{isGuest ? "Welcome, Guest!" : "Welcome, User!"}</h1>
      {isGuest ? (
        <p>You have limited access. Please sign up or log in for full features.</p>
      ) : (
        <p>Enjoy all the features of the platform!</p>
      )}
    </div>
  );
}

export default UserDashboard;
