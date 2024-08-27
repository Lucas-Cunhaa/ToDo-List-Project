/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import "../Css/form.css";
import useAxios from "../hooks/useAxios"
import { FormDataTypes } from "../interface/types";
const FormLogin =  () => {

const { response, error, loading, fetch } = useAxios()

    const {
        register,
        handleSubmit,
      } = useForm<FormDataTypes>();
    
      const onSubmit = (formData: FormDataTypes) => {
        fetch({ 
            url: "login", 
            method: "post", 
            data: { 
                    email: formData.email, 
                    password: formData.password
                },
        })
    }

    console.log(response, loading, error)

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
            {error ? <p>{error.response?.statusText }</p> : null

            }
            
        </div>
        </>
    )
}

export default FormLogin