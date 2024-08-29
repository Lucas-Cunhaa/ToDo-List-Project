/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import "../Css/form.css";
import useAxios from "../hooks/useAxios"
import { FormDataTypes } from "../interface/types";
import Spinner from "./SpinnerLoader";
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
        alert(response?.data.message)
        sessionStorage.setItem("id", id.toString())
    }

    return (
        <>
        <div className="form">
            <h1> Login </h1>
            {error ? <p className="login-error-message">{error.response?.statusText }</p> : null}   
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