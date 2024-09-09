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
  const [response, setResponse] = useState<AxiosResponse>();
  const { activeList, handleSetList } = useContext(TaskContext)

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
    console.log(data)
    setResponse(data);
  };

  const handleGetTasks = (id: number) => {
    handleSetList(id)
    navigate("/tasks");
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
          className={`list-item ${id === activeList ? "selected" : ""}`}
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
