import { useSelector } from "react-redux";
import Counter from "../../components/Counter/Counter";
import Title from "../../components/Title/Title";
import TrackerElement from "../../components/TrackerElement/TrackerElement";
import { getTrackerListSelector } from "../../redux/trackers";
import _ from "lodash";

const Trackers = () => {
  const trackersList = useSelector(getTrackerListSelector);

  const groupTrackers = _.groupBy(trackersList, "startConvertDate");

  const sortedByDate = Object.keys(groupTrackers)
    .sort((dateA: string, dateB: string) => {
      let dateObjectA: number = +new Date(dateA);
      let dateObjectB: number = +new Date(dateB);
      return dateObjectB - dateObjectA;
    })
    .reduce((obj: any | object, key: string) => {
      obj[key] = groupTrackers[key];
      return obj;
    }, {});

  return (
    <div className="tracker">
      <Title title="Tracker" />
      <Counter />

      <div className="tracker__list">
        {Object.entries(sortedByDate).map(([key, value]: any) => (
          <div id={key} key={key}>
            <b>Date: {key}</b>

            {value.map((tracker: any): any => (
              <TrackerElement
                key={tracker.id}
                id={tracker.id}
                title={tracker.title}
                startTime={tracker.startTime}
                endTime={tracker.endTime}
                projectID={tracker.projectID ? tracker.projectID : ""}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trackers;
