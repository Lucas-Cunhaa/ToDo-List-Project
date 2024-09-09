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
type List = {
    id: number
    title: string
}
interface TasksContextData {
    tasks: Array<Task>;
    activeList:  List; 
    handleSetList: (list: List) => void; 
    getAllTasks: () => void;
    
}

export const TaskContext = React.createContext<TasksContextData>({
    tasks: [], 
    activeList: {id: 1, title: ""}, 
    handleSetList: () => {},
    getAllTasks: () => {}
    
});

export interface ITasksProviderProps {
    children: React.ReactNode; 
}

export const TaskProvider: React.FC<ITasksProviderProps> = ({ children }) => {
    const [tasks, setTask] = useState<Task[]>([])
    const [activeList, setActiveList] = useState<List>({id: 1, title: ""})
    const { fetch } = useAxios()
    const getAllTasks = async () => {
        const response = await fetch({
          url: "tasks",
          method: "get",
          params: {
            id: activeList.id,
          },
        });
        
        if (response) {
            setTask(response?.data.dataResponse);
        }
      };
    
    useEffect(() => {
        getAllTasks()
    }, [activeList])

    const handleSetList = (list: List) => {
        setActiveList(list)
    }
    
    return(
        <TaskContext.Provider value={ {tasks, activeList, handleSetList, getAllTasks} }>
            {children}
        </TaskContext.Provider>
    )
}
