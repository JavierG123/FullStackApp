export default function TaskList({ tasks }) {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 mb-2">
            <strong>{task.title}</strong>: {task.description}
          </li>
        ))}
      </ul>
    );
  }
  