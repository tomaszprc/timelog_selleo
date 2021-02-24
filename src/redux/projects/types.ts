export const ADD_PROJECT = "PROJECTS/ADD_PROJECT";

export interface Project {
  id: number;
  title: string;
  description: string;
  timeTrackerIds: number[];
}

export interface ProjectsList {
  projectsList: Project[];
}

export interface ProjectStateType {
  projects: ProjectsList;
}

export interface AddProjectAction {
  type: typeof ADD_PROJECT;
  payload: Project;
}

export type ProjectActionTypes = AddProjectAction;
