import * as types from "../constants";

export const getPublicSchedule = (payload) => {
  return {
    type: types.GET_PUBLIC_SCHEDULER,
    payload: payload,
  };
};
