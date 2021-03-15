import { useParams } from "react-router-dom";
import { getProjectSelector } from "../../../redux/projects";
import { ProjectPageTypeParams } from "../../../types";
import { useSelector } from "react-redux";
import Title from "../../../components/Title/Title";
import ProjectPageElement from "../../../components/ProjectPageElement/ProjectPageElement";
import { getTrackerSelectorList } from "../../../redux/trackers";

const ProjectPage = () => {
  let { id } = useParams<ProjectPageTypeParams>();
  const currentProject = useSelector(getProjectSelector(id));
  const currentProjectTrackers = useSelector(
    getTrackerSelectorList(currentProject?.timeTrackerIds)
  );

  return (
    <div className="project-page">
      <Title title={`Project: ${currentProject?.title || "Missed Title"}`} />
      <div className="project-page__description">
        {currentProject?.description}
      </div>

      {currentProjectTrackers.map((tracker) => {
        return (
          <ProjectPageElement
            key={tracker.id}
            title={tracker.title}
            hours="godziny"
          />
        );
      })}
    </div>
  );
};

export default ProjectPage;
