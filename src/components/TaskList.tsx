import React, { useState, type ChangeEvent } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function TaskList() {
  const [task, setTask] = useState<Task>({
    id: 1,
    title: "",
    completed: false,
  });

  const tasks: Task[] = [
    { id: 1, title: "Learn React Components", completed: true },
    { id: 2, title: "Master useState Hook", completed: true },
    { id: 3, title: "Practice List Rendering", completed: false },
    { id: 4, title: "Build an Intern Project", completed: false },
  ];

  return (
    <div>
      <h1>Task list</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>
              {task.id} - {task.title} -{" "}
              {task.completed ? "Completed ✅" : "Pending ⏳"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
