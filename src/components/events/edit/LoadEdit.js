import React, { Fragment, useState } from "react";
import { Col, Row, Card, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

import EditEventDetailsForm from "./Details";
import EditEventTrackingForm from "./Tracking";
import EditEventSchedulingForm from "./Schedule";
import EditEventEmailsForm from "./Email";
import EditEventPageForm from "./Page";

import {
  getEditEventDetails,
  editEventDetails,
  editEventSchedule,
  getEditEventSchedule,
  cancelEditDetails,
  cancelEditSchedule,
} from "../../../redux/actions/events";

const EditEvent = ({
  handleShowEditEvent,
  handleEditEvent,
  editorId,
  handleEditEventSchedule,
  eventId,
  title,
  loading,
  description,
  updated,
  updatedSchedule,
  editingSchedule,
  editingDetails,
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
  handleShowEditEventSchedule,
  handleCancelEditSchedule,
  handleCancelEditDetails,
}) => {
  const getEditorId = useParams().editorId;
  const [showCreateSuccessAlert, setshowCreateSuccessAlert] = useState(
    queryString.parse(useLocation().search).success ? true : false
  );
  return (
    <Fragment>
      {showCreateSuccessAlert && (
        <Alert
          variant="success"
          onClose={() => setshowCreateSuccessAlert(false)}
          dismissible
          style={{ marginTop: "20px" }}
        >
          <Alert.Heading>Event Saved Successfully!</Alert.Heading>
          <p>You can now edit the event below</p>
        </Alert>
      )}
      <Row className="main-board">
        <Col
          className="main-board-cl-left"
          style={{ minHeight: "100vh", height: "100%" }}
        >
          <EditEventDetailsForm
            editorId={getEditorId}
            handleShowEditEvent={handleShowEditEvent}
            eventId={eventId}
            title={title}
            description={description}
            handleEditEvent={handleEditEvent}
            loading={loading}
            updated={updated}
            editingDetails={editingDetails}
            handleCancelEditDetails={handleCancelEditDetails}
          />

          <EditEventSchedulingForm
            editorId={getEditorId}
            handleEditEventSchedule={handleEditEventSchedule}
            loading={loading}
            updatedSchedule={updatedSchedule}
            startDate={startDate}
            endDate={endDate}
            timezone={timezone}
            meetingLength={meetingLength}
            spreadLength={spreadLength}
            blackoutDate={blackoutDate}
            monday={monday}
            tuesday={tuesday}
            wednesday={wednesday}
            thursday={thursday}
            friday={friday}
            saturday={saturday}
            sunday={sunday}
            handleShowEditEventSchedule={handleShowEditEventSchedule}
            editingSchedule={editingSchedule}
            handleCancelEditSchedule={handleCancelEditSchedule}
          />

          <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
              <EditEventTrackingForm />
            </Card.Body>
          </Card>

          <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
              <EditEventPageForm />
            </Card.Body>
          </Card>

          <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
              <EditEventEmailsForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEditEvent: (e) => {
      const payload = {
        eventId: e.eventId,
        title: e.title,
        description: e.description,
        editorId: e.editorId,
      };
      dispatch(editEventDetails(payload));
      return false;
    },

    handleEditEventSchedule: (e) => {
      const payload = {
        startDate: e.startDate,
        endDate: e.endDate,
        timezone: e.timezone,
        meetingLength: e.meetingLength,
        spreadLength: e.spreadLength,
        blackoutDate: e.blackoutDate.map((x) => x.defaultDate),
        monday: e.avMonday,
        tuesday: e.avTuesday,
        wednesday: e.avWednesday,
        thursday: e.avThursday,
        friday: e.avFriday,
        saturday: e.avSaturday,
        sunday: e.avSunday,
        editorId: e.editorId,
      };
      dispatch(editEventSchedule(payload));
      return false;
    },
    handleShowEditEvent: (editorId) => {
      dispatch(getEditEventDetails(editorId));
    },

    handleShowEditEventSchedule: (editorId) => {
      dispatch(getEditEventSchedule(editorId));
    },
    handleCancelEditDetails: () => {
      dispatch(cancelEditDetails());
    },
    handleCancelEditSchedule: () => {
      dispatch(cancelEditSchedule());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    success: state.events.success,
    editorId: state.events.event.editorId,
    error: state.events.error,
    title: state.events.event.title,
    description: state.events.event.description,
    eventId: state.events.event.eventId,
    updated: state.events.event.updated,
    updatedSchedule: state.events.event.updatedSchedule,
    loading: state.events.loading,
    startDate: state.events.event.startDate,
    endDate: state.events.event.endDate,
    timezone: state.events.event.timezone,
    meetingLength: state.events.event.meetingLength,
    spreadLength: state.events.event.spreadLength,
    blackoutDate: state.events.event.blackoutDate,
    monday: state.events.event.monday,
    tuesday: state.events.event.tuesday,
    wednesday: state.events.event.wednesday,
    thursday: state.events.event.thursday,
    friday: state.events.event.friday,
    saturday: state.events.event.saturday,
    sunday: state.events.event.sunday,
    editingSchedule: state.events.editingSchedule,
    editingDetails: state.events.editingDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
