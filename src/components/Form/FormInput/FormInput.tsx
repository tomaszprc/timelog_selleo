import { FormInputTypeProps } from "../../../types";

const FormInput = ({ name, type, register, title }: FormInputTypeProps) => {
  return (
    <>
      <label className="form-field">{title}</label>
      <input
        className="form-field__input"
        type={type ? type : "text"}
        ref={register}
        name={name}
      />
    </>
  );
};

export default FormInput;
