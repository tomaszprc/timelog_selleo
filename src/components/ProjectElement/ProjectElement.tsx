import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface ProjectElementProps {
  id: number;
  title: string;
  description: string;
  timeTrackIds: number[];
}

const ProjectElement = ({ id, title, description }: ProjectElementProps) => {
  return (
    <div className="project-element">
      <div className="project-element__title">{title}</div>
      <div>{description}</div>
      <Link className="button" to={`/projects/${id}`}>
        Open
      </Link>
      <Button text="Edit" modificator="edit" />
      <Button text="Remove" modificator="remove" />
    </div>
  );
};

export default ProjectElement;
