import "../Css/topBar.css"
import { useState, useEffect } from "react"
import useAxios from "../hooks/useAxios"
import FormAddToDo from "./FormAddTodo"
import FormAddMember from "./FormAddMember"


const TopBar = () => {
const [openFormToDo, setOpenFormToDo] = useState(false)

const [openFormMember, setOpenFormMember] = useState(false)

const {response, loading,  fetch} = useAxios()

const handleGetListName = async () => {
    const id = sessionStorage.getItem("list_id");
    await fetch({
      url: "home/name",
      method: "get",
      params: {
        id: id,
      },
    });
  };

  useEffect(() => {
    handleGetListName();
  }, []);


const closeFormAddTodo = () => {
    setOpenFormToDo(false)
}

const closeFormAddMember = () => {
    setOpenFormMember(false)
}

if (loading) return

return (
    <div className="nav-top">
        <div className="nav-top-left">
            <h1 className="list-title">{response?.data.dataResponse.title}</h1>
        </div>
        <div className="nav-top-right">

        <svg className="delete-svg" width="80" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5055 13.3327C22.1385 13.3327 21.7867 13.4652 21.5272 13.7011C21.2678 13.9369 21.122 14.2568 21.122 14.5904V15.848H29.4226V14.5904C29.4226 14.2568 29.2769 13.9369 29.0174 13.7011C28.758 13.4652 28.4061 13.3327 28.0392 13.3327H22.5055ZM32.1895 15.848V14.5904C32.1895 13.5897 31.7522 12.63 30.9739 11.9225C30.1956 11.2149 29.1399 10.8174 28.0392 10.8174H22.5055C21.4047 10.8174 20.3491 11.2149 19.5707 11.9225C18.7924 12.63 18.3552 13.5897 18.3552 14.5904V15.848H12.8214C12.0574 15.848 11.438 16.4111 11.438 17.1057C11.438 17.8003 12.0574 18.3634 12.8214 18.3634H14.2049V34.713C14.2049 35.7137 14.6421 36.6734 15.4204 37.381C16.1988 38.0885 17.2544 38.486 18.3552 38.486H32.1895C33.2902 38.486 34.3459 38.0885 35.1242 37.381C35.9025 36.6734 36.3398 35.7137 36.3398 34.713V18.3634H37.7232C38.4873 18.3634 39.1066 17.8003 39.1066 17.1057C39.1066 16.4111 38.4873 15.848 37.7232 15.848H32.1895ZM16.9717 18.3634V34.713C16.9717 35.0466 17.1175 35.3665 17.3769 35.6023C17.6364 35.8382 17.9882 35.9707 18.3552 35.9707H32.1895C32.5564 35.9707 32.9083 35.8382 33.1677 35.6023C33.4272 35.3665 33.5729 35.0466 33.5729 34.713V18.3634H16.9717ZM22.5055 22.1364C23.2695 22.1364 23.8889 22.6995 23.8889 23.394V30.94C23.8889 31.6346 23.2695 32.1977 22.5055 32.1977C21.7414 32.1977 21.122 31.6346 21.122 30.94V23.394C21.122 22.6995 21.7414 22.1364 22.5055 22.1364ZM26.6558 23.394C26.6558 22.6995 27.2751 22.1364 28.0392 22.1364C28.8032 22.1364 29.4226 22.6995 29.4226 23.394V30.94C29.4226 31.6346 28.8032 32.1977 28.0392 32.1977C27.2751 32.1977 26.6558 31.6346 26.6558 30.94V23.394Z" fill="black"/>
        <circle cx="24.965" cy="24.9591" r="23.9795" stroke="black" stroke-width="1.22972"/>
        </svg>
        
        <button className="top-bar-button" onClick={() => setOpenFormToDo(true)}>
        <svg className="small-plus-svg" width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 10.5H3.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
        <path d="M10.5 3.5V17.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <strong className="top-bar-button-text">Add To Do</strong>
        </button>

        <button className="top-bar-button" onClick={() => setOpenFormMember(true)}>
        <svg className="small-plus-svg" width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 10.5H3.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
        <path d="M10.5 3.5V17.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <strong className="top-bar-button-text" >Invite People</strong>
        </button>
        
        { openFormToDo && <FormAddToDo closeForm={closeFormAddTodo} /> }

        { openFormMember && <FormAddMember closeForm={closeFormAddMember} /> }
        
        </div> 
        
    </div>
    )

}
export default TopBar