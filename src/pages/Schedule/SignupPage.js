import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { format as formatDate } from "date-fns";
import { getPublicSchedule } from "../../redux/actions/schedule";

const SignupPage = ({
  match,
  handleGetPublicScheduler,
  eventId,
  description,
  title,
  loading,
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
}) => {
  const getEventId = match.params.eventId;
  const [startDateState, setStartDate] = useState();
  const [availableTimes, setavailableTimes] = useState([]);
  useEffect(() => {
    handleGetPublicScheduler(getEventId);
  }, [handleGetPublicScheduler, getEventId]);

  const handleDateSelect = (value) => {
    switch (formatDate(new Date(value), "iiii")) {
      case "Monday":
        return setavailableTimes(monday);
      case "Tuesday":
        return setavailableTimes(tuesday);
      case "Wednesday":
        return setavailableTimes(wednesday);
      case "Thursday":
        return setavailableTimes(thursday);
      case "Friday":
        return setavailableTimes(friday);
      case "Saturday":
        return setavailableTimes(saturday);
      case "Sunday":
        return setavailableTimes(sunday);
      default:
        return setavailableTimes();
    }
  };

  return (
    <Fragment>
      {loading && <Spinner animation="border" variant="primary" />}
      {!loading && (
        <Fragment>
          <DatePicker
            selected={startDateState}
            onSelect={handleDateSelect}
            minDate={new Date(startDate)}
            maxDate={new Date(endDate)}
            onChange={(date) => setStartDate(date)}
            excludeDates={blackoutDate && blackoutDate.map((x) => new Date(x))}
            inline
          />
          The title of the scheduler is {title}
          <br />
          The description of the scheduler is {description}
          <ul>
            {availableTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetPublicScheduler: (eventId) => {
      dispatch(getPublicSchedule(eventId));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    success: state.publicScheduler.success,
    eventId: state.publicScheduler.event.eventId,
    title: state.publicScheduler.event.title,
    description: state.publicScheduler.event.description,
    error: state.publicScheduler.error,
    loading: state.publicScheduler.loading,
    startDate: state.publicScheduler.event.startDate,
    endDate: state.publicScheduler.event.endDate,
    timezone: state.publicScheduler.event.timezone,
    meetingLength: state.publicScheduler.event.meetingLength,
    spreadLength: state.publicScheduler.event.spreadLength,
    blackoutDate: state.publicScheduler.event.blackoutDate,
    monday: state.publicScheduler.event.monday,
    tuesday: state.publicScheduler.event.tuesday,
    wednesday: state.publicScheduler.event.wednesday,
    thursday: state.publicScheduler.event.thursday,
    friday: state.publicScheduler.event.friday,
    saturday: state.publicScheduler.event.saturday,
    sunday: state.publicScheduler.event.sunday,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
