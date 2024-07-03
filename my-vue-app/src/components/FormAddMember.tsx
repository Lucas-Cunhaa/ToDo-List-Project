import { useForm } from "react-hook-form";
import "../Css/formAddList.css";

interface FormAddData {
    email: string;
    name:string;
}


const FormAddMember = () => {
 
  const { register, handleSubmit } = useForm<FormAddData>();

  const onSubmit = (data: FormAddData) => {
    console.log(data);
  };

  
  return (
    <>
      <div className="form-add">
        <div className="form-add-top">
          <h1 className="form-add-h1">Invite people</h1>
          <button
            className="close-button"
            onClick={()=> {console.log("JoaoNetoEGay")}}
          ></button>
          <label className="label-button" onClick={() => console.log("JoaoNetoEGaY")}>
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
          <input
            className="addList-input"
            type="text"
            {...register("name")}
          />
        </div>
        <div className="addList-form-group">
          <button
            className="add-button"
            onClick={() => handleSubmit(onSubmit)()}
          >
            {" "}
            <svg className="plus-button-svg" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 10.5H3.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M10.5 3.5V17.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
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
