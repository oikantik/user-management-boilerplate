import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  allEvents: [],
  event: {
    title: "",
    description: "",
    eventId: "",
    editorId: "",
    updated: false,
    updatedSchedule: false,
  },
  editingSchedule: false,
  editingDetails: false,
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
        editingSchedule: false,
        editingDetails: false,
      };
    case types.GET_EDIT_EVENT_DETAILS_SUCCESSFUL: {
      const { title, description, eventId, editorId } = action.payload.event;
      return {
        ...state,
        loading: false,
        success: true,
        editingSchedule: false,
        editingDetails: true,
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

    /* get edit event schedule */
    case types.GET_EDIT_EVENT_SCHEDULE:
      return {
        ...state,
        loading: true,
        editingSchedule: false,
        editingDetails: false,
      };
    case types.GET_EDIT_EVENT_SCHEDULE_SUCCESSFUL: {
      const {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      } = action.payload.event.availableDays;
      const {
        startDate,
        endDate,
        timezone,
        meetingLength,
        spreadLength,
        blackoutDate,
      } = action.payload.event;
      return {
        ...state,
        loading: false,
        success: true,
        editingSchedule: true,
        editingDetails: false,
        event: {
          startDate,
          endDate,
          timezone,
          meetingLength,
          spreadLength,
          blackoutDate,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday,
        },
      };
    }
    case types.GET_EDIT_EVENT_SCHEDULE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.message,
      };

    /*  edit event schedule */
    case types.EDIT_EVENT_SCHEDULE:
      return {
        ...state,
        loading: true,
        event: { updated: false },
      };
    case types.EDIT_EVENT_SCHEDULE_SUCCESSFUL: {
      const {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      } = action.payload.event.availableDays;
      const {
        startDate,
        endDate,
        timezone,
        meetingLength,
        spreadLength,
        blackoutDate,
      } = action.payload.event;
      return {
        ...state,
        loading: false,
        success: true,
        editingSchedule: false,
        event: {
          startDate,
          endDate,
          timezone,
          meetingLength,
          spreadLength,
          blackoutDate,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          sunday,
          updatedSchedule: true,
        },
      };
    }
    case types.EDIT_EVENT_SCHEDULE_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.message,
        event: { updatedSchedule: false },
      };

    /* Get all the events */
    case types.GET_ALL_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_EVENTS_SUCCESSFUL: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        allEvents: action.payload.events,
      };
    }
    case types.GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.message,
      };

    /* Handle cancels */

    case types.CANCEL_EDIT_EVENT_SCHEDULE:
      return {
        ...state,
        editingSchedule: false,
        updatedSchedule: false,
      };

    case types.CANCEL_EDIT_EVENT_DETAILS:
      return {
        ...state,
        editingDetails: false,
        updated: false,
      };
    default:
      return state;
  }
};
