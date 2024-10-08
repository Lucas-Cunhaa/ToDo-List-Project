import "../Css/formAddList.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AxiosResponse } from "axios";
import { TaskContext } from "./useContext";
import useAxios from "../hooks/useAxios";
import ResponseMessage from "./ResponseMessage";

interface FormAddData {
  title: string;
  member: string;
  progress: string;
  description: string;
}

interface FormAddToDoProps {
  closeForm: () => void;
}
const FormAddToDo = (props: FormAddToDoProps) => {
  const [response, setResponse] = useState<AxiosResponse>();

  const { activeList, getAllTasks } = useContext(TaskContext)
  const members: string[] = [
    "Lucas",
    "Joao Neto",
    "Marcio",
    "Miguel",
    "Pedro",
    "Joao Victor",
  ];
  const progress: string[] = ["ToDo", "Doing", "Done"];

  const { register, handleSubmit } = useForm<FormAddData>();
  const { error, fetch } = useAxios();
  const navigate = useNavigate();

  const onSubmit = async (formData: FormAddData) => {
    console.log(formData);
    const list_id = activeList.id
    const data = await fetch({
      url: "tasks",
      method: "post",
      data: {
        title: formData.title,
        description: formData.description,
        state: formData.progress,
        list_id: list_id,
      },
    });
    setResponse(data);
  };

  useEffect(() => {
    if (response) {
      props.closeForm()
      getAllTasks()
    }
  }, [navigate, response, getAllTasks]);

  const memberOptions = (members: string[]) => {
    return members.map((member: string, index: number) => {
      return (
        <option key={index} value={member}>
          {member}
        </option>
      );
    });
  };
  const progressOptions = (progress: string[]) => {
    return progress.map((state: string, index: number) => {
      return (
        <option key={index} value={state}>
          {state}
        </option>
      );
    });
  };

  return (
    <>
      <div className="form-add">
        <div className="form-add-top">
          <h1 className="form-add-h1">To Do</h1>
          <button
            className="close-button"
            onClick={() => {
              props.closeForm();
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
          <label className="formAdd-label-group"> Title </label>
          <input
            className="addList-input"
            type="text"
            {...register("title", { required: true })}
            maxLength={15}
          />
        </div>

        <div className="addList-form-group">
          <label className="formAdd-label-group"> Progress </label>
          <select
            id="progress"
            className="custom-select"
            {...register("progress", { required: true })}
          >
            {progressOptions(progress)}
          </select>
        </div>

        <div className="addList-form-group">
          <label className="formAdd-label-group"> Member </label>
          <select
            id="member"
            className="custom-select"
            {...register("member", { required: true })}
          >
            {memberOptions(members)}
          </select>
        </div>

        <div className="addList-form-group">
          <label className="formAdd-label-group"> Description </label>
          <input
            className="addList-input"
            type="text"
            {...register("description")}
            maxLength={20}
          />
        </div>

        <div className="addList-form-group">
          <button
            className="add-button"
            onClick={() => handleSubmit(onSubmit)()}
          >
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.79581 11.5492L1.62581 7.37918L0.205811 8.78918L5.79581 14.3792L17.7958 2.37918L16.3858 0.969177L5.79581 11.5492Z"
                fill="white"
              />
            </svg>
            <strong> Save </strong>
          </button>
          <ResponseMessage
            messageError={error?.response?.statusText}
            messageOk={response?.data.message}
          />
        </div>
        <br />
      </div>
    </>
  );
};

export default FormAddToDo;
