import axios from "axios";
import { registerUserURI } from "../../config/default";

export default async (payload) => {
  const response = await axios.post(registerUserURI, {
    data: payload,
  });
  return {
    id: response.data.id,
  };
};
