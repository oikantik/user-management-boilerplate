import axios from "axios";
import {
  createEventURI,
  getEditEventDetailsURI,
  editEventDetailsURI,
  getAllEventsURI,
} from "../../config/default.json";

export const createEvent = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(createEventURI, {
    data: payload,
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

export const getEditEvent = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(getEditEventDetailsURI, {
    data: { editorId: payload },
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

export const editEvent = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(editEventDetailsURI, {
    data: payload,
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

export const getEvents = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(getAllEventsURI, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    success: response.data.success,
    message: response.data.message,
    events: response.data.events,
  };
};
