/* List of Members */

import axios from "axios";
import {
  getMembersListURI,
  getMembersProfileURI,
  setMembersProfileURI,
} from "../../config/default";

export const getMembers = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(getMembersListURI);
  return {
    success: response.data.success,
    message: response.data.message,
    members: response.data.members,
    count: response.data.count,
  };
};

export const getMemberProfile = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(getMembersProfileURI, {
    data: { memberEmail: payload },
    headers: {
      "Content-Type": "application/json",
    },
  });
  const {
    success,
    message,
    name,
    email,
    dob,
    gender,
    aboutMe,
    address,
    phone,
    website,
    userRole,
  } = response.data;
  return {
    success,
    message,
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
};

export const setMemberProfile = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(setMembersProfileURI, {
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const {
    success,
    message,
    name,
    email,
    dob,
    gender,
    aboutMe,
    address,
    phone,
    website,
    userRole,
    updated,
  } = response.data;
  return {
    success,
    message,
    name,
    email,
    dob,
    gender,
    aboutMe,
    address,
    phone,
    website,
    userRole,
    updated,
  };
};
