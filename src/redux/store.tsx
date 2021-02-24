import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { projectReducer } from "./projects";

const rootReducer = combineReducers({
  projects: projectReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof rootReducer>;
