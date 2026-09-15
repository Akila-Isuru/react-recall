import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserFethcer() {
  const [users, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=4")
      .then((response) => response.json())
      .then((data: User[]) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Users Loading.....!</p>;
  }
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.name} - {user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
