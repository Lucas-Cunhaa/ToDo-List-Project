/* eslint-disable @typescript-eslint/no-unused-vars */
import "../Css/form.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormDataTypes } from "../interface/types"
import { useEffect } from "react";
import useAxios from "../hooks/useAxios"
import Spinner from "./SpinnerLoader";
import ResponseMessage from "./ResponseMessage";

const FormLogin =  () => {

  const { response, error, loading, fetch } = useAxios()
  const {register, handleSubmit,} = useForm<FormDataTypes>();
  const navigate = useNavigate()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
      handleSubmit(onSubmit)(); 
    }
  };
    const onSubmit =  async (formData: FormDataTypes) => {

        await fetch({ 
            url: "login", 
            method: "post", 
            data: { 
                    email: formData.email, 
                    password: formData.password
                },
        })
    }
    const handleSetUser = (id: number) => {
        sessionStorage.setItem("id", id.toString())
    }
    useEffect(() => {
        if(response) {
            handleSetUser(response.data.dataResponse.id)
            const timeout = setTimeout(() => navigate("/home")
            , 1500)
            
            return () => clearTimeout(timeout)
        }
       
    }, [navigate, response]);

    return (
        <>
        <div className="form" >
            <h1> Login </h1> 
            <br></br><ResponseMessage  messageError={error?.response?.statusText} messageOk={response?.data.message} />
            <div className="form-group">
            
                <input type="text" placeholder="email" {...register("email", { required: true})} />  
            </div>
            <div className="form-group">
                
                <input type="password" placeholder="Password" {...register("password", { required: true})}/>
            </div>
           
            <div className="form-group" onKeyDown={() => handleKeyDown}>
                <button className="submit-button" onClick={() => handleSubmit(onSubmit)()} onKeyDown={() => handleKeyDown}> <strong> Login </strong> </button>
            </div>
            <br></br>
            <div className="login-spinner"> <Spinner showSpinner={loading} /> </div>

            
        </div>
        </>
    )
}

export default FormLogin