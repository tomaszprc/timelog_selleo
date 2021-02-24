import React, { useState } from "react";
import Container from "../../components/Container/Container";
import ProjectElement from "../../components/ProjectElement/ProjectElement";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";

interface ProjectsProps {}

interface ProjectsState {
  id: number;
  title: string;
  description: string;
  timeTrackIds: number[];
}

const Projects = ({}: ProjectsProps) => {
  const projectsList = useSelector((state: any) => state.projects.projectsList);

  return (
    <Container>
      <Title title="Projects" />
      <div className="projects">
        {projectsList.map((project: ProjectsState) => (
          <ProjectElement
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            timeTrackIds={project.timeTrackIds}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
