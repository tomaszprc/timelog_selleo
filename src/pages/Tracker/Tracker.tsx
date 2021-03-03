import { useSelector } from "react-redux";
import Counter from "../../components/Counter/Counter";
import Title from "../../components/Title/Title";
import TrackerElement from "../../components/TrackerElement/TrackerElement";
import { getTrackerListSelector } from "../../redux/trackers";

const Tracker = () => {
  const trackersList = useSelector(getTrackerListSelector);

  return (
    <div className="tracker">
      <Title title="Tracker" />
      <Counter />

      <div className="tracker__list">
        {/* TODO: fix this type any */}
        {trackersList.map((tracker: any) => {
          return (
            <TrackerElement
              key={tracker.id}
              title={tracker.title}
              startTime={tracker.startTime}
              endTime={tracker.endTime}
              projectID={tracker.projectID}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tracker;
