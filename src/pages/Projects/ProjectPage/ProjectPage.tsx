import { useParams } from "react-router-dom";
import { ProjectPageTypeProps, ProjectPageTypeParams } from "../../../types";

const ProjectPage = ({}: ProjectPageTypeProps) => {
  let { id } = useParams<ProjectPageTypeParams>();

  return <div>{id}</div>;
};

export default ProjectPage;
