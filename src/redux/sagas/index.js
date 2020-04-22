import { fork } from "redux-saga/effects";
import register from "./register";

export default function* () {
  yield fork(register);
}
