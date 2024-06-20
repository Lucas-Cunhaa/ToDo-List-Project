import { useForm } from "react-hook-form";
import "../Css/form.css";
import NavBar from "./NavBar";

interface FormLoginData {
    username : string ,  
    password : string , 
}

const FormLogin =  () => {

    const {
        register,
        handleSubmit,
      } = useForm<FormLoginData>();
    
    const onSubmit = (data: FormLoginData) => {
        console.log(data);
    };

    return (
        <>
        <div className="form">
            <h1> Login </h1>
            
            <div className="form-group">
                
                <input type="text" placeholder="Username" {...register("username", { required: true})} />  
            </div>
            <div className="form-group">
                
                <input type="password" placeholder="Password" {...register("password", { required: true})}/>
            </div>
            <div className="form-group">
                <button className="submit-button" onClick={() => handleSubmit(onSubmit)()}> <strong> LOGIN </strong></button>
            </div>
            <NavBar link='/register'> Do not have an account ? register HERE </NavBar>
        </div>
        </>
    )
}

export default FormLogin