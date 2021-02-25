interface ButtonProps {
  text: string;
  modificator?: string;
  large?: boolean;
  onClick?: () => void;
}

const Button = ({ text, modificator, large, onClick }: ButtonProps) => {
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
