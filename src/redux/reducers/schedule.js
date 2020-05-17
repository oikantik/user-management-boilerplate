import * as types from "../constants";

const initialState = {
  loading: false,
  success: false,
  event: {
    title: "",
    description: "",
    eventId: "",
    startDate: "",
    endDate: "",
    timezone: "",
    meetingLength: "",
    spreadLength: "",
    blackoutDate: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
    formFields: [],
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
      const {
        title,
        description,
        eventId,
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
        formFields,
      } = action.payload.event;
      const newFormFieldsArray = Object.values(formFields);

      return {
        ...state,
        loading: false,
        success: true,
        event: {
          title,
          description,
          eventId,
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
          formFields: newFormFieldsArray,
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
