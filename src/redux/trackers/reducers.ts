import { TrackersList, TrackerActionTypes } from "./index";
import { ADD_TRACKER } from "./types";

const initialState: TrackersList = {
  trackerList: [
    {
      id: 1,
      title: "Tytuł taska",
      startTime:
        "Mon Mar 01 2021 16:54:49 GMT+0100 (Central European Standard Time)",
      endTime:
        "Mon Mar 01 2021 17:54:49 GMT+0100 (Central European Standard Time)",
      projectID: 2,
    },
    {
      id: 2,
      title: "Tytuł taska 2",
      startTime:
        "Mon Mar 01 2021 18:54:49 GMT+0100 (Central European Standard Time)",
      endTime:
        "Mon Mar 01 2021 19:54:49 GMT+0100 (Central European Standard Time)",
      projectID: 3,
    },
  ],
};

export function trackersReducer(
  state = initialState,
  action: TrackerActionTypes
): TrackersList {
  switch (action.type) {
    case ADD_TRACKER:
      return state;

    default:
      return state;
  }
}
