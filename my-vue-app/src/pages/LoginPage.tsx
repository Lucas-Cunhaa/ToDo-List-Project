import FormLogin from "../components/FormLogin"
import "../Css/formPage.css";
const FormPage = () => {
    return (
        <> 
        <body>
            <div className='top-side'>
                <img className="clock-img" src="\src\assets\clock.png" alt="Clock" />
                <h2> Everthing you need to do in one place</h2>
                <img className="notebook-img" src="\src\assets\loginNoteBoard.png" alt="Note Board" />
            </div>
           
        
            <div className="form-content">
                <h1> Login </h1>
            <FormLogin>
        
            </FormLogin>
            <p> Do not have an account yet? <a href="">Sign Up</a></p>
            </div>
        </body>
        </>
    )
}

export default FormPage