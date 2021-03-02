import { useSelector } from "react-redux";
import Counter from "../../components/Counter/Counter";
import Title from "../../components/Title/Title";
import TrackerElement from "../../components/TrackerElement/TrackerElement";
import { getTrackerListSelector } from "../../redux/trackers";

const Tracker = () => {
  const trackersList = useSelector(getTrackerListSelector);

  console.log(trackersList);

  return (
    <div className="tracker">
      <Title title="Tracker" />
      <Counter />

      <div className="tracker__list">
        {trackersList.map((tracker) => {})}

        <TrackerElement />
        <TrackerElement />
        <TrackerElement />
      </div>
    </div>
  );
};

export default Tracker;
