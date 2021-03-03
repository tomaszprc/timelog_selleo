import { AddTrackerPayload, ADD_TRACKER, TrackerActionTypes } from "./types";

export function addTracker(newTracker: AddTrackerPayload): TrackerActionTypes {
  return {
    type: ADD_TRACKER,
    payload: newTracker,
  };
}
