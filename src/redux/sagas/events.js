import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import { createEvent } from "../middleware/events";

function* createTheEvent(action) {
  try {
    const payload = yield call(createEvent, action.payload);
    yield put({
      type: types.CREATE_NEW_EVENT_SUCCESSFUL,
      payload,
    });
  } catch (err) {
    yield put({
      type: types.CREATE_NEW_EVENT_FAILURE,
      paylod: err.response.data,
    });
  }
}

export function* watchCreateEvent() {
  yield takeLatest(types.CREATE_NEW_EVENT, createTheEvent);
}
