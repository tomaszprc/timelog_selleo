import { TrackersList, TrackerActionTypes } from "./index";
import { ADD_TRACKER, REMOVE_TRACKER, EDIT_TRACKER } from "./types";

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

    case EDIT_TRACKER:
      let newTrackersList = state.trackerList.map((tracker) => {
        if (tracker.id === action.payload.id) {
          return {
            ...tracker,
            ...action.payload,
          };
        }

        return tracker;
      });

      return {
        ...state,
        trackerList: newTrackersList,
      };

    case REMOVE_TRACKER:
      return {
        ...state,
        trackerList: state.trackerList.filter(
          (tracker) => tracker.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
