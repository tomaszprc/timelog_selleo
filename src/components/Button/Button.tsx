import { ButtonTypeProps } from "../../types";

const Button = ({ text, modificator, large, onClick }: ButtonTypeProps) => {
  return (
    <div
      className={`button ${modificator ? modificator : ""} ${
        large ? "large" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
