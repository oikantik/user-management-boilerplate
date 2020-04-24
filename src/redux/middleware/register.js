import axios from "axios";
import { registerUserURI } from "../../config/default";

export default async (payload) => {
  const response = await axios.post(registerUserURI, {
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    success: response.data.success,
    message: response.data.message,
    id: response.data.payload.id,
  };
};
