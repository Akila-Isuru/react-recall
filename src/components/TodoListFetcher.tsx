import { useState, useEffect } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function () {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        );
        if (!response.ok) {
          throw new Error("Failed to load !");
        }

        const data: Todo[] = await response.json();
        setTodos(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  if (loading) return <p>Users Loading...!</p>;
  if (error)
    return <p className="text-red-500 font-bold p-3">Error: {error}</p>;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? "text-green-500" : "text-red-500"}
            >
              {todo.title} - {todo.completed ? "Completed" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
