import "./App.css";
import logo from "./logo.svg";
import { Tarea } from "./interfaces/Task.interface";
import { useState } from "react";
import Listatareas from "./components/Listatareas";
import Formtarea from "./components/Formtarea";
interface Props {
  title?: string;
  id: number;
}

export function App({ title, id }: Props) {
  const [Task, setTask] = useState<Tarea[]>([
    {
      id: 1,
      title: "Learn Ts React",
      description: "learn",
      completed: false,
    },
  ]);

  const addANewTask = (task: Tarea) =>
    setTask([...Task, { ...task, id: new Date().getTime(), completed: false }]);

  const Deleted = (id: number) =>
    setTask(Task.filter((task) => task.id !== id));

  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt={title} style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <Formtarea addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <Listatareas tasks={Task} Delete={Deleted} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
