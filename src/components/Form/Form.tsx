import Title from "../Title/Title";
import FormInput from "./FormInput/FormInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject, AddProjectPayload } from "../../redux/projects";
import { FormTypeProps } from "../../types";
import Button from "../Button/Button";

const Form = ({ handleCloseForm }: FormTypeProps) => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: AddProjectPayload) => {
    dispatch(
      addProject({
        title: data.title,
        description: data.description,
      })
    );

    handleCloseForm();
  };

  return (
    <form className="form">
      <Title title="Form" />
      <div className="form__inputs">
        <FormInput name="title" title="Title" register={register} />

        <FormInput name="description" title="Description" register={register} />

        <Button text="Submit" onClick={handleSubmit(onSubmit)} />
      </div>
    </form>
  );
};

export default Form;
