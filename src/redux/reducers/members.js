import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  error: "",
  list: [],
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MEMBERS:
      return { ...state, loading: true, list: [] };
    case types.GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        error: "",
        count: action.payload.count,
        list: [...action.payload.members],
      };
    case types.GET_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        list: [],
        count: 0,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
