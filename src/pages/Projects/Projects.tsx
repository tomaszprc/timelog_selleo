import React, { useState } from "react";
import Container from "../../components/Container/Container";
import ProjectElement from "../../components/ProjectElement/ProjectElement";
import Title from "../../components/Title/Title";

interface ProjectsProps {}

interface ProjectsState {
  id: Number;
  title: String;
  description: String;
  timeTrackIds: Array<Number>;
}

const Projects = ({}: ProjectsProps) => {
  const [projects, setProjects] = useState<Array<ProjectsState>>([
    {
      id: 1,
      title: "Tytul projektu 1",
      description: "Opis projektu 1",
      timeTrackIds: [2, 3],
    },
    {
      id: 2,
      title: "Tytul projektu 2",
      description: "Opis projektu 2",
      timeTrackIds: [4, 2],
    },
  ]);

  return (
    <Container>
      <Title title="Projects" />
      <div className="projects">
        {projects.map((project) => (
          <ProjectElement
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
