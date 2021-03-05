import { RootState } from "../store";

export const getTrackerListSelector = (state: RootState) =>
  state.trackers.trackerList;

export const getTrackerSelector = (id: string) => (state: RootState) => {
  return state.trackers.trackerList.find((tracker) => {
    if (tracker.id === parseInt(id)) {
      return tracker;
    }
    return;
  });
};
