export const ADD_TRACKER = "TRACKERS/ADD_TRACKER";

export interface Tracker {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  projectID?: null | string;
}

export interface TrackersList {
  trackerList: Tracker[];
}

export type AddTrackerPayload = Pick<
  Tracker,
  "title" | "startTime" | "endTime" | "projectID"
>;

export interface AddTrackerAction {
  type: typeof ADD_TRACKER;
  payload: AddTrackerPayload;
}

export type TrackerActionTypes = AddTrackerAction;
