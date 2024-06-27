import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import "../Css/toDo.css";

const ToDoPage = () => {
  return (
    <>
      <div className="to-do-content">
        <div className="to-do-right-side">
          <SideBar />
        </div>
        <div className="to-do-section"> 
          <div className="to-do-top-side">
            <TopBar />
          </div>
          <div className="to-do-tasks">
            <div className="todo"> <h1> HERE</h1></div>
            <div className="todo"> <h1> HERE</h1></div>
            <div className="todo"> <h1> HERE</h1></div>
            
          </div>
       </div>
       </div>
    </>
  );
};
export default ToDoPage;
