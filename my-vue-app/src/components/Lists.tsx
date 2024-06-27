import "../Css/list.css";

interface List {
  id: number;
  title: string;
  description: string;
}

const Lists = () => {
  const lists: List[] = [
    {
      id: 1,
      title: "Law course",
      description: "Law course homework's",
    },
    {
      id: 2,
      title: "Mathematic",
      description: "Mathematic homework's",
    },
    {
      id: 3,
      title: "Personal Project",
      description: "Personal Project tasks to do",
    },
    {
      id: 4,
      title: "Python",
      description: "Mr's Dalton tasks",
    },
  ];

  const isPar = (id: number) => {
    if (id % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      {lists.map(({ id, title, description }: List) => (
        <div key={id}>
          {isPar(id) && <div className="list-section background-gray">
            <div className="list-section" key={id}>
            <h2 className="list-name">{title}</h2>
            <h3 className="list-description">{description}</h3>
          </div>
           </div>
           }
           {!isPar(id) && <div className="list-section" key={id}>
            <h2 className="list-name">{title}</h2>
            <h3 className="list-description">{description}</h3>
          </div> 
          }
         
        </div>
      ))}
    </>
  );
};

export default Lists;
