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
    avatarUrl,
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
    avatarUrl,
  };
};

export const setMemberProfile = async (payload) => {
  axios.defaults.withCredentials = true;
  let data = new FormData();
  data.append("name", payload.name);
  data.append("email", payload.email);
  data.append("dob", payload.dob);
  data.append("gender", payload.gender);
  data.append("address", payload.address);
  data.append("aboutMe", payload.aboutMe);
  data.append("phone", payload.phone);
  data.append("website", payload.website);
  data.append("userRole", payload.userRole);
  data.append("avatar", payload.avatar === null ? "" : payload.avatar[0]);
  const response = await axios.post(setMembersProfileURI, data, {
    headers: {
      "Content-Type": "multipart/form-data",
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
    avatarUrl,
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
    avatarUrl,
    updated,
  };
};
