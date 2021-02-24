import Container from "../../../components/Container/Container";
import { useParams } from "react-router-dom";

interface ProjectPageProps {}

interface ProjectParams {
  id: string;
}

const ProjectPage = ({}: ProjectPageProps) => {
  let { id } = useParams<ProjectParams>();

  return (
    <Container>
      <div>{id}</div>
    </Container>
  );
};

export default ProjectPage;
