import "../Css/list.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";

interface List {
  id: number;
  title: string;
  description: string;
}

const Lists = () => {
  const { response, loading, fetch } = useAxios();
  const navigate = useNavigate()

  const handleGetLists = async () => {
    const id = sessionStorage.getItem("id");
    await fetch({
      url: "home",
      method: "get",
      params: {
        id: id,
      },
    });
  };

  const handleGetTasks = (id : number) => {
    sessionStorage.setItem("list_id", id.toString())
    navigate("/toDo")
    navigate(0)
  }
  const isPar = (id: number) => id % 2 === 0;

  useEffect(() => {
    handleGetLists();
  }, []);

if(loading) {
    return 
  }
  return (
    <>
      {
        response?.data.dataResponse.map(({ id, title, description } : List) => (
          <div key={id} onClick={() => {handleGetTasks(id)} }>
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
        ))
        }
    </>
  );
};

export default Lists;
