import React from "react";
import Container from "../../components/Container/Container";
import ProjectElement from "../../components/ProjectElement/ProjectElement";
import Title from "../../components/Title/Title";
import { projectListSelector, Project } from "../../redux/projects";
import { useSelector } from "react-redux";

interface ProjectsProps {}

const Projects = ({}: ProjectsProps) => {
  const projectsList = useSelector(projectListSelector);

  return (
    <Container>
      <Title title="Projects" />
      <div className="projects">
        {projectsList.map((project: Project) => (
          <ProjectElement
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            timeTrackerIds={project.timeTrackerIds}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
