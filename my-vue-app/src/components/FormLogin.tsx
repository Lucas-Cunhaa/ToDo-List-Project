/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import "../Css/form.css";
import useAxios from "../hooks/useAxios"
import { FormDataTypes } from "../interface/types";
import Spinner from "./SpinnerLoader";
import ResponseMessage from "./ResponseMessage";
const FormLogin =  () => {

    const { response, error, loading, fetch } = useAxios();

    const {register, handleSubmit,} = useForm<FormDataTypes>();
    
    const onSubmit =  async (formData: FormDataTypes) => {

        await fetch({ 
            url: "login", 
            method: "post", 
            data: { 
                    email: formData.email, 
                    password: formData.password
                },
        })
        
        if(response && !error) {
            console.log(response)
            handleSetUser(response.data.id)
        }
    }
    const handleSetUser = (id: number) => {
        
        sessionStorage.setItem("id", id.toString())
    }

    return (
        <>
        <div className="form">
            <h1> Login </h1> 
            <br></br><ResponseMessage  messageError={error?.response?.statusText} messageOk={response?.data.message} />
            <div className="form-group">
            
                <input type="text" placeholder="email" {...register("email", { required: true})} />  
            </div>
            <div className="form-group">
                
                <input type="password" placeholder="Password" {...register("password", { required: true})}/>
            </div>
           
            <div className="form-group">
                <button className="submit-button" onClick={() => handleSubmit(onSubmit)()}> <strong> Login </strong> </button>
            </div>
            <br></br>
            <div className="login-spinner"> <Spinner showSpinner={loading} /> </div>

            
        </div>
        </>
    )
}

export default FormLogin