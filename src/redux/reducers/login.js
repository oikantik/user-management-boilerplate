import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  error: "",
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return { ...state, loading: true };
    case types.RESET_USER_LOGIN:
      return { ...state, loading: false, success: false, error: "" };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        token: action.payload.token,
        error: "",
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
