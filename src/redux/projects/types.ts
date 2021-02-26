export const ADD_PROJECT = "PROJECTS/ADD_PROJECT";
export const REMOVE_PROJECT = "PROJECTS/REMOVE_PROJECT";
export const EDIT_PROJECT = "PROJECTS/EDIT_PROJECT";

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
  payload: Project;
}

export interface EditProjectAction {
  type: typeof EDIT_PROJECT;
  payload: Project;
}

export type ProjectActionTypes =
  | AddProjectAction
  | RemoveProjectAction
  | EditProjectAction;
