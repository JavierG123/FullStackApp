import { useState } from "react";

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.NEXT_PUBLIC_FLASK_URL + "/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    if (response.ok) {
      setTitle("");
      setDescription("");
      onTaskCreated();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required className="border p-2 mr-2" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required className="border p-2 mr-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Agregar</button>
    </form>
  );
}
