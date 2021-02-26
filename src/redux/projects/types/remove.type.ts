export const REMOVE_PROJECT = "PROJECTS/REMOVE_PROJECT";

export interface RemoveProjectPayload {
  id: number;
}

export interface RemoveProjectAction {
  type: typeof REMOVE_PROJECT;
  payload: RemoveProjectPayload;
}
