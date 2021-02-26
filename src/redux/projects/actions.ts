import { AddProjectPayload, ADD_PROJECT, ProjectActionTypes } from "./types";

export function addProject(newProject: AddProjectPayload): ProjectActionTypes {
  // request do bazy => baza zwraca async payload => payload zwracasz w return
  return {
    type: ADD_PROJECT,
    payload: newProject,
  };
}
