import React, { Fragment, useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

import EditEventDetailsForm from "./Details";
import EditEventSchedulingForm from "./Schedule";
import EditEventPageForm from "./Page";

import {
  getEditEventDetails,
  editEventDetails,
  editEventSchedule,
  getEditEventSchedule,
  getEditEventFormFields,
  cancelEditDetails,
  cancelEditSchedule,
  cancelEditFormFields,
  editFormFields,
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
  handleShowEditEventFormFields,
  handleCancelEditFormFields,
  handleEditEventFormFields,
  editingFormFields,
  formFields,
  updatedFormFields,
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

          <EditEventPageForm
            editorId={getEditorId}
            loading={loading}
            handleShowEditEventFormFields={handleShowEditEventFormFields}
            editingFormFields={editingFormFields}
            handleCancelEditFormFields={handleCancelEditFormFields}
            updated={updatedFormFields}
            formFields={formFields}
            handleEditEventFormFields={handleEditEventFormFields}
          />
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

    handleEditEventFormFields: (e) => {
      const payload = {
        editorId: e.editorId,
        name: {
          label: e.cusNameLabel,
          isRequired: e.cusNameRequired,
          isShown: e.cusNameShow,
          fieldName: "name",
          fieldType: "text",
        },
        email: {
          label: e.cusEmailLabel,
          isRequired: e.cusEmailRequired,
          isShown: e.cusEmailShow,
          fieldName: "email",
          fieldType: "email",
        },
        note: {
          label: e.cusNoteLabel,
          isRequired: e.cusNoteRequired,
          isShown: e.cusNoteShow,
          fieldName: "name",
          fieldType: "text",
        },
        phone: {
          label: e.cusPhoneLabel,
          isRequired: e.cusPhoneRequired,
          isShown: e.cusPhoneShow,
          fieldName: "name",
          fieldType: "text",
        },
      };
      console.log(payload);
      dispatch(editFormFields(payload));
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

    handleShowEditEventFormFields: (editorId) => {
      dispatch(getEditEventFormFields(editorId));
    },
    handleCancelEditDetails: () => {
      dispatch(cancelEditDetails());
    },
    handleCancelEditSchedule: () => {
      dispatch(cancelEditSchedule());
    },
    handleCancelEditFormFields: () => {
      dispatch(cancelEditFormFields());
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
    editingFormFields: state.events.editingFormFields,
    formFields: state.events.event.formFields,
    updatedFormFields: state.events.event.updatedFormFields,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
