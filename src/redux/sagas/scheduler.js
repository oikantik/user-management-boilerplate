import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import { getPublicSchedule } from "../middleware/schedule";

function* getThePublicSchedule(action) {
  try {
    const payload = yield call(getPublicSchedule, action.payload);
    yield put({
      type: types.GET_PUBLIC_SCHEDULER_SUCCESSFUL,
      payload,
    });
  } catch (err) {
    yield put({
      type: types.GET_PUBLIC_SCHEDULER_FAILURE,
      error: err.response.data,
    });
  }
}

export function* watchGetPublicSchedule() {
  yield takeLatest(types.GET_PUBLIC_SCHEDULER, getThePublicSchedule);
}
