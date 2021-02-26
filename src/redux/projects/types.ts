export const ADD_PROJECT = "PROJECTS/ADD_PROJECT";
export const REMOVE_PROJECT = "PROJECTS/REMOVE_PROJECT";

export interface Project {
  id: number;
  title: string;
  description: string;
  timeTrackerIds: number[];
}

export type AddProjectPayload = Pick<Project, "title" | "description">;

export interface ProjectsList {
  projectsList: Project[];
}

export interface ProjectModalState {
  projects: ProjectsList;
}

export interface ProjectStateType {
  projects: ProjectsList;
}

export interface AddProjectAction {
  type: typeof ADD_PROJECT;
  payload: AddProjectPayload;
}

export type ProjectActionTypes = AddProjectAction;
