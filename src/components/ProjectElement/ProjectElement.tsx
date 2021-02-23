import { Link } from "react-router-dom";

interface ProjectElementProps {
  id: Number;
  title: String;
  description: String;
  timeTrackIds: Array<Number>;
}

const ProjectElement = ({ id, title, description }: ProjectElementProps) => {
  return (
    <div className="project-element">
      <div className="project-element__title">{title}</div>
      <div>{description}</div>
      <Link className="project-element__button" to={`/projects/${id}`}>
        Open
      </Link>
      <div className="project-element__button project-element__button--edit">
        Edit
      </div>
      <div className="project-element__button project-element__button--remove">
        Remove
      </div>
    </div>
  );
};

export default ProjectElement;
