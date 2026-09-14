import React, { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function DynamicTaskList() {
  // 1. Task Array එක State එකක් ලෙස තබා ගැනීම
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React Components", completed: true },
    { id: 2, title: "Master useState Hook", completed: true },
  ]);

  // 2. Input එකේ තියෙන Text එක තියාගන්න State එක
  const [taskTitle, setTaskTitle] = useState<string>("");

  // 3. අලුත් Task එකක් Add කරන Function එක
  const handleAddTask = () => {
    if (taskTitle.trim() === "") return; // හිස් Text එකතු කිරීම වැළැක්වීමට

    const newTask: Task = {
      id: Date.now(), // Unique ID එකක් සඳහා timestamp එක පාවිච්චි කරයි
      title: taskTitle,
      completed: false,
    };

    // Array State එක Update කිරීම (Spread Operator)
    setTasks([...tasks, newTask]);

    // Input එක Clear කිරීම
    setTaskTitle("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      {/* Input + Add Button */}
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter new task..."
      />
      <button onClick={handleAddTask}>Add Task</button>

      {/* Array එක Render කිරීම */}
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title} - {t.completed ? "Completed ✅" : "Pending ⏳"}
          </li>
        ))}
      </ul>
    </div>
  );
}
