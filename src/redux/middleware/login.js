import axios from "axios";
import { loginUserURI } from "../../config/default";

export default async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(loginUserURI, {
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    success: response.data.success,
    message: response.data.message,
    token: response.data.token,
  };
};
