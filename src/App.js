import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserLogin from "./components/UserLogin";
import AdminSignup from "./components/AdminSignup";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";

// Not Found Component
function NotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserDashboard isGuest={false} />} />
        <Route path="/guest" element={<UserDashboard isGuest={true} />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        
        {/* Catch-all route for invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
