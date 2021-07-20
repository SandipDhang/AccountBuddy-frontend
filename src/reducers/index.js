import { combineReducers } from "redux";
import AuthReducer from "./authReducer";

const RootReducers = combineReducers({
  auth: AuthReducer,
});

export default RootReducers;
