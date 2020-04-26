/* List of Members */

import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../constants";
import members from "../middleware/members";

function* getMembers(action) {
  try {
    const payload = yield call(members, action.payload);
    yield put({ type: types.GET_MEMBERS_SUCCESS, payload });
  } catch (err) {
    yield put({
      type: types.GET_MEMBERS_FAILURE,
      payload: err.response.data,
    });
  }
}

export default function* watchGetMembers() {
  yield takeLatest(types.GET_MEMBERS, getMembers);
}
