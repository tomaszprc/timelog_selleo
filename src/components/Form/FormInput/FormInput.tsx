interface FormInputProps {
  name?: string;
  register?: any;
  type?: string;
  value?: string;
  title?: string;
}

const FormInput = ({ name, type, register, title }: FormInputProps) => {
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
