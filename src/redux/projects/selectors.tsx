import { ProjectStateType } from "./types";

export const projectListSelector = (state: ProjectStateType) =>
  state.projects.projectsList;
