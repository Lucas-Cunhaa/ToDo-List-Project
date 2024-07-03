import { useForm } from "react-hook-form";
import "../Css/formAddList.css";

interface FormAddData {
  title: string;
  member: string;
  progress : string;
  description: string;
}

interface FormAddToDoProps {
  closeForm : () => void
}
const FormAddToDo= ( props : FormAddToDoProps) => {

  const members: string[] = [
    "Lucas",
    "Joao Neto",
    "Marcio",
    "Miguel",
    "Pedro",
    "Joao Victor",
  ];
  const progress : string[] = [
    "To Do",
    "Doing",
    "Done"
  ]

  const { register, handleSubmit } = useForm<FormAddData>();

  const onSubmit = (data: FormAddData) => {
    console.log(data);
  };

  const memberOptions = (members: string[]) => {
    return members.map((member: string, index: number) => {
      return (
        <option key={index} value={index}>
          {member}
        </option>
      );
    });
  };
  const progressOptions = (progress: string[]) => {
    return progress.map((state: string, index: number) => {
      return (
        <option key={index} value={index}>
          {state}
        </option>
      )
    }
  )
  }
  return (
    <>
      <div className="form-add">
        <div className="form-add-top">
          <h1 className="form-add-h1">To Do</h1>
          <button
            className="close-button"
            onClick={()=> {props.closeForm()}}
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
          />
        </div>
        <div className="addList-form-group">
          <label className="formAdd-label-group"> Progress </label>
          <select id="progress" className="custom-select" name="options">
            {progressOptions(progress)}
            <input className="addList-input" type="" {...register("progress")} />
          </select>
        </div>
        <div className="addList-form-group">
          <label className="formAdd-label-group"> Member </label>
          <select id="member" className="custom-select" name="options">
             {memberOptions(members)}
            <input className="addList-input" type="" {...register("member")} />
          </select>
        </div>
        <div className="addList-form-group">
          <label className="formAdd-label-group"> Description </label>
          <input
            className="addList-input"
            type="text"
            {...register("description")}
          />
        </div>
        <div className="addList-form-group">
          <button
            className="add-button"
            onClick={() => handleSubmit(onSubmit)()}
          >
            {" "}
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
            <strong> Save </strong>{" "}
          </button>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default FormAddToDo;
