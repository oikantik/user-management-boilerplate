import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  event: {
    title: "",
    description: "",
    eventId: "",
    editorId: "",
  },

  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NEW_EVENT:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_NEW_EVENT_SUCCESSFUL: {
      const { title, description, eventId, editorId } = action.payload.event;
      return {
        ...state,
        loading: false,
        success: true,
        event: {
          title,
          description,
          eventId,
          editorId,
        },
      };
    }
    case types.CREATE_NEW_EVENT_FAILURE:
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
