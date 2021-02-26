import {
  ADD_PROJECT,
  ProjectActionTypes,
  ProjectsList,
  REMOVE_PROJECT,
  EDIT_PROJECT,
} from "./types";

const initialState: ProjectsList = {
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
): ProjectsList {
  switch (action.type) {
    case ADD_PROJECT:
      const { projectsList } = state;
      const id = projectsList[projectsList.length - 1]?.id + 1 || 0;
      const newProject = {
        ...action.payload,
        id,
        timeTrackerIds: [],
      };
      return { ...state, projectsList: [...state.projectsList, newProject] };

    case REMOVE_PROJECT:
      return {
        ...state,
        projectsList: state.projectsList.filter(
          (project) => project.id !== action.payload.id
        ),
      };

    case EDIT_PROJECT:
      let taskList = state.projectsList.map((project) => {
        if (project.id == action.payload.id) {
          project.title = action.payload.title;
          project.description = action.payload.description;
        }

        return project;
      });

      return { ...state, projectsList: taskList };
    default:
      return state;
  }
}
