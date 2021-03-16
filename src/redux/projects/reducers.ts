import {
  ADD_PROJECT,
  ProjectActionTypes,
  ProjectsList,
  REMOVE_PROJECT,
  EDIT_PROJECT,
  ADD_TRACKER_TO_PROJECT,
  EDIT_TRACKER_FROM_PROJECT,
} from "./types";

const initialState: ProjectsList = {
  projectsList: [
    {
      id: 1,
      title: "Tytuł pierwszego projektu",
      description: "Opis projektu 1",
      timeTrackerIds: [],
    },
    {
      id: 2,
      title: "Tytuł drugiego projektu",
      description: "Opis projektu 2",
      timeTrackerIds: [],
    },
    {
      id: 3,
      title: "Tytuł trzeciego projektu",
      description: "Opis projektu 3",
      timeTrackerIds: [],
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
      let projectList = state.projectsList.map((project) => {
        if (project.id === action.payload.id) {
          return {
            ...project,
            ...action.payload,
          };
        }

        return project;
      });

      return { ...state, projectsList: projectList };

    case ADD_TRACKER_TO_PROJECT:
      let projectTrackerList = state.projectsList.map((project) => {
        if (action.payload.projectID === project.id) {
          project.timeTrackerIds.push(action.payload.trackerID);

          return {
            ...project,
          };
        }
        return project;
      });

      return {
        ...state,
        projectsList: projectTrackerList,
      };

    case EDIT_TRACKER_FROM_PROJECT:
      const currentProjectID = action.payload.currentProjectID;
      const trackerID = action.payload.trackerID;

      const currentProject = state.projectsList.filter((project) => {
        return project.id === currentProjectID;
      });

      if (currentProject[0].timeTrackerIds.includes(trackerID)) {
        return state;
      }

      const updateProjectList = state.projectsList.map((project) => {
        if (
          project.id !== currentProjectID &&
          project.timeTrackerIds.includes(trackerID)
        ) {
          let indexNumber = project.timeTrackerIds.indexOf(trackerID);
          project.timeTrackerIds.splice(indexNumber, 1);
        } else if (project.id === currentProjectID) {
          project.timeTrackerIds.push(trackerID);
        }

        return project;
      });

      return {
        ...state,
        projectsList: updateProjectList,
      };

    default:
      return state;
  }
}
