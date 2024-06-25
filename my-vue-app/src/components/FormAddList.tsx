import { useForm } from "react-hook-form";
import "../Css/formAddList.css";


interface FormAddData {
    title : string ,  
    member : string ,
    description : string 
}

const FormLogin =  () => {
    const members : string[] = ["Lucas", "Joao Neto","Marcio"]
    const {
        register,
        handleSubmit,
      } = useForm<FormAddData>();
    
    const onSubmit = (data: FormAddData) => {
        console.log(data);
    };

    const memberOptions = (members : string[] ) => {
        return members.map((member : string, index : number) => {
            return <option key={index} value={index}>{member}</option>;
        });
    };


    return (
        <>
        <body className="form-add-list" > 
        <div className="form-add">
            <div className="form-add-top"> 
                <h1 className="form-add-h1">List</h1>

                <svg  className="close-svg" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.7959 13.1992L35.9759 10.3792L24.7959 21.5592L13.6159 10.3792L10.7959 13.1992L21.9759 24.3792L10.7959 35.5592L13.6159 38.3792L24.7959 27.1992L35.9759 38.3792L38.7959 35.5592L27.6159 24.3792L38.7959 13.1992Z" fill="#E2E4E6"/>
                </svg>
            </div>

            <div className="form-group addList">
                <label className="label-group"> Title </label>
                <input type="text"  {...register("title", { required: true})} />  
            </div>
            <div className="form-group">
                <label className="label-group addList"> Member </label>
                <select id="member" name="options"> 
                   {memberOptions(members)}
                    <input type=""  {...register("member")}/>
                </select>
            </div>
            <div className="form-group addList">
                <label className="label-group"> Description </label>
                <input type=""  {...register("description")}/>
            </div>
            <div className="form-group">
                <button className="add-button"onClick={() => handleSubmit(onSubmit)()}> <strong > Save </strong> </button>
            </div>
            <br></br>
             
        </div>
    </body>
        </>
    )
}

export default FormLogin