import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import moviesReducer from "./moviesReducer";
import contact from "./contactReducer";

export default combineReducers({
  movieslist: moviesReducer,
  contact,
  auth: authReducer,
  errors: errorReducer
});
