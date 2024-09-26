// components/UserList.js
import React from "react";

const dummyUsers = [
  { id: 1, name: "User 1", email: "user1@example.com" },
  { id: 2, name: "User 2", email: "user2@example.com" },
];

function UserList() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {dummyUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            {/* You can add buttons to deactivate/activate user accounts here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
