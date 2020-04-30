/* List of Members */

import axios from "axios";
import { getProfileURI } from "../../config/default";

export const getProfile = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(getProfileURI);
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

export const setProfile = async (payload) => {
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
  const response = await axios.post(getProfileURI, data, {
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
