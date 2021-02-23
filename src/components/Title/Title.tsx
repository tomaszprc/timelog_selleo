interface TitleProps {
  title: String;
}

const Title = ({ title }: TitleProps) => {
  return <div className="title">{title}</div>;
};

export default Title;
