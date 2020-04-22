import * as types from "../constants";

export const registerUser = (payload) => {
  return {
    type: types.USER_REGISTER,
    payload: payload,
  };
};
