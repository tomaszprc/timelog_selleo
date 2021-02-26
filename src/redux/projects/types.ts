export const ADD_PROJECT = "PROJECTS/ADD_PROJECT";
export const REMOVE_PROJECT = "PROJECTS/REMOVE_PROJECT";

export interface Project {
  id: number;
  title: string;
  description: string;
  timeTrackerIds: number[];
}

export interface AddProjectData {
  title: string;
  description: string;
}

export interface RemoveProjectData {
  id: number;
}

export type AddProjectPayload = Omit<Project, "id" | "timeTrackerIds">;

export interface ProjectsList {
  projectsList: Project[];
  taskCount: number;
}

export interface ProjectModalState {
  projects: ProjectsList;
  openModal: boolean;
}

export interface ProjectStateType {
  projects: ProjectsList;
  taskCount: number;
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
