import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import login from "../middleware/login";

function* loginUser(action) {
  try {
    const payload = yield call(login, action.payload);
    localStorage.setItem("token", payload.token);
    yield put({ type: types.USER_LOGIN_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.USER_LOGIN_FAILURE,
      payload: err.response.data,
    });
  }
}

export default function* watchLoginUser() {
  yield takeLatest(types.USER_LOGIN, loginUser);
}
