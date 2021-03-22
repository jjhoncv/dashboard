import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "../features/auth/reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
