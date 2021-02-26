import Title from "../Title/Title";
import FormInput from "./FormInput/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject, Project } from "../../redux/projects";
import { FormTypeProps } from "../../types";

const Form = ({ handleCloseForm }: FormTypeProps) => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: Project) => {
    console.log(data);
    dispatch(
      addProject({
        title: data.title,
        description: data.description,
        timeTrackerIds: [],
        id: 0,
      })
    );

    handleCloseForm();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Title title="Form" />
      <div className="form__inputs">
        <FormInput name="title" title="Title" register={register} />

        <FormInput name="description" title="Description" register={register} />

        <FormInput type="submit" value="Add project" />
      </div>
    </form>
  );
};

export default Form;
