// components/AdminDashboard.js
import React from "react";
import ManageProducts from "./ManageProducts";
import UserList from "./UserList";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Manage Products and Users:</p>
      <ManageProducts />
      <UserList />
    </div>
  );
}

export default AdminDashboard;
