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

import { getEditEvent, editEvent } from "../../../redux/actions/events";

const EditEvent = ({
  handleShowEditEvent,
  handleEditEvent,
  editorId,
  eventId,
  title,
  loading,
  description,
  updated,
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
          />

          <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
              <Card.Text>
                {" "}
                <EditEventTrackingForm />
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
              <Card.Text>
                {" "}
                <EditEventSchedulingForm />
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
              <Card.Text>
                <EditEventPageForm />
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
              <Card.Text>
                {" "}
                <EditEventEmailsForm />
              </Card.Text>
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
      dispatch(editEvent(payload));
      return false;
    },
    handleShowEditEvent: (editorId) => {
      dispatch(getEditEvent(editorId));
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
    loading: state.events.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
