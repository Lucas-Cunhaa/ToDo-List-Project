/* eslint-disable @typescript-eslint/no-unused-vars */
import "../Css/form.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormDataTypes } from "../interface/types";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import useAxios from "../hooks/useAxios";
import Spinner from "./SpinnerLoader";
import ResponseMessage from "./ResponseMessage";
import NavBar from "./NavBar";

const FormLogin = () => {
  const [response, setResponse] = useState<AxiosResponse>();
  const { error, loading, fetch } = useAxios();
  const { register, handleSubmit } = useForm<FormDataTypes>();
  const navigate = useNavigate();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };
  const onSubmit = async (formData: FormDataTypes) => {
    const data = await fetch({
      url: "login",
      method: "post",
      data: {
        email: formData.email,
        password: formData.password,
      },
    });

    setResponse(data);
  };

  const handleSetUser = (id: number) => {
    sessionStorage.setItem("id", id.toString());
  };

  useEffect(() => {
    if (response) {
      handleSetUser(response.data.dataResponse.id);
      const timeout = setTimeout(() => navigate("/tasks"), 1500);

      return () => clearTimeout(timeout);
    }
  }, [navigate, response]);

  return (
    <>
      <div className="form">
        <h1> Login </h1>
        <br></br>
        <ResponseMessage
          messageError={error?.response?.statusText}
          messageOk={response?.data.message}
        />
        <div className="form-group">
          <input
            type="text"
            placeholder="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="form-group" onKeyDown={() => handleKeyDown}>
          <button
            className="submit-button"
            onClick={() => handleSubmit(onSubmit)()}
            onKeyDown={() => handleKeyDown}
          >
            {" "}
            <strong> Login </strong>{" "}
          </button>
        </div>
        <br></br>
        <div className="navBar-login">
          <NavBar link="register"> Do not have an account yet? Sign Up </NavBar>
        </div>
        <div className="login-spinner">
          {" "}
          <Spinner showSpinner={loading} />{" "}
        </div>
      </div>
    </>
  );
};

export default FormLogin;
