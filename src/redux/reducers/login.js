import * as types from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return state;
    case types.USER_LOGIN_SUCCESS:
      return state;
    case types.USER_LOGIN_FAILURE:
      return state;
    default:
      return state;
  }
};
