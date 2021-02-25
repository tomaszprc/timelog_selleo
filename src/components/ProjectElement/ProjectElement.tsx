import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Project } from "../../redux/projects";

const ProjectElement = ({
  id,
  title,
  description,
  timeTrackerIds,
}: Project) => {
  return (
    <div className="project-element">
      <div className="project-element__title">{title}</div>
      <div>{description}</div>
      <Link className="button" to={`/projects/${id}`}>
        Open
      </Link>
      <Button text="Edit" modificator="primary" />
      <Button text="Remove" modificator="danger" />
    </div>
  );
};

export default ProjectElement;
