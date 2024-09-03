import "../Css/formAddList.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { AxiosResponse } from "axios";

interface FormAddData {
  email: string;
  name: string;
}
interface FormAddMemberProps {
  closeForm: () => void;
}

const FormAddMember = (props: FormAddMemberProps) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const { register, handleSubmit } = useForm<FormAddData>();
  const { fetch } = useAxios();
  const navigate = useNavigate();

  const onSubmit = async (formData: FormAddData) => {
    const data = await fetch({
      url: "",
      method: "post",
      data: {
        email: formData.email,
        username: formData.email,
        password: formData.name,
      },
    });
    setResponse(data);
  };

  useEffect(() => {
    if (response) {
      const timeout = setTimeout(() => navigate(0), 1200);

      return () => clearTimeout(timeout);
    }
  }, [navigate, response]);

  return (
    <>
      <div className="form-add">
        <div className="form-add-top">
          <h1 className="form-add-h1">Invite people</h1>
          <button
            className="close-button"
            onClick={() => {
              console.log("JoaoNetoEGay");
            }}
          ></button>
          <label className="label-button" onClick={() => props.closeForm()}>
            <svg
              className="close-svg"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.7959 13.1992L35.9759 10.3792L24.7959 21.5592L13.6159 10.3792L10.7959 13.1992L21.9759 24.3792L10.7959 35.5592L13.6159 38.3792L24.7959 27.1992L35.9759 38.3792L38.7959 35.5592L27.6159 24.3792L38.7959 13.1992Z"
                fill="#E2E4E6"
              />
            </svg>
          </label>
        </div>

        <div className="addList-form-group">
          <label className="formAdd-label-group"> Email </label>
          <input
            className="addList-input"
            type="text"
            {...register("email", { required: true })}
          />
        </div>
        <div className="addList-form-group">
          <label className="formAdd-label-group"> Name </label>
          <input className="addList-input" type="text" {...register("name")} />
        </div>
        <div className="addList-form-group">
          <button
            className="add-button"
            onClick={() => handleSubmit(onSubmit)()}
          >
            {" "}
            <svg
              className="plus-button-svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 10.5H3.5"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M10.5 3.5V17.5"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            <strong> Invite </strong>{" "}
          </button>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default FormAddMember;
