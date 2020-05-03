import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  event: {
    title: "",
    description: "",
    eventId: "",
  },
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PUBLIC_SCHEDULER:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PUBLIC_SCHEDULER_SUCCESSFUL: {
      const { title, description, eventId } = action.payload.event;
      return {
        ...state,
        loading: false,
        success: true,
        event: {
          title,
          description,
          eventId,
        },
      };
    }
    case types.GET_PUBLIC_SCHEDULER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};