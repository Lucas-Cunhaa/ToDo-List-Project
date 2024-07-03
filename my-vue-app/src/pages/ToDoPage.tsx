import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import "../Css/toDoPage.css";
import ToDoComponent from "../components/toDos";
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
            <ToDoComponent /> 
          </div>
       </div>
       </div>
    </>
  );
};
export default ToDoPage;
