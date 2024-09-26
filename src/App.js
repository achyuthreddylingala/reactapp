// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserLogin from "./components/UserLogin";
import AdminSignup from "./components/AdminSignup";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Admin Login and Admin Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* User Signup and User Dashboard */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserDashboard isGuest={false} />} />

        {/* Guest Dashboard (limited access) */}
        <Route path="/guest" element={<UserDashboard isGuest={true} />} />

        {/* New Routes for User Login and Admin Signup */}
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
