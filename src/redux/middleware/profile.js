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

export const setProfile = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(getProfileURI, {
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
