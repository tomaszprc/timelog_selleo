import { TrackersList, TrackerActionTypes } from "./index";
import { ADD_TRACKER } from "./types";

const initialState: TrackersList = {
  trackerList: [],
};

export function trackersReducer(
  state = initialState,
  action: TrackerActionTypes
): TrackersList {
  switch (action.type) {
    case ADD_TRACKER:
      const { trackerList } = state;
      const id = trackerList[trackerList.length - 1]?.id + 1 || 0;
      const newTracker = {
        ...action.payload,
        id,
      };

      return {
        ...state,
        trackerList: [...state.trackerList, newTracker],
      };

    default:
      return state;
  }
}
