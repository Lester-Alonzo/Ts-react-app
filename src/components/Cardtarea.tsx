import { Tarea } from "../interfaces/Task.interface";

interface Props {
  task: Tarea;
  Delete: (id: number) => void;
}
export default function Tareas({ task, Delete }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark ">
      <h2>{task.title}</h2>
      <p hidden>{task.id}</p>
      <p>{task.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => task.id && Delete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}
