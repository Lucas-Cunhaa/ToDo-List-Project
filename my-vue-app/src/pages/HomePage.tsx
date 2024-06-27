import SideBar from "../components/SideBar";
import "../Css/homePage.css"

const HomePage = () => {
    return (
     <> 
        <div className="home-page"> 
         <SideBar></SideBar>
         
         <div className="img-container"> <img
              src="\src\assets\homeList.png"
              className="home-img"
              alt="A list with clounds to start a new one"
            ></img>
        </div>
        
        </div>
     </>

)
    
}

export default HomePage