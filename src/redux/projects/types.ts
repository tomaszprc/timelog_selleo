export interface Project {
  id: number;
  title: string;
  description: string;
  timeTrackerIds: number[];
}

export interface ProjectStateType {
  projectsList: Project[];
}

export const ADD_PROJECT = "ADD_PROJECT";

export interface AddProjectAction {
  type: typeof ADD_PROJECT;
  payload: Project;
}

export type ProjectActionTypes = AddProjectAction;
