import FormLogin from "../components/FormLogin"
import "../Css/formPage.css";
import NavBar from "../components/NavBar";

const LoginPage = () => {
    return (
        <> 
        <div className="container">
            <div className='top-side'>
                    <img className="clock-img" src="\src\assets\clock.png" alt="Clock" />
                    <h2> Everthing you need to do <br></br>in one place</h2>
                    
                    <img className="notebook-img" src="\src\assets\loginNoteBoard.png" alt="Note Board" />
                    
                </div>
            
            
                <div className="form-content">
                
                <FormLogin>
                
                </FormLogin>
                
                        <div className="navBarLogin" > 
                         <NavBar link='register'> Do not have an account yet? Sign Up </NavBar>
                         <NavBar link='home'> Do not have an account yet? Sign Up </NavBar>
                         <NavBar link='addList'> Do not have an account yet? Sign Up </NavBar>
                        </div>
                          
                
            </div>
            
        </div>
        </>
    )
}

export default LoginPage