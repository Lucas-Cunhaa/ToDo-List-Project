import { useForm } from "react-hook-form";
import validator from 'validator'
import useAxios from "../hooks/useAxios";
import "../Css/form.css";

interface FormData {
    username : string , 
    email: string , 
    password : string , 
    checkBox : string 
}

const Form = () => {
  const { response, error, loading, fetch } = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    fetch({
      url: "register",
      method: "post", 
      data: {
          username : formData.username, 
          email: formData.email, 
          password: formData.password
          }, 
    })
  };

  return (
    <>
      <div className="form">
      <h1> Create Account</h1>
        <div className="form-group">
        {error ? <p className="login-error-message">{error.response?.statusText }</p> : null}
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
      </div>
    </>
  );
};

export default Form;
