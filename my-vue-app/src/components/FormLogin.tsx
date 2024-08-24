/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import "../Css/form.css";
import useAxios from "../hooks/useAxios"
import { FormDataTypes } from "../interface/types";
import { useState } from "react";
const FormLogin =  () => {


const { response, error, loading, fetch } = useAxios()
const [isLoading, setIsLoading] = useState(loading)
    const {
        register,
        handleSubmit,
      } = useForm<FormDataTypes>();
    
    const onSubmit = (formData: FormDataTypes) => {
+       setIsLoading(true)
        fetch({ url:"login", method:"get", data:{formData.email, formData.password}, params:{} })
     
    };

    return (
        <>
        <div className="form">
            <h1> Login </h1>
            
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
            
        </div>
        </>
    )
}

export default FormLogin