import { FaPen, FaRegTrashAlt, FaCheck } from "react-icons/fa";
import React from "react";
import { format } from "date-fns";
import { TrackerElementProps } from "../../types";

const TrackerElement = ({ title, startTime, endTime }: TrackerElementProps) => {
  let startTimeConvert = format(startTime, "k:mm:ss");
  let finishTimeConvert = format(endTime, "k:mm:ss");
  const [editMode, setEditMode] = React.useState(false);

  return (
    <div className="tracker-element">
      <div>{title}</div>
      <div>Projekt trackera - if exist</div>
      <div>
        Time: {startTimeConvert} - {finishTimeConvert}
      </div>
      {editMode ? (
        <FaCheck
          onClick={() => setEditMode(!editMode)}
          className="tracker-element__icon"
        />
      ) : (
        <FaPen
          onClick={() => setEditMode(!editMode)}
          className="tracker-element__icon"
        />
      )}
      <FaRegTrashAlt className="tracker-element__icon" />
    </div>
  );
};

export default TrackerElement;
