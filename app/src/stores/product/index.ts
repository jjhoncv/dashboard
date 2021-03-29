import { combineReducers } from "redux";
import { createReducer } from "./create/reducer";
import { readReducer } from "./read/reducer";
import { deleteReducer } from "./delete/reducer";

export * from "./create/actions";
export * from "./read/actions";
export * from "./delete/actions";

export const productReducer = combineReducers({
  create: createReducer,
  read: readReducer,
  delete: deleteReducer
});

