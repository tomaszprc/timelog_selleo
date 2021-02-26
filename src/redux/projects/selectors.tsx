import { RootState } from "../store";

export const getProjectListSelector = (state: RootState) =>
  state.projects.projectsList;

export const getProjectSelector = (id: string) => (state: RootState) => {
  return state.projects.projectsList.find((project) => {
    if (project.id === parseInt(id)) {
      return project;
    }
  });
};
