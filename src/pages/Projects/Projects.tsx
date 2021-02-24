import React from "react";
import Container from "../../components/Container/Container";
import ProjectElement from "../../components/ProjectElement/ProjectElement";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";

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
      <Modal>
        <Form />
      </Modal>
      <Title title="Projects" />
      <div className="projects__add">
        <Button text="Add project" modificator="add" large />
      </div>
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
