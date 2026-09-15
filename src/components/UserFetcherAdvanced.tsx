import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserFetcherAdvanced() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); //  Error State එකක්

  useEffect(() => {
    // 1. useEffect ඇතුළේ async function එකක් සාදයි

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=4",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users !");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Users Loading...!</p>;
  if (error)
    return <p className="text-red-500 font-bold p-3">Error: {error}</p>;
  return (
    <div className="p-3">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
