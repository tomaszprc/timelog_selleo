import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { projectReducer } from "./projects";
import { trackersReducer } from "./trackers";

const rootReducer = combineReducers({
  projects: projectReducer,
  trackers: trackersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
