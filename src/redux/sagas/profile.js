/* List of Members */

import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import profile from "../middleware/profile";

function* getProfile(action) {
  try {
    const payload = yield call(profile, action.payload);
    yield put({ type: types.GET_MY_PROFILE_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.GET_MY_PROFILE_FAILURE,
      payload: err.response.data,
    });
  }
}

export default function* watchGetMembers() {
  yield takeLatest(types.GET_MY_PROFILE, getProfile);
}
