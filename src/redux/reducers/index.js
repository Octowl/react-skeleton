import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import intentReducer from "./intentReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  intents: intentReducer
});
