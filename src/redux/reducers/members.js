import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  error: "",
  list: [],
  count: 0,
  getCurrentProfileSuccess: false,
  editCurrentProfileSuccess: false,
  viewCurrentProfile: false,
  editCurrentProfile: false,
  updatedCurrentProfile: false,
  currentMember: {
    name: "",
    email: "",
    dob: "",
    gender: "",
    aboutMe: "",
    address: "",
    phone: "",
    website: "",
    userRole: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MEMBERS:
      return { ...state, loading: true, list: [], viewCurrentProfile: false };
    case types.GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        viewCurrentProfile: false,
        editCurrentProfile: false,
        success: action.payload.success,
        error: "",
        count: action.payload.count,
        list: [...action.payload.members],
      };
    case types.GET_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        viewCurrentProfile: false,
        success: action.payload.success,
        list: [],
        count: 0,
        error: action.payload.message,
      };

    /* Get Current Member profile */
    case types.GET_MEMBER_PROFILE:
      return { ...state, loading: true, viewCurrentProfile: true };

    case types.GET_MEMBER_PROFILE_SUCCESS: {
      const {
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
        getCurrentProfileSuccess: true,
        currentMember: {
          name,
          email,
          dob,
          gender,
          aboutMe,
          address,
          phone,
          website,
          userRole,
        },
      };
    }
    case types.GET_MEMBER_PROFILE_FAILURE: {
      const { success, message } = action.payload;
      return {
        ...state,
        getCurrentProfileSuccess: false,
        loading: false,
        success: success,
        error: message,
      };
    }

    /* Load Edit Profile Window */
    case types.LOAD_EDIT_MEMBER_PROFILE:
      return {
        ...state,
        loading: true,
        viewCurrentProfile: false,
        editCurrentProfile: true,
        updatedCurrentProfile: false,
      };

    case types.LOAD_EDIT_MEMBER_PROFILE_SUCCESS: {
      const {
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
        getCurrentProfileSuccess: false,
        editCurrentProfileSuccess: true,
        currentMember: {
          name,
          email,
          dob,
          gender,
          aboutMe,
          address,
          phone,
          website,
          userRole,
        },
      };
    }
    case types.LOAD_EDIT_MEMBER_PROFILE_FAILURE: {
      const { success, message } = action.payload;
      return {
        ...state,
        getCurrentProfileSuccess: false,
        editCurrentProfileSuccess: false,
        loading: false,
        success: success,
        error: message,
      };
    }

    /* Update profile */
    case types.UPDATE_MEMBER_PROFILE:
      return { ...state, loading: true };
    case types.UPDATE_MEMBER_PROFILE_SUCCESS: {
      const {
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
        updatedCurrentProfile: true,
        currentMember: {
          name,
          email,
          dob,
          gender,
          aboutMe,
          address,
          phone,
          website,
          userRole,
        },
      };
    }
    case types.UPDATE_MEMBER_PROFILE_FAILURE: {
      const { success, message } = action.payload;
      return {
        ...state,
        updatedCurrentProfile: false,
        loading: false,
        success: success,
        error: message,
      };
    }

    default:
      return state;
  }
};
