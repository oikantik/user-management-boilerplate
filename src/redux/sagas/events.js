import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import {
  createEvent,
  getEditEventDetails,
  editEventDetails,
  getEvents,
  editEventSchedule,
  getEditEventSchedule,
} from "../middleware/events";

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

function* editTheEvent(action) {
  try {
    const payload = yield call(editEventDetails, action.payload);
    yield put({
      type: types.EDIT_EVENT_DETAILS_SUCCESSFUL,
      payload,
    });
  } catch (err) {
    yield put({
      type: types.EDIT_EVENT_DETAILS_FAILURE,
      paylod: err.response.data,
    });
  }
}

function* editTheEventSchedule(action) {
  try {
    const payload = yield call(editEventSchedule, action.payload);
    yield put({
      type: types.EDIT_EVENT_SCHEDULE_SUCCESSFUL,
      payload,
    });
  } catch (err) {
    yield put({
      type: types.EDIT_EVENT_SCHEDULE_FAILURE,
      paylod: err.response.data,
    });
  }
}

function* getEditTheEvent(action) {
  try {
    const payload = yield call(getEditEventDetails, action.payload);
    yield put({
      type: types.GET_EDIT_EVENT_DETAILS_SUCCESSFUL,
      payload,
    });
  } catch (err) {
    yield put({
      type: types.GET_EDIT_EVENT_DETAILS_FAILURE,
      paylod: err.response.data,
    });
  }
}

function* getEditTheEventSchedule(action) {
  try {
    const payload = yield call(getEditEventSchedule, action.payload);
    yield put({
      type: types.GET_EDIT_EVENT_SCHEDULE_SUCCESSFUL,
      payload,
    });
  } catch (err) {
    yield put({
      type: types.GET_EDIT_EVENT_SCHEDULE_FAILURE,
      paylod: err.response.data,
    });
  }
}

function* getAllTheEvents(action) {
  try {
    const payload = yield call(getEvents, action.payload);
    yield put({
      type: types.GET_ALL_EVENTS_SUCCESSFUL,
      payload,
    });
  } catch (err) {
    yield put({
      type: types.GET_ALL_EVENTS_FAILURE,
      paylod: err.response.data,
    });
  }
}

export function* watchCreateEvent() {
  yield takeLatest(types.CREATE_NEW_EVENT, createTheEvent);
}

export function* watchGetEditEvent() {
  yield takeLatest(types.GET_EDIT_EVENT_DETAILS, getEditTheEvent);
}
export function* watchEditEvent() {
  yield takeLatest(types.EDIT_EVENT_DETAILS, editTheEvent);
}

export function* watchEditEventSchedule() {
  yield takeLatest(types.EDIT_EVENT_SCHEDULE, editTheEventSchedule);
}
export function* watchGetEditEventSchedule() {
  yield takeLatest(types.GET_EDIT_EVENT_SCHEDULE, getEditTheEventSchedule);
}

export function* watchGetEvents() {
  yield takeLatest(types.GET_ALL_EVENTS, getAllTheEvents);
}
