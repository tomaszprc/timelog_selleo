import { useParams } from "react-router-dom";
import { getProjectSelector } from "../../../redux/projects";
import { ProjectPageTypeParams } from "../../../types";
import { useSelector } from "react-redux";
import Title from "../../../components/Title/Title";
import ProjectPageElement from "../../../components/ProjectPageElement/ProjectPageElement";

const ProjectPage = () => {
  let { id } = useParams<ProjectPageTypeParams>();
  const currentProject = useSelector(getProjectSelector(id));

  return (
    <div className="project-page">
      <Title title={`Project: ${currentProject?.title || "Missed Title"}`} />
      <div className="project-page__description">
        {currentProject?.description}
      </div>
      <ProjectPageElement title="Tytuł taska" hours="godziny" />
      <ProjectPageElement title="Tytuł taska" hours="godziny" />
      <ProjectPageElement title="Tytuł taska" hours="godziny" />
    </div>
  );
};

export default ProjectPage;
