import * as types from "../constants";

export const createNewEvent = (payload) => {
  return {
    type: types.CREATE_NEW_EVENT,
    payload: payload,
  };
};

export const getEditEventDetails = (payload) => {
  return {
    type: types.GET_EDIT_EVENT_DETAILS,
    payload: payload,
  };
};

export const editEventDetails = (payload) => {
  return {
    type: types.EDIT_EVENT_DETAILS,
    payload: payload,
  };
};

export const getEditEventSchedule = (payload) => {
  return {
    type: types.GET_EDIT_EVENT_SCHEDULE,
    payload: payload,
  };
};

export const editEventSchedule = (payload) => {
  return {
    type: types.EDIT_EVENT_SCHEDULE,
    payload: payload,
  };
};

export const editFormFields = (payload) => {
  return {
    type: types.EDIT_EVENT_FORM_FIELDS,
    payload: payload,
  };
};

export const getEvents = () => {
  return {
    type: types.GET_ALL_EVENTS,
  };
};

export const getEditEventFormFields = (payload) => {
  return {
    type: types.GET_EDIT_EVENT_FORM_FIELDS,
    payload: payload,
  };
};

export const cancelEditSchedule = () => {
  return {
    type: types.CANCEL_EDIT_EVENT_SCHEDULE,
  };
};

export const cancelEditDetails = () => {
  return {
    type: types.CANCEL_EDIT_EVENT_DETAILS,
  };
};

export const cancelEditFormFields = () => {
  return {
    type: types.CANCEL_EDIT_EVENT_FORM_FIELDS,
  };
};
