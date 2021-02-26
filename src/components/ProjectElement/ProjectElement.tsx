import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Project, removeProject } from "../../redux/projects";
import { useDispatch } from "react-redux";

const ProjectElement = ({
  id,
  title,
  description,
  timeTrackerIds,
}: Project) => {
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(
      removeProject({
        id,
      })
    );
  };

  return (
    <div className="project-element">
      <div className="project-element__title">{title}</div>
      <div>{description}</div>
      <Link className="button" to={`/projects/${id}`}>
        Open
      </Link>
      <Button text="Edit" modificator="primary" />
      <Button
        text="Remove"
        modificator="danger"
        onClick={() => handleRemove(id)}
      />
    </div>
  );
};

export default ProjectElement;
