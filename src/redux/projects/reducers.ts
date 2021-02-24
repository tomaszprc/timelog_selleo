import { ADD_PROJECT, ProjectActionTypes, ProjectStateType } from "./types";

const initialState: ProjectStateType = {
  projectsList: [
    {
      id: 1,
      title: "Tytuł pierwszego projektu",
      description: "Opis projektu 1",
      timeTrackerIds: [3, 4],
    },
  ],
};

export function projectReducer(
  state = initialState,
  action: ProjectActionTypes
): ProjectStateType {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        projectsList: [...state.projectsList, action.payload],
      };

    default:
      return state;
  }
}
