import React from "react";
import { useState, useEffect } from "react";
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
    activeList: number; 
    handleSetList: (id : number) => void; 
    getAllTasks: () => void;
    
}

export const TaskContext = React.createContext<TasksContextData>({
    tasks: [], 
    activeList: 1,
    handleSetList: () => {},
    getAllTasks: () => {}
    
});

export interface ITasksProviderProps {
    children: React.ReactNode; 
}

export const TaskProvider: React.FC<ITasksProviderProps> = ({ children }) => {
    const [tasks, setTask] = useState<Task[]>([])
    const [activeList, setActiveList] = useState(1)
    const { fetch } = useAxios()
    const getAllTasks = async () => {
        const response = await fetch({
          url: "tasks",
          method: "get",
          params: {
            id: activeList,
          },
        });
        
        if (response) {
            setTask(response?.data.dataResponse);
        }
      };
    
    useEffect(() => {
        getAllTasks()
    }, [activeList])
    
    const handleSetList = (id: number) => {
        setActiveList(id)
    }
    
    return(
        <TaskContext.Provider value={ {tasks, activeList, handleSetList, getAllTasks} }>
            {children}
        </TaskContext.Provider>
    )
}
