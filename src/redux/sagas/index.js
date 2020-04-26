import { fork } from "redux-saga/effects";
import register from "./register";
import login from "./login";
import members from "./members";
import profile from "./profile";

export default function* () {
  yield fork(register);
  yield fork(login);
  yield fork(members);
  yield fork(profile);
}
