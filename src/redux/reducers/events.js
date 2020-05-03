import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  event: {
    title: "",
    description: "",
    eventId: "",
    editorId: "",
    updated: false,
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

    /* get edit event details */
    case types.GET_EDIT_EVENT_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_EDIT_EVENT_DETAILS_SUCCESSFUL: {
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
    case types.GET_EDIT_EVENT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.message,
      };

    /*  edit event details */
    case types.EDIT_EVENT_DETAILS:
      return {
        ...state,
        loading: true,
        event: { updated: false },
      };
    case types.EDIT_EVENT_DETAILS_SUCCESSFUL: {
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
          updated: true,
        },
      };
    }
    case types.EDIT_EVENT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.message,
        event: { updated: false },
      };

    default:
      return state;
  }
};
