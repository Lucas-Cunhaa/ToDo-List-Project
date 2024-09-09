import "../Css/list.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { TaskContext } from "./useContext";
import useAxios from "../hooks/useAxios";

interface List {
  id: number;
  title: string;
  description: string;
}

const Lists = () => {
  const { loading, fetch } = useAxios();
  const [selectedListId, setSelectedListId] = useState<number | null>(null);
  const [response, setResponse] = useState<AxiosResponse>();
  const { getAllTasks } = useContext(TaskContext)

  const navigate = useNavigate();

  const handleGetLists = async () => {
    const id = sessionStorage.getItem("id");
    const data = await fetch({
      url: "home",
      method: "get",
      params: {
        id: id,
      },
    });

    setResponse(data);
  };

  const handleGetTasks = async (id: number) => {
    sessionStorage.setItem("list_id", id.toString());
    setSelectedListId(id);
    getAllTasks()
    navigate("/toDo");
    
  };

  useEffect(() => {
    handleGetLists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {response?.data.dataResponse.map(({ id, title, description }: List) => (
        <div
          key={id}
          onClick={() => handleGetTasks(id)}
          className={`list-item ${id === selectedListId ? "selected" : ""}`}
        >
          <div
            className={`list-section ${id % 2 === 0 ? "background-gray" : ""}`}
          >
            <h2 className="list-name">{title}</h2>
            <h3 className="list-description">{description}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Lists;
