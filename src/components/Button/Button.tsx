interface ButtonProps {
  text: string;
  modificator?: string;
  large?: boolean;
  onClick?: () => void;
  taskID?: string;
}

const Button = ({ text, modificator, large, onClick, taskID }: ButtonProps) => {
  return (
    <div
      className={`button ${modificator ? modificator : ""} ${
        large ? "large" : ""
      }`}
      onClick={onClick}
      id={taskID}
    >
      {text}
    </div>
  );
};

export default Button;
