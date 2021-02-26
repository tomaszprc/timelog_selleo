import {
  ADD_PROJECT,
  Project,
  ProjectActionTypes,
  REMOVE_PROJECT,
  EDIT_PROJECT,
} from "./types";

export function addProject(newProject: Project): ProjectActionTypes {
  // request do bazy => baza zwraca async payload => payload zwracasz w return
  return {
    type: ADD_PROJECT,
    payload: newProject,
  };
}

export function removeProject(removeProject: Project): ProjectActionTypes {
  return {
    type: REMOVE_PROJECT,
    payload: removeProject,
  };
}

export function editProject(editProject: Project): ProjectActionTypes {
  return {
    type: EDIT_PROJECT,
    payload: editProject,
  };
}
