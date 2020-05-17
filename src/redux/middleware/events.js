import axios from "axios";
import {
  createEventURI,
  getEditEventDetailsURI,
  editEventDetailsURI,
  getAllEventsURI,
  editEventScheduleURI,
  getEditEventScheduleURI,
  getEditEventFormFieldsURI,
  editEventFormFieldsURI,
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

export const getEditEventDetails = async (payload) => {
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

export const editEventDetails = async (payload) => {
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

export const getEditEventSchedule = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(getEditEventScheduleURI, {
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

export const editEventSchedule = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(editEventScheduleURI, {
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

export const getEditEventFormFields = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(getEditEventFormFieldsURI, {
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

export const editEventFormFields = async (payload) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(editEventFormFieldsURI, {
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
