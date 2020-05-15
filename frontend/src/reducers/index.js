import { combineReducers } from "redux";

import authReducer from "./authReducer";
import secretReducer from "./secretReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  secret: secretReducer,
  user: userReducer,
});

export default rootReducer;
