import Title from "../Title/Title";
import FormInput from "./FormInput/FormInput";

interface FormProps {}

const Form = ({}: FormProps) => {
  return (
    <form className="form">
      <Title title="Form" />
      <div className="form__inputs">
        <FormInput />
        <FormInput />
      </div>
    </form>
  );
};

export default Form;
