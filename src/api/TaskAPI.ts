import axios from "axios";
import { Task } from "../types/Task";


const getTasks = async () =>{
  const {data} = await axios.get<Task[]>('http://localhost:8090/api/tasks');
  return data;
}

const updateDoneTask = async ({id, is_done}: Task) =>{
  const {data} = await axios.patch<Task[]>(
    `http://localhost:8090/api/tasks/update-done/${id}`,
    { is_done: !is_done }
  );
  return data;
}

const createTask = async (title: string) =>{
  const {data} = await axios.post<Task>(
    `http://localhost:8090/api/tasks/`,
    { title: title }
  );
  return data;
}

const updateTask = async ({id, task}: {id:number, task: Task}) =>{
  const {data} = await axios.put<Task[]>(
    `http://localhost:8090/api/tasks/${id}`,
    task
  );
  return data;
}

const deleteTask = async ({id}: Task) =>{
  const {data} = await axios.delete<Task[]>(
    `http://localhost:8090/api/tasks/${id}`
  );
  return data;
}

export {
  getTasks,
  updateDoneTask,
  createTask,
  updateTask,
  deleteTask
}