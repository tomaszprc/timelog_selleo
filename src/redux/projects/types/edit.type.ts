export const EDIT_PROJECT = "PROJECTS/EDIT_PROJECT";

export interface EditProjectPayload {
  id: number;
  title: string;
  description: string;
}

export interface EditProjectAction {
  type: typeof EDIT_PROJECT;
  payload: EditProjectPayload;
}
