/* List of Members */

import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import { getProfile, setProfile } from "../middleware/profile";

function* getMyProfile(action) {
  try {
    const payload = yield call(getProfile, action.payload);
    yield put({ type: types.GET_MY_PROFILE_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.GET_MY_PROFILE_FAILURE,
      payload: err.response.data,
    });
  }
}

function* setMyProfile(action) {
  try {
    const payload = yield call(setProfile, action.payload);
    yield put({ type: types.UPDATE_MY_PROFILE_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.UPDATE_MY_PROFILE_FAILURE,
      payload: err.response.data,
    });
  }
}

export function* watchGetMembers() {
  yield takeLatest(types.GET_MY_PROFILE, getMyProfile);
}
export function* watchSetMembers() {
  yield takeLatest(types.UPDATE_MY_PROFILE, setMyProfile);
}
