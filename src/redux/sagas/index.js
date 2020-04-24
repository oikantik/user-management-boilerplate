import { fork } from "redux-saga/effects";
import register from "./register";
import login from "./login";

export default function* () {
  yield fork(register);
  yield fork(login);
}
