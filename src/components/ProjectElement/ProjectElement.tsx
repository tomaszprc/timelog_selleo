import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Project, removeProject, editProject } from "../../redux/projects";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const ProjectElement = ({
  id,
  title,
  description,
  timeTrackerIds,
}: Project) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title,
    description,
    id,
    timeTrackerIds,
  });

  const handleRemove = (id: number) => {
    dispatch(
      removeProject({
        title: title,
        description: description,
        timeTrackerIds: timeTrackerIds,
        id: id,
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
          timeTrackerIds: formData.timeTrackerIds,
        })
      );
      setEdit(editMode);
    }
  };

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string,
    id: number,
    timeTrackerIds: number[]
  ) => {
    if (type == "title") {
      setFormData({
        ...formData,
        ["title"]: event.target.value,
        ["id"]: id,
        ["timeTrackerIds"]: timeTrackerIds,
      });
    } else if (type == "description") {
      setFormData({
        ...formData,
        ["description"]: event.target.value,
        ["id"]: id,
        ["timeTrackerIds"]: timeTrackerIds,
      });
    }
  };

  return (
    <div className="project-element">
      {edit ? (
        <>
          <input
            type="text"
            onChange={(event) =>
              handleChangeInput(event, "title", id, timeTrackerIds)
            }
            defaultValue={title}
          />
          <input
            type="text"
            onChange={(event) =>
              handleChangeInput(event, "description", id, timeTrackerIds)
            }
            defaultValue={description}
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
