import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import { getPublicSchedule } from "../../redux/actions/schedule";

const SignupPage = ({
  match,
  handleGetPublicScheduler,
  eventId,
  description,
  title,
  loading,
}) => {
  const getEventId = match.params.eventId;
  useEffect(() => {
    handleGetPublicScheduler(getEventId);
  }, [handleGetPublicScheduler, getEventId]);
  return (
    <div>
      {loading && <Spinner animation="border" variant="primary" />}
      {!loading && (
        <p>
          The title of the scheduler is {title}
          <br />
          The description of the scheduler is {description}
        </p>
      )}
    </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
