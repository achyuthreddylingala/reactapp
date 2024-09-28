import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Make sure this path is correct
import { collection, getDocs } from "firebase/firestore";
import './UserList.css'; // Import CSS

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const userSnapshot = await getDocs(usersCollection);
        const userList = userSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userList);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <span className="user-info">
              {user.name} - {user.email}
            </span>
            {/* Placeholder for user actions */}
            <div className="user-actions">
              <button className="deactivate-button">Deactivate</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
