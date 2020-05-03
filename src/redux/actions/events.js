import * as types from "../constants";

export const createNewEvent = (payload) => {
  return {
    type: types.CREATE_NEW_EVENT,
    payload: payload,
  };
};
