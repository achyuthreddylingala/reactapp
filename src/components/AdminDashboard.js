// AdminDashboard.js
import React from "react";
import ManageProducts from "./ManageProducts";
import UserList from "./UserList";
import "./AdminDashboard.css"; // Import the CSS file

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Admin Dashboard</h1>
      <p className="dashboard-subtitle">Manage Products and Users:</p>
      <ManageProducts />
      <UserList />
    </div>
  );
}

export default AdminDashboard;
