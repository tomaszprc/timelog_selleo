import { ADD_PROJECT, Project, ProjectActionTypes } from "./types";

export function addProject(newProject: Project): ProjectActionTypes {
  return {
    type: ADD_PROJECT,
    payload: newProject,
  };
}
