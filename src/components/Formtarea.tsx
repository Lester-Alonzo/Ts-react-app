import { AiOutlinePlus } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { Tarea } from "../interfaces/Task.interface";
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Props {
  addANewTask: (task: Tarea) => void;
}
const initialState = {
  title: "",
  description: "",
};
export default function Formtarea({ addANewTask }: Props) {
  const [Task, setTask] = useState(initialState);
  const InputTitle = useRef<HTMLInputElement>(null);
  const handleInputCHange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({
      ...Task,
      [name]: value,
    });
  };
  const hableNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask(Task);
    setTask(initialState);
    InputTitle.current?.focus();
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Añadir Tarea</h1>
      <form onSubmit={hableNewTask}>
        <input
          type="text"
          placeholder="Escribe un titulo"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputCHange}
          value={Task.title}
          autoFocus
          ref={InputTitle}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Escribe una descripcion"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputCHange}
          value={Task.description}
        ></textarea>
        <button className="btn btn-primary">
          Agregar <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
