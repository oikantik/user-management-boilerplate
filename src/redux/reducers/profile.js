import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  error: "",
  name: "",
  email: "",
  dob: "",
  gender: "",
  aboutMe: "",
  address: "",
  phone: "",
  website: "",
  userRole: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MY_PROFILE:
      return { ...state, loading: true };
    case types.GET_MY_PROFILE_SUCCESS:
      const {
        success,
        name,
        email,
        dob,
        gender,
        aboutMe,
        address,
        phone,
        website,
        userRole,
      } = action.payload;
      return {
        ...state,
        loading: false,
        success,
        name,
        email,
        dob,
        gender,
        aboutMe,
        address,
        phone,
        website,
        userRole,
      };
    case types.GET_MEMBERS_FAILURE:
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
