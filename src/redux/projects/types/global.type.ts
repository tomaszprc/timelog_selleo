import {
  AddProjectAction,
  RemoveProjectAction,
  EditProjectAction,
} from "./index";

export interface Project {
  id: number;
  title: string;
  description: string;
  timeTrackerIds: number[];
}

export interface ProjectsList {
  projectsList: Project[];
}

export type ProjectActionTypes =
  | AddProjectAction
  | RemoveProjectAction
  | EditProjectAction;
