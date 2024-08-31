import "../Css/form.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import validator from 'validator'
import useAxios from "../hooks/useAxios";
import Spinner from "./SpinnerLoader";
import ResponseMessage from "./ResponseMessage";
import NavBar from "./NavBar";
interface FormData {
    username : string , 
    email: string , 
    password : string , 
    checkBox : boolean
}

const Form = () => {
  const { response, error, loading, fetch } = useAxios();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit =  async (formData: FormData) => {
    await fetch({ 
        url: "register", 
        method: "post", 
        data: { 
                email: formData.email, 
                username: formData.username,
                password: formData.password
            },
    })
}
  useEffect(() => {
    if(response) {
        const timeout = setTimeout(() => navigate("/")
        , 1200)
      
        return () => clearTimeout(timeout)
  }
 
}, [navigate, response]);
  return (
    <>
      <div className="form">
      <h1> Create Account</h1>
        <div className="form-group">
        <ResponseMessage  messageError={error?.response?.statusText} messageOk={response?.data.message} /> 
          <input
            type="email"
            className={errors?.username && "input-error"}
            placeholder="Email"
            {...register("email", {
              required: true,
              validate: (value)  => {
                return validator.isEmail(value);
              },
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="error-message"> Email is required</p>
          )}
          {errors?.email?.type === "validate" && (
            <p className="error-message"> Email must be valid </p>
          )}
        </div>

        <div className="form-group">
          
          <input
            type="text"
            className={errors?.username && "input-error"}
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors?.username?.type === "required" && (
            <p className="error-message"> Username is required</p>
          )}
        </div>

        <div className="form-group">
         
          <input
            type="password"
            className={errors?.password && "input-error"}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <p className="error-message">Password is required</p>
          )}
        </div>

        <div className="form-group ">
          <div className="checkbox-section"> 
          <input
            type="checkbox"
            id="check"
            {...register("checkBox", { required: true })}
          />
          <label> Confirm to the privacy terms </label> 
          </div>
          {errors?.checkBox?.type === "required" && (
            <p className="error-message">You must agree with the terms</p>
          )}
          
        </div>

        <div className="form-group">
          <button  className="submit-button" onClick={() => handleSubmit(onSubmit)()}>
            {" "}
            <strong> Create Account  </strong>{" "}
          </button>
        </div>
        <br></br>
        <div className="navBar-register" > 
            <NavBar link="/"> Alredy have an account ? Log in </NavBar>
        </div>
        
        <div className="spinner" > 
            <Spinner showSpinner={loading} />
        </div>
        
      </div>
    </>
  );
};

export default Form;
