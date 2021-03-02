import Tracker from "../../pages/Tracker/Tracker";

export const ADD_TRACKER = "TRACKERS/ADD_TRACKER";

export interface Tracker {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  projectID?: number;
}

export interface TrackersList {
  trackerList: Tracker[];
}

export type AddTrackerPayload = Pick<
  Tracker,
  "title" | "startTime" | "endTime"
>;

export interface AddTrackerAction {
  type: typeof ADD_TRACKER;
  payload: AddTrackerPayload;
}

export type TrackerActionTypes = AddTrackerAction;
