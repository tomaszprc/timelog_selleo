interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <div className="title">{title}</div>;
};

export default Title;
