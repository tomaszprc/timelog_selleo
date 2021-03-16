export const ADD_PROJECT = "PROJECTS/ADD_PROJECT";
export const REMOVE_PROJECT = "PROJECTS/REMOVE_PROJECT";
export const EDIT_PROJECT = "PROJECTS/EDIT_PROJECT";
export const ADD_TRACKER_TO_PROJECT = "PROJECTS/ADD_TRACKER_TO_PROJECT";
export const EDIT_TRACKER_FROM_PROJECT = "PROJECTS/EDIT_TRACKER_FROM_PROJECT";

export interface Project {
  id: number;
  title: string;
  description: string;
  timeTrackerIds: number[];
}

export interface ProjectsList {
  projectsList: Project[];
}

export type AddProjectPayload = Pick<Project, "title" | "description">;

export interface AddProjectAction {
  type: typeof ADD_PROJECT;
  payload: AddProjectPayload;
}

export interface RemoveProjectPayload {
  id: number;
}

export interface RemoveProjectAction {
  type: typeof REMOVE_PROJECT;
  payload: RemoveProjectPayload;
}

export interface EditProjectPayload {
  id: number;
  title: string;
  description: string;
}

export interface AddTrackerToProjectPayload {
  projectID: number;
  trackerID: number;
}

export interface AddTrackerToProjectAction {
  type: typeof ADD_TRACKER_TO_PROJECT;
  payload: AddTrackerToProjectPayload;
}

export interface EditProjectAction {
  type: typeof EDIT_PROJECT;
  payload: EditProjectPayload;
}

export interface EditTrackerFromProjectPayload {
  currentProjectID: number;
  trackerID: number;
}

export interface EditProjectFromProjectAction {
  type: typeof EDIT_TRACKER_FROM_PROJECT;
  payload: EditTrackerFromProjectPayload;
}

export type ProjectActionTypes =
  | AddProjectAction
  | RemoveProjectAction
  | EditProjectAction
  | AddTrackerToProjectAction
  | EditProjectFromProjectAction;
