import * as types from "../constants";

export const getMembers = () => {
  return {
    type: types.GET_MEMBERS,
  };
};

export const editMemberProfile = (payload) => {
  return {
    type: types.LOAD_EDIT_MEMBER_PROFILE,
    payload: payload,
  };
};

export const getMemberProfile = (payload) => {
  return {
    type: types.GET_MEMBER_PROFILE,
    payload: payload,
  };
};

export const setMemberProfile = (payload) => {
  return {
    type: types.UPDATE_MEMBER_PROFILE,
    payload: payload,
  };
};
