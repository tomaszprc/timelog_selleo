import { Project } from "./global.type";

export const ADD_PROJECT = "PROJECTS/ADD_PROJECT";

export type AddProjectPayload = Pick<Project, "title" | "description">;

export interface AddProjectAction {
  type: typeof ADD_PROJECT;
  payload: AddProjectPayload;
}
