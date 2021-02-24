import { useParams } from "react-router-dom";

interface ProjectPageProps {}

interface ProjectParams {
  id: string;
}

const ProjectPage = ({}: ProjectPageProps) => {
  let { id } = useParams<ProjectParams>();

  return <div>{id}</div>;
};

export default ProjectPage;
