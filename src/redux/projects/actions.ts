import {
  AddProjectPayload,
  ADD_PROJECT,
  ProjectActionTypes,
  RemoveProjectPayload,
  REMOVE_PROJECT,
  EDIT_PROJECT,
  EditProjectPayload,
  AddTrackerToProjectPayload,
  ADD_TRACKER_TO_PROJECT,
  EditTrackerFromProjectPayload,
  EDIT_TRACKER_FROM_PROJECT,
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

export function addTrackerToProject(
  addTrackerToProject: AddTrackerToProjectPayload
) {
  return {
    type: ADD_TRACKER_TO_PROJECT,
    payload: addTrackerToProject,
  };
}

export function editTrackerFromProject(
  editTrackerFromProject: EditTrackerFromProjectPayload
) {
  return {
    type: EDIT_TRACKER_FROM_PROJECT,
    payload: editTrackerFromProject,
  };
}
