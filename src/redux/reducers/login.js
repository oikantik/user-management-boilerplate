import * as types from "../constants";

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return { ...state, loading: true };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
