interface List {
  id: string;
  title: string;
  description: string;
}

const Lists = () => {
  const lists: List[] = [
    {
      id: "1",
      title: "Law course",
      description: "Law course homework's",
    },
    {
      id: "2",
      title: "Mathematic",
      description: "Mathematic homework's",
    },
    {
      id: "3",
      title: "Personal Project",
      description: "Personal Project tasks to do",
    },
  ];

  return (
    <> 
      {lists.map(({ id, title, description }: List) => (
        <div className="list-section" key={id}>
          <h2 className="list-name">{title}</h2>
          <h3 className="list-description">{description}</h3>
        </div>
      ))}
    </>
  );
};

export default Lists;
