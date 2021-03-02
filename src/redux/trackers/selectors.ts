import { RootState } from "../store";

export const getTrackerListSelector = (state: RootState) =>
  state.trackers.trackerList;
