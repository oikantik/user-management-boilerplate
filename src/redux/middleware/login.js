import axios from "axios";
import { loginUserURI } from "../../config/default";

export default async (payload) => {
  const response = await axios.post(loginUserURI, {
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    id: response.data.id,
  };
};
