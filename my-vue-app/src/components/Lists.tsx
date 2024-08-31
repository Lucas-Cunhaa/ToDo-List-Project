import { useEffect, useState } from "react";
import "../Css/list.css";
import useAxios from "../hooks/useAxios";

interface List {
  id: number;
  title: string;
  description: string;
}

const Lists = () => {
  const { response, error,  fetch,  } = useAxios();
  const [lists, setLists] = useState<List[]>([]);

  const handleGetTasks = async () => {
    const id = sessionStorage.getItem("id");
    await fetch({
      url: "home",
      method: "get",
      params: {
        id: id
      }
    });
    console.log(response, error)
    if (response?.data?.dataResponse) {
      setLists(response.data.dataResponse);
    }
  };

  const isPar = (id: number) => id % 2 === 0;

  useEffect(() => {
    handleGetTasks();
  }, []); 

  return (
    <>
      {lists.map(({ id, title, description }) => (
        <div key={id}>
          {isPar(id) ? (
            <div className="list-section background-gray">
              <h2 className="list-name">{title}</h2>
              <h3 className="list-description">{description}</h3>
            </div>
          ) : (
            <div className="list-section">
              <h2 className="list-name">{title}</h2>
              <h3 className="list-description">{description}</h3>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Lists;
