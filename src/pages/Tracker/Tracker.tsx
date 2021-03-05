import { useSelector } from "react-redux";
import Counter from "../../components/Counter/Counter";
import Title from "../../components/Title/Title";
import TrackerElement from "../../components/TrackerElement/TrackerElement";
import { getTrackerListSelector, Tracker } from "../../redux/trackers";

const Trackers = () => {
  const trackersList = useSelector(getTrackerListSelector);

  return (
    <div className="tracker">
      <Title title="Tracker" />
      <Counter />

      <div className="tracker__list">
        {/* TODO: fix this type any */}
        {trackersList.map((tracker: Tracker) => {
          return (
            <TrackerElement
              key={tracker.id}
              id={tracker.id}
              title={tracker.title}
              startTime={tracker.startTime}
              endTime={tracker.endTime}
              projectID={tracker.projectID ? tracker.projectID : ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trackers;
