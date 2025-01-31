import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_FLASK_URL + "/tasks");
    const data = await response.json();
    setTasks(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Tareas</h1>
      <TaskForm onTaskCreated={fetchTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}
