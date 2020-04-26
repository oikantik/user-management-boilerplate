import { combineReducers } from "redux";
import login from "./login";
import register from "./register";
import members from "./members";

export default combineReducers({ login, register, members });
