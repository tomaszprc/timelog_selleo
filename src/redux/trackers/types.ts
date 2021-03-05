export const ADD_TRACKER = "TRACKERS/ADD_TRACKER";
export const EDIT_TRACKER = "TRACKERS/EDIT_TRACKER";

export interface Tracker {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  projectID: string;
}

export interface TrackersList {
  trackerList: Tracker[];
}

export type AddTrackerPayload = Pick<
  Tracker,
  "title" | "startTime" | "endTime" | "projectID"
>;

export type EditTrackerPayload = Tracker;

export interface EditTrackerAction {
  type: typeof EDIT_TRACKER;
  payload: EditTrackerPayload;
}

export interface AddTrackerAction {
  type: typeof ADD_TRACKER;
  payload: AddTrackerPayload;
}

export type TrackerActionTypes = AddTrackerAction | EditTrackerAction;
