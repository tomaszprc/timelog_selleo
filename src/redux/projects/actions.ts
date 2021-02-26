import {
  AddProjectPayload,
  ADD_PROJECT,
  ProjectActionTypes,
  RemoveProjectPayload,
  REMOVE_PROJECT,
  EDIT_PROJECT,
  EditProjectPayload,
} from "./types";

export function addProject(newProject: AddProjectPayload): ProjectActionTypes {
  // request do bazy => baza zwraca async payload => payload zwracasz w return
  return {
    type: ADD_PROJECT,
    payload: newProject,
  };
}

export function removeProject(
  removeProject: RemoveProjectPayload
): ProjectActionTypes {
  return {
    type: REMOVE_PROJECT,
    payload: removeProject,
  };
}

export function editProject(
  editProject: EditProjectPayload
): ProjectActionTypes {
  return {
    type: EDIT_PROJECT,
    payload: editProject,
  };
}
