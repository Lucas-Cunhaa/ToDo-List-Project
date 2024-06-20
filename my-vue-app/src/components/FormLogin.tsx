import { useForm } from "react-hook-form";
import "../Css/form.css";

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
            <p> Do not have an account yet? <a href="">Create here</a></p>
        </div>
        </>
    )
}

export default FormLogin