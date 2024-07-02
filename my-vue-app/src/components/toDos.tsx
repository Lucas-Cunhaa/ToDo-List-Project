import "../Css/toDoComponent.css";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  state: string;
  member: string;
}

const ToDoComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Law course",
      description: "Law course homework's lorem iypslom i have to solve some problmes that are very hard",
      state: "ToDo",
      member: "Lucas",
    },
    {
      id: 2,
      title: "Mathematic",
      description: "Mathematic homework's lorem iypslom i have to solve some problmes that are very hard",
      state: "ToDo",
      member: "Lucas"
    },
    {
      id: 3,
      title: "Personal Project",
      description: "Personal Project task lorem iypslom i have to solve some problmes that are very hard",
      state: "ToDo",
      member: "Lucas",
    },
    {
      id: 4,
      title: "Personal Project",
      description: "Personal Project task lorem iypslom i have to solve some problmes that are very hard",
      state: "ToDo",
      member: "Lucas",
    }
  ]);

  const handleChange = (id: number, newState: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, state: newState } : task));
  };

  return (
    <>
      {tasks.map(({ id, title, description, state, member }) => (
        <div key={id}>
          {state.toLowerCase() === "todo" && 
            <div className="task-group to-do">
              <div className="task-left to-do-left">
                <div className="task-title to-do-title">
                  <svg width="24" className="paper-svg" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.67464 0.404053C10.7783 0.404053 11.6729 1.29872 11.6729 2.40234V6.63176C11.6729 6.99867 11.5272 7.35055 11.2677 7.61L7.81141 11.0663C7.55197 11.3258 7.20009 11.4715 6.83318 11.4715H2.60376C1.50013 11.4715 0.605469 10.5769 0.605469 9.47322V2.40234C0.605469 1.29872 1.50013 0.404053 2.60376 0.404053H9.67464ZM9.67464 1.32634H2.60376C2.0095 1.32634 1.52776 1.80808 1.52776 2.40234V9.47322C1.52776 10.0675 2.0095 10.5492 2.60376 10.5492H6.75406V8.55094C6.75406 7.48537 7.58809 6.61459 8.63896 6.55581L8.75235 6.55264H10.7506V2.40234C10.7506 1.80808 10.2689 1.32634 9.67464 1.32634ZM10.0983 7.47493H8.75235C8.1878 7.47493 7.7248 7.90971 7.67992 8.46269L7.67635 8.55094V9.89686L10.0983 7.47493Z" fill="black"/>
                  </svg>
                  <h2 className=" task-title-h2 to-do-title-h2">{title}</h2>
                </div>
                <div className="task-description to-do-description">
                  <h3 className="task-description-h3 to-do-description-h3">{description}</h3>
                </div>
              </div>
              <div className="task-right to-do-right"> 
              <div className="select-group" > 
                  <select
                    id="select-state"
                    className="to-do-select-state"
                    value={state}
                    onChange={(e) => handleChange(id, e.target.value)}
                  >
                    <option value="ToDo"> To Do </option>
                    <option value="Doing"> Doing </option>
                    <option value="Done"> Done </option>
                  </select>
                  <svg className="delete-small-svg" width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.40725 0.403931L0.643799 7.16738M0.643799 0.403931L7.40725 7.16738" stroke="#101112" stroke-width="0.737831"/>
                  </svg>
                </div>
                <div className="task-member to-do-member">
                  <svg className="member-svg" width="24"height="24" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.09766 13.3878C1.09766 11.4664 3.65957 11.4664 4.94053 10.1854C5.581 9.54492 3.65957 9.54492 3.65957 6.34253C3.65957 4.20781 4.51333 3.14014 6.22148 3.14014C7.92964 3.14014 8.78339 4.20781 8.78339 6.34253C8.78339 9.54492 6.86196 9.54492 7.50244 10.1854C8.78339 11.4664 11.3453 11.4664 11.3453 13.3878" stroke="black" stroke-width="0.614859" stroke-linecap="round"/>
                  </svg>
                  <h2 className="task-member-h2 to-do-member-h2">{member}</h2>
                </div>
              </div>
            </div>
          }
           {state.toLowerCase() === "doing" && 
            <div className="task-group doing">
              <div className="task-left doing-left">
                <div className="task-title doing-title">
                  <svg width="24" className="paper-svg" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.67464 0.404053C10.7783 0.404053 11.6729 1.29872 11.6729 2.40234V6.63176C11.6729 6.99867 11.5272 7.35055 11.2677 7.61L7.81141 11.0663C7.55197 11.3258 7.20009 11.4715 6.83318 11.4715H2.60376C1.50013 11.4715 0.605469 10.5769 0.605469 9.47322V2.40234C0.605469 1.29872 1.50013 0.404053 2.60376 0.404053H9.67464ZM9.67464 1.32634H2.60376C2.0095 1.32634 1.52776 1.80808 1.52776 2.40234V9.47322C1.52776 10.0675 2.0095 10.5492 2.60376 10.5492H6.75406V8.55094C6.75406 7.48537 7.58809 6.61459 8.63896 6.55581L8.75235 6.55264H10.7506V2.40234C10.7506 1.80808 10.2689 1.32634 9.67464 1.32634ZM10.0983 7.47493H8.75235C8.1878 7.47493 7.7248 7.90971 7.67992 8.46269L7.67635 8.55094V9.89686L10.0983 7.47493Z" fill="black"/>
                  </svg>
                  <h2 className="task-title-h2 doing-title-h2">{title}</h2>
                </div>
                <div className="task-description doing-description">
                  <h3 className="task-description-h3 doing-description-h3">{description}</h3>
                </div>
              </div>
              <div className="task-right doing-right">
              <div className="select-group" > 
                  <select
                    id="select-state"
                    className="to-do-select-state"
                    value={state}
                    onChange={(e) => handleChange(id, e.target.value)}
                  >
                    <option value="ToDo"> To Do </option>
                    <option value="Doing"> Doing </option>
                    <option value="Done"> Done </option>
                  </select>
                  <svg className="delete-small-svg" width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.40725 0.403931L0.643799 7.16738M0.643799 0.403931L7.40725 7.16738" stroke="#101112" stroke-width="0.737831"/>
                  </svg>
                </div>
                <div className="task-member doing-member">
                  <svg className="member-svg" width="24" height="24" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.09766 13.3878C1.09766 11.4664 3.65957 11.4664 4.94053 10.1854C5.581 9.54492 3.65957 9.54492 3.65957 6.34253C3.65957 4.20781 4.51333 3.14014 6.22148 3.14014C7.92964 3.14014 8.78339 4.20781 8.78339 6.34253C8.78339 9.54492 6.86196 9.54492 7.50244 10.1854C8.78339 11.4664 11.3453 11.4664 11.3453 13.3878" stroke="black" stroke-width="0.614859" stroke-linecap="round"/>
                  </svg>
                  <h2 className="task-member-h2 doing-member-h2">{member}</h2>
                </div>
              </div>
            </div>
          }
           {state.toLowerCase() === "done" && 
            <div className="task-group done">
              <div className="task-left done-left">
                <div className="task-title done-title">
                  <svg width="24" height="24" className="paper-svg" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.67464 0.404053C10.7783 0.404053 11.6729 1.29872 11.6729 2.40234V6.63176C11.6729 6.99867 11.5272 7.35055 11.2677 7.61L7.81141 11.0663C7.55197 11.3258 7.20009 11.4715 6.83318 11.4715H2.60376C1.50013 11.4715 0.605469 10.5769 0.605469 9.47322V2.40234C0.605469 1.29872 1.50013 0.404053 2.60376 0.404053H9.67464ZM9.67464 1.32634H2.60376C2.0095 1.32634 1.52776 1.80808 1.52776 2.40234V9.47322C1.52776 10.0675 2.0095 10.5492 2.60376 10.5492H6.75406V8.55094C6.75406 7.48537 7.58809 6.61459 8.63896 6.55581L8.75235 6.55264H10.7506V2.40234C10.7506 1.80808 10.2689 1.32634 9.67464 1.32634ZM10.0983 7.47493H8.75235C8.1878 7.47493 7.7248 7.90971 7.67992 8.46269L7.67635 8.55094V9.89686L10.0983 7.47493Z" fill="black"/>
                  </svg>
                  <h2 className="task-title-h2 done-title-h2">{title}</h2>
                </div>
                <div className="task-description done-description">
                  <h3 className="task-description-h3 task-done-description-h3">{description}</h3>
                </div>
              </div>
              <div className="task-right done-right">
              <div className="select-group" > 
                  <select
                    id="select-state"
                    className="to-do-select-state"
                    value={state}
                    onChange={(e) => handleChange(id, e.target.value)}
                  >
                    <option value="ToDo"> To Do </option>
                    <option value="Doing"> Doing </option>
                    <option value="Done"> Done </option>
                  </select>
                  <svg className="delete-small-svg" width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.40725 0.403931L0.643799 7.16738M0.643799 0.403931L7.40725 7.16738" stroke="#101112" stroke-width="0.737831"/>
                  </svg>
                </div>
                <div className="task-member done-member">
                  <svg className="member-svg" width="24" height="24" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.09766 13.3878C1.09766 11.4664 3.65957 11.4664 4.94053 10.1854C5.581 9.54492 3.65957 9.54492 3.65957 6.34253C3.65957 4.20781 4.51333 3.14014 6.22148 3.14014C7.92964 3.14014 8.78339 4.20781 8.78339 6.34253C8.78339 9.54492 6.86196 9.54492 7.50244 10.1854C8.78339 11.4664 11.3453 11.4664 11.3453 13.3878" stroke="black" stroke-width="0.614859" stroke-linecap="round"/>
                  </svg>
                  <h2 className="task-member-h2 done-member-h2">{member}</h2>
                </div>
              </div>
            </div>
          }
        </div>
      ))}
    </>
  );
};

export default ToDoComponent;
