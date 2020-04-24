import * as types from "../constants";

export const loginUser = (payload) => {
  return {
    type: types.USER_LOGIN,
    payload: payload,
  };
};
