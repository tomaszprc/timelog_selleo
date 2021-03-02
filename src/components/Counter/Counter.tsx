import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTrackerListSelector } from "../../redux/trackers";

const Counter = () => {
  const [time, setTime] = React.useState(0);
  const [timeData, setTimerData] = React.useState<{
    timerOn: boolean;
    title: string;
    startTime: null | Date;
    endTime: null | Date;
    projectID: null | string;
  }>({
    timerOn: false,
    title: "",
    startTime: null,
    endTime: null,
    projectID: null,
  });

  const trackersList = useSelector(getTrackerListSelector);

  //TODO: Seperate interval function
  React.useEffect(() => {
    let interval: any;

    if (timeData.timerOn) {
      setTimerData({
        ...timeData,
        startTime: new Date(),
      });

      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timeData.timerOn) {
      setTimerData({
        ...timeData,
        endTime: new Date(),
      });

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

      <select
        onChange={handleSelect}
        className="counter__selectbox"
        name="cars"
        id="cars"
      >
        <option value="null">No project</option>
        {trackersList.map((tracker) => {
          return (
            <option key={tracker.id} value={tracker.id}>
              {tracker.title}
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
