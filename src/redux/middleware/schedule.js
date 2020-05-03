import axios from "axios";
import { getPublicSchedulerURI } from "../../config/default.json";

export const getPublicSchedule = async (payload) => {
  const response = await axios.post(getPublicSchedulerURI, {
    data: { eventId: payload },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    success: response.data.success,
    message: response.data.message,
    event: response.data.event,
  };
};
