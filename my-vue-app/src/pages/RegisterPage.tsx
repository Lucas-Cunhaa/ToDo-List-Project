
import Form from "../components/Form";
import "../Css/formPage.css"
import NavBar from "../components/NavBar";

const RegisterForm = () => {
    return (
        <> 
        <body>
            <div className='top-side'>
                <img className="clock-img" src="\src\assets\clock.png" alt="Clock" />
                <h2> Everthing you need to do <br></br>in one place</h2>
                
                <img className="notebook-img" src="\src\assets\loginNoteBoard.png" alt="Note Board" />
                
            </div>
           
        
            <div className="form-content">
            
            <Form>
            
            </Form>
            <div className="navBarRegister" > 
                <NavBar link="/"> Alredy have an account ? Log in </NavBar>
            </div>
           
            </div>
        </body>
        </>
       
    )
}

export default RegisterForm