import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import register from "../middleware/register";

function* registerUser(action) {
  try {
    const payload = yield call(register, action.payload);
    yield put({ type: types.USER_REGISTER_SUCCESS, payload });
  } catch (err) {
    yield put({ type: types.USER_REGISTER_FAILURE, payload: err });
  }
}

export default function* watchRegisterUser() {
  yield takeLatest(types.USER_REGISTER, registerUser);
}
