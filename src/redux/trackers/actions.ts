import {
  AddTrackerPayload,
  ADD_TRACKER,
  EDIT_TRACKER,
  TrackerActionTypes,
  EditTrackerPayload,
} from "./types";

export function addTracker(newTracker: AddTrackerPayload): TrackerActionTypes {
  return {
    type: ADD_TRACKER,
    payload: newTracker,
  };
}

export function editTracker(
  editTracker: EditTrackerPayload
): TrackerActionTypes {
  return {
    type: EDIT_TRACKER,
    payload: editTracker,
  };
}
