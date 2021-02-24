import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { projectReducer } from "./projects/reducers";

const rootReducer = combineReducers({
  projects: projectReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
