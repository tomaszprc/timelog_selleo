import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Project, removeProject, editProject } from "../../redux/projects";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const ProjectElement = ({ id, title, description }: Project) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title,
    description,
    id,
  });

  const handleRemove = (id: number) => {
    dispatch(
      removeProject({
        id,
      })
    );
  };

  const handleEdit = (editMode: boolean) => {
    if (editMode) {
      setEdit(editMode);
    } else {
      dispatch(
        editProject({
          title: formData.title,
          description: formData.description,
          id: formData.id,
        })
      );
      setEdit(editMode);
    }
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <div className="project-element">
      {edit ? (
        <>
          <input
            type="text"
            onChange={handleChangeInput}
            defaultValue={title}
            name="title"
          />
          <input
            type="text"
            onChange={handleChangeInput}
            defaultValue={description}
            name="description"
          />
        </>
      ) : (
        <>
          <div className="project-element__title">{title}</div>
          <div>{description}</div>
        </>
      )}

      <Link className="button" to={`/projects/${id}`}>
        Open
      </Link>

      {edit ? (
        <Button
          onClick={() => handleEdit(false)}
          text="Submit"
          modificator="primary"
        />
      ) : (
        <Button
          onClick={() => handleEdit(true)}
          text="Edit"
          modificator="primary"
        />
      )}

      <Button
        text="Remove"
        modificator="danger"
        onClick={() => handleRemove(id)}
      />
    </div>
  );
};

export default ProjectElement;
