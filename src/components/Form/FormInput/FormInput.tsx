interface FormInput {}

const FormInput = ({}: FormInput) => {
  return (
    <label>
      <input type="text" name="text" value="text" />
    </label>
  );
};

export default FormInput;
