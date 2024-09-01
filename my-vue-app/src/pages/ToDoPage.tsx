import "../Css/toDoPage.css";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
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
          <div className="to-do-section" > 
            <ToDoComponent /> 
          </div>
       </div>
       </div>
    </>
  );
};
export default ToDoPage;
