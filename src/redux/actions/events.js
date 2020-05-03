import * as types from "../constants";

export const createNewEvent = (payload) => {
  return {
    type: types.CREATE_NEW_EVENT,
    payload: payload,
  };
};

export const getEditEvent = (payload) => {
  return {
    type: types.GET_EDIT_EVENT_DETAILS,
    payload: payload,
  };
};

export const editEvent = (payload) => {
  return {
    type: types.EDIT_EVENT_DETAILS,
    payload: payload,
  };
};

export const getEvents = () => {
  return {
    type: types.GET_ALL_EVENTS,
  };
};
