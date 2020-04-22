import * as types from "../constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_REGISTER:
      return state;
    case types.USER_REGISTER_SUCCESS:
      return state;
    case types.USER_REGISTER_FAILURE:
      return state;
    default:
      return state;
  }
};
