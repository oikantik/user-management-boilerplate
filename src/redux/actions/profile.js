import * as types from "../constants";

export const getMyProfile = () => {
  return {
    type: types.GET_MY_PROFILE,
  };
};

export const loadEditProfile = () => {
  return {
    type: types.LOAD_EDIT_PROFILE,
  };
};

export const loadViewProfile = () => {
  return {
    type: types.LOAD_VIEW_PROFILE,
  };
};

export const updateMyProfile = (payload) => {
  return {
    type: types.UPDATE_MY_PROFILE,
    payload: payload,
  };
};
