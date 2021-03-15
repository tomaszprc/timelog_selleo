import { RootState } from "../store";
import { Tracker } from "./types";

export const getTrackerListSelector = (state: RootState) =>
  state.trackers.trackerList;

export const getTrackerSelector = (id: number) => (state: RootState) => {
  return state.trackers.trackerList.find((tracker) => {
    if (tracker.id === id) {
      return tracker;
    }
    return false;
  });
};

export const getTrackerSelectorList = (array: number[] | undefined) => (
  state: RootState
) => {
  return state.trackers.trackerList.filter((tracker: Tracker) => {
    if (array?.includes(tracker.id)) {
      return tracker;
    }
    return false;
  });
};
