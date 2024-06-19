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
        <div className="form-login">
            <div className="form-login-group">
                <label> Username </label>
                <input type="text" placeholder="Username" {...register("username", { required: true})} />  
            </div>
            <div className="form-login-group">
                <label> Password </label>
                <input type="password" placeholder="Password" {...register("password", { required: true})}/>
            </div>
            <div className="form-login-group">
                <button className="submit-button" onClick={() => handleSubmit(onSubmit)()}> SEND </button>
            </div>
        </div>
        </>
    )
}

export default FormLogin