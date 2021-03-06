import React, { useState } from "react";
import ProjectElement from "../../components/ProjectElement/ProjectElement";
import Title from "../../components/Title/Title";
import { getProjectListSelector, Project } from "../../redux/projects";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import Form from "../../components/Form/Form";

const Projects = () => {
  const projectsList = useSelector(getProjectListSelector);
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      {modalStatus && (
        <Modal>
          <Form handleCloseForm={() => setModalStatus(false)} />
        </Modal>
      )}

      <Title title="Projects" />
      <div className="projects__add">
        <Button
          onClick={() => setModalStatus(true)}
          text="Add project"
          modificator="secondary"
          large
        />
      </div>
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
    </>
  );
};

export default Projects;
