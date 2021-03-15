import React, { useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector } from "react-redux";
import { addTracker, getTrackerListSelector } from "../../redux/trackers";
import { useDispatch } from "react-redux";
import {
  addTrackerToProject,
  getProjectListSelector,
} from "../../redux/projects";
import { CounterTypeProps } from "../../types";

const Counter = () => {
  const [time, setTime] = React.useState(0);
  const isFirstRun = useRef(true);

  const [timeData, setTimerData] = React.useState<CounterTypeProps>({
    timerOn: false,
    title: "",
    startTime: new Date(),
    projectID: "",
  });

  const dispatch = useDispatch();
  const projectsList = useSelector(getProjectListSelector);
  const trackersList = useSelector(getTrackerListSelector);

  //TODO: Seperate interval function
  React.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    let interval: any;

    if (timeData.timerOn) {
      setTimerData({
        ...timeData,
        startTime: new Date(),
      });

      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (timeData.timerOn === false) {
      dispatch(
        addTracker({
          title: timeData.title,
          startTime: timeData.startTime,
          endTime: new Date(),
          projectID: timeData.projectID,
          startConvertDate: new Date().toISOString().slice(0, 10),
        })
      );

      if (timeData.projectID) {
        dispatch(
          addTrackerToProject({
            projectID: parseInt(timeData.projectID),
            trackerID: trackersList.length,
          })
        );
      }

      setTime(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeData.timerOn]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimerData({
      ...timeData,
      projectID: e.currentTarget.value,
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimerData({
      ...timeData,
      title: e.currentTarget.value,
    });
  };

  return (
    <div className="counter">
      <input
        type="text"
        className="counter__input"
        placeholder="(no description)"
        onChange={handleInput}
      />

      <select onChange={handleSelect} className="counter__selectbox">
        <option value="null">No project</option>
        {projectsList.map((projectsList) => {
          return (
            <option key={projectsList.id} value={projectsList.id}>
              {projectsList.title}
            </option>
          );
        })}
      </select>

      <div className="counter__timer">
        <span>
          {("0" + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}:
        </span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        <div>{time}</div>
      </div>

      <div id="buttons">
        {!timeData.timerOn && (
          <button onClick={() => setTimerData({ ...timeData, timerOn: true })}>
            <FaPlay />
          </button>
        )}
        {timeData.timerOn && (
          <button onClick={() => setTimerData({ ...timeData, timerOn: false })}>
            <FaPause />
          </button>
        )}
      </div>
    </div>
  );
};

export default Counter;
