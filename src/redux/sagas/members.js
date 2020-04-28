/* List of Members */

import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import {
  getMembers,
  getMemberProfile,
  setMemberProfile,
} from "../middleware/members";

function* getAllMembers(action) {
  try {
    const payload = yield call(getMembers, action.payload);
    yield put({ type: types.GET_MEMBERS_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.GET_MEMBERS_FAILURE,
      payload: err.response.data,
    });
  }
}

function* getTheMemberProfile(action) {
  try {
    const payload = yield call(getMemberProfile, action.payload);
    yield put({ type: types.GET_MEMBER_PROFILE_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.GET_MEMBER_PROFILE_FAILURE,
      payload: err.response.data,
    });
  }
}

function* loadEditTheMemberProfile(action) {
  try {
    const payload = yield call(getMemberProfile, action.payload);
    yield put({ type: types.LOAD_EDIT_MEMBER_PROFILE_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.LOAD_EDIT_MEMBER_PROFILE_FAILURE,
      payload: err.response.data,
    });
  }
}

function* setTheMemberProfile(action) {
  try {
    const payload = yield call(setMemberProfile, action.payload);
    yield put({ type: types.UPDATE_MEMBER_PROFILE_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.UPDATE_MEMBER_PROFILE_FAILURE,
      payload: err.response.data,
    });
  }
}

export function* watchGetAllMembers() {
  yield takeLatest(types.GET_MEMBERS, getAllMembers);
}

export function* watchGetMemberProfile() {
  yield takeLatest(types.GET_MEMBER_PROFILE, getTheMemberProfile);
}
export function* watchLoadEditMemberProfile() {
  yield takeLatest(types.LOAD_EDIT_MEMBER_PROFILE, loadEditTheMemberProfile);
}

export function* watchSetMemberProfile() {
  yield takeLatest(types.UPDATE_MEMBER_PROFILE, setTheMemberProfile);
}
