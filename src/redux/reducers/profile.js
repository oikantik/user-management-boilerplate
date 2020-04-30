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
  editProfile: false,
  viewProfile: true,
  avatarUrl: "",
  updated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MY_PROFILE:
      return { ...state, loading: true };
    case types.GET_MY_PROFILE_SUCCESS: {
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
        avatarUrl,
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
        avatarUrl,
      };
    }
    case types.GET_MY_PROFILE_FAILURE: {
      const { success, message } = action.payload;
      return {
        ...state,
        loading: false,
        success: success,
        error: message,
      };
    }
    case types.LOAD_EDIT_PROFILE:
      return {
        ...state,
        viewProfile: false,
        editProfile: true,
      };
    case types.LOAD_VIEW_PROFILE:
      return {
        ...state,
        viewProfile: true,
        editProfile: false,
        updated: false,
      };
    case types.UPDATE_MY_PROFILE:
      return { ...state, loading: true };
    case types.UPDATE_MY_PROFILE_SUCCESS: {
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
        avatarUrl,
        updated,
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
        avatarUrl,
        updated,
      };
    }
    case types.UPDATE_MY_PROFILE_FAILURE: {
      const { success, message } = action.payload;
      return {
        ...state,
        loading: false,
        success: success,
        error: message,
      };
    }
    default:
      return state;
  }
};
