import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_REGISTER:
      return { ...state, loading: true };
    case types.RESET_USER_REGISTER:
      return { ...state, loading: false, success: false, error: "" };
    case types.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        error: "",
      };
    case types.USER_REGISTER_FAILURE:
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
