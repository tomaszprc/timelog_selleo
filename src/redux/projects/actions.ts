import { ADD_PROJECT, Project, ProjectActionTypes } from "./types";

export function addProject(newProject: Project): ProjectActionTypes {
  // request do bazy => baza zwraca async payload => payload zwracasz w return
  return {
    type: ADD_PROJECT,
    payload: newProject,
  };
}
