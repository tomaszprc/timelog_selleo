import {
  AddProjectPayload,
  ADD_PROJECT,
  ProjectActionTypes,
  RemoveProjectData,
  REMOVE_PROJECT,
} from "./types";

export function addProject(newProject: AddProjectPayload): ProjectActionTypes {
  // request do bazy => baza zwraca async payload => payload zwracasz w return
  return {
    type: ADD_PROJECT,
    payload: newProject,
  };
}

export function removeProject(
  removeProject: RemoveProjectData
): ProjectActionTypes {
  return {
    type: REMOVE_PROJECT,
    payload: removeProject,
  };
}
