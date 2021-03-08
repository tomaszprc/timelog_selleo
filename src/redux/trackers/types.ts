export const ADD_TRACKER = "TRACKERS/ADD_TRACKER";
export const EDIT_TRACKER = "TRACKERS/EDIT_TRACKER";
export const REMOVE_TRACKER = "TRACKERS/REMOVE_TRACKER";

export interface Tracker {
  id: number;
  title: string;
  startTime: Date;
  startConvertDate: string;
  endTime: Date;
  projectID: string;
}

export interface TrackersList {
  trackerList: Tracker[];
}

export type AddTrackerPayload = Pick<
  Tracker,
  "title" | "startTime" | "endTime" | "projectID" | "startConvertDate"
>;

export type EditTrackerPayload = Tracker;

export interface RemoveTrackerPayLoad {
  id: number;
}

export interface EditTrackerAction {
  type: typeof EDIT_TRACKER;
  payload: EditTrackerPayload;
}

export interface AddTrackerAction {
  type: typeof ADD_TRACKER;
  payload: AddTrackerPayload;
}

export interface RemoveTrackerAction {
  type: typeof REMOVE_TRACKER;
  payload: RemoveTrackerPayLoad;
}

export type TrackerActionTypes =
  | AddTrackerAction
  | EditTrackerAction
  | RemoveTrackerAction;
