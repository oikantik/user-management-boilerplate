import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import register from "../middleware/register";

function* registerUser(action) {
  try {
    const data = yield call(register, action.payload);
    yield put({ type: types.USER_REGISTER_SUCCESS, data });
  } catch (err) {
    yield put({ type: types.USER_REGISTER_FAILURE, err });
  }
}

export default function* watchRegisterUser() {
  yield takeLatest(types.USER_REGISTER, registerUser);
}
