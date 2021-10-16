import { Tarea } from "../interfaces/Task.interface";
import Cardtarea from "./Cardtarea";
interface Props {
  tasks: Tarea[];
  Delete: (id: number) => void;
}
export default function Listatareas({ tasks, Delete }: Props) {
  return (
    <>
      {tasks.map((tarea) => (
        <div className="col-md-4 pb-2" key={tarea.id}>
          <Cardtarea task={tarea} Delete={Delete} />
        </div>
      ))}
    </>
  );
}
