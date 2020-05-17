import { fork } from "redux-saga/effects";
import register from "./register";
import login from "./login";
import {
  watchGetAllMembers,
  watchGetMemberProfile,
  watchLoadEditMemberProfile,
  watchSetMemberProfile,
} from "./members";
import { watchGetProfile, watchSetProfile } from "./profile";
import {
  watchCreateEvent,
  watchGetEditEvent,
  watchEditEvent,
  watchGetEvents,
  watchEditEventSchedule,
  watchGetEditEventSchedule,
  watchGetEditEventFormFields,
  watchEditEventFormFields,
} from "./events";
import { watchGetPublicSchedule } from "./scheduler";

export default function* () {
  yield fork(register);
  yield fork(login);
  yield fork(watchGetAllMembers);
  yield fork(watchGetMemberProfile);
  yield fork(watchLoadEditMemberProfile);
  yield fork(watchSetMemberProfile);
  yield fork(watchGetProfile);
  yield fork(watchSetProfile);
  yield fork(watchCreateEvent);
  yield fork(watchGetEditEvent);
  yield fork(watchEditEvent);
  yield fork(watchGetPublicSchedule);
  yield fork(watchGetEvents);
  yield fork(watchEditEventSchedule);
  yield fork(watchGetEditEventSchedule);
  yield fork(watchGetEditEventFormFields);
  yield fork(watchEditEventFormFields);
}
