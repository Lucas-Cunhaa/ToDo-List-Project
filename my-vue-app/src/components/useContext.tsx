import React from "react";
import { useState } from "react";
import useAxios from "../hooks/useAxios";

type Task = {
    id: number;
    title: string;
    description: string;
    state: string;
    member?: string;
}
interface TasksContextData {
    tasks: Array<Task>;
    getAllTasks: () => void;
}

export const TaskContext = React.createContext<TasksContextData>({
    tasks: [], 
    getAllTasks: () => {}
});

export interface ITasksProviderProps {
    children: React.ReactNode; 
}

export const TaskProvider: React.FC<ITasksProviderProps> = ({ children }) => {
    const [tasks, setTask] = useState<Task[]>([])

    const { fetch } = useAxios()

    const getAllTasks = async () => {
        const list_id = sessionStorage.getItem("list_id");
        const response = await fetch({
          url: "tasks",
          method: "get",
          params: {
            id: list_id,
          },
        });
        if (response) {
            setTask(response?.data.dataResponse);
        }
        
      };
    
    return(
        <TaskContext.Provider value={ {tasks, getAllTasks } }>
            {children}
        </TaskContext.Provider>
    )
}
