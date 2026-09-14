import React, { use } from "react";

type User = {
  id: number;
  name: string;
  role: string;
};
function UserList() {
  const users: User[] = [
    { id: 1, name: "Kasun", role: "Backend Developer" },
    { id: 2, name: "Nimal", role: "Frontend Intern" },
    { id: 3, name: "Kamal", role: "DevOps Engineer" },
  ];
  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}-{user.name}-{user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
