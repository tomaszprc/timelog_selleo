import {
  ADD_PROJECT,
  Project,
  ProjectActionTypes,
  RemoveProjectData,
  REMOVE_PROJECT,
} from "./types";

export function addProject(newProject: Project): ProjectActionTypes {
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
