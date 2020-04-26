/* List of Members */

import axios from "axios";
import { getProfileURI } from "../../config/default";

export default async () => {
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
