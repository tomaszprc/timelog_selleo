import { FaPen, FaRegTrashAlt, FaCheck } from "react-icons/fa";
import React from "react";
import { format } from "date-fns";
import { TrackerElementProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjectSelector,
  getProjectListSelector,
  editTrackerFromProject,
} from "../../redux/projects";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { editTracker, removeTracker } from "../../redux/trackers";

const TrackerElement = ({
  title,
  startTime,
  endTime,
  id,
  projectID,
}: TrackerElementProps) => {
  const [dataState, setDataState] = React.useState({
    startTime,
    endTime,
    title,
    projectID: projectID ? projectID : "",
  });
  const [editMode, setEditMode] = React.useState(false);
  const project = useSelector(getProjectSelector(projectID ? projectID : ""));
  const projectList = useSelector(getProjectListSelector);

  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(
      removeTracker({
        id,
      })
    );
  };

  const handleEditMode = (id: number) => {
    setEditMode(!editMode);

    if (editMode) {
      dispatch(
        editTracker({
          title: dataState.title,
          startTime: dataState.startTime,
          startConvertDate: new Date(dataState.startTime)
            .toISOString()
            .slice(0, 10),
          endTime: dataState.endTime,
          projectID: dataState.projectID,
          id,
        })
      );

      dispatch(
        editTrackerFromProject({
          currentProjectID: parseInt(dataState.projectID),
          trackerID: id,
        })
      );
    }
  };

  return (
    <div className="tracker-element">
      {editMode ? (
        <>
          <input
            type="text"
            defaultValue={title ? title : "No description"}
            name="title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDataState({
                ...dataState,
                title: e.currentTarget.value,
              })
            }
          />

          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setDataState({
                ...dataState,
                projectID: e.currentTarget.value,
              });
            }}
            defaultValue={projectID}
            className="counter__selectbox"
            name="project"
          >
            {projectList.map((projectsList) => {
              return (
                <option key={projectsList.id} value={projectsList.id}>
                  {projectsList.title}
                </option>
              );
            })}
          </select>

          <div>
            <DatePicker
              selected={dataState.startTime}
              onChange={(date: any) =>
                setDataState({
                  ...dataState,
                  startTime: date,
                })
              }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MM/dd/yyyy k:mm:ss"
            />
            -
            <DatePicker
              selected={dataState.endTime}
              onChange={(date: any) =>
                setDataState({
                  ...dataState,
                  endTime: date,
                })
              }
              showTimeSelect
              timeFormat="HH:mm"
              minDate={dataState.startTime}
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MM/dd/yyyy k:mm:ss"
            />
          </div>
          <FaCheck
            onClick={() => handleEditMode(id)}
            className="tracker-element__icon"
          />
        </>
      ) : (
        <>
          <div>{title ? title : "No description"}</div>
          <div>{project?.title ? project?.title : "No project"}</div>

          <div>
            {format(startTime, "MM/dd/yyyy k:mm:ss")} -{" "}
            {format(endTime, "MM/dd/yyyy k:mm:ss")}
          </div>

          <FaPen
            onClick={() => handleEditMode(id)}
            className="tracker-element__icon"
          />
        </>
      )}
      <FaRegTrashAlt
        className="tracker-element__icon"
        onClick={() =>
          window.confirm("Are you sure you wish to delete this item?") &&
          handleRemove(id)
        }
      />
    </div>
  );
};

export default TrackerElement;
