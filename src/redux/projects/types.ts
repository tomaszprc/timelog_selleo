export const ADD_PROJECT = "PROJECTS/ADD_PROJECT";
export const REMOVE_PROJECT = "PROJECTS/REMOVE_PROJECT";

export interface Project {
  id: number;
  title: string;
  description: string;
  timeTrackerIds: number[];
}

export type AddProjectPayload = Pick<Project, "title" | "description">;

export interface RemoveProjectData {
  id: number;
}

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

export interface RemoveProjectAction {
  type: typeof REMOVE_PROJECT;
  payload: RemoveProjectData;
}

export type ProjectActionTypes = AddProjectAction | RemoveProjectAction;
