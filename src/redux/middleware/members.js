/* List of Members */

import axios from "axios";
import { getMembersListURI } from "../../config/default";

export default async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(getMembersListURI);
  return {
    success: response.data.success,
    message: response.data.message,
  };
};
