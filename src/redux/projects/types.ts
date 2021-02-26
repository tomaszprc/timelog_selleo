export const ADD_PROJECT = "PROJECTS/ADD_PROJECT";
export const REMOVE_PROJECT = "PROJECTS/REMOVE_PROJECT";
export const EDIT_PROJECT = "PROJECTS/EDIT_PROJECT";

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

export interface EditProjectAction {
  type: typeof EDIT_PROJECT;
  payload: EditProjectPayload;
}

export type ProjectActionTypes =
  | AddProjectAction
  | RemoveProjectAction
  | EditProjectAction;
