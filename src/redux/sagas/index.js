import { fork } from "redux-saga/effects";
import register from "./register";
import login from "./login";
import members from "./members";

export default function* () {
  yield fork(register);
  yield fork(login);
  yield fork(members);
}
