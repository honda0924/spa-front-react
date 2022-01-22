import axios from "axios";
import { Task } from "../types/Task";


export const getTasks = async () =>{
  const {data} = await axios.get<Task[]>('http://localhost:8090/api/tasks');
  return data;
}