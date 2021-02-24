interface ButtonProps {
  text: string;
  modificator?: string;
  large?: boolean;
}

const Button = ({ text, modificator, large }: ButtonProps) => {
  return (
    <div
      className={`button ${modificator ? modificator : ""} ${
        large ? "large" : ""
      }`}
    >
      {text}
    </div>
  );
};

export default Button;
