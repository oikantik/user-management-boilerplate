import React, { useEffect, Fragment } from "react";
import { Card, Col, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getEvents } from "../../../redux/actions/events";

const ManageEvent = ({ handleGetAllEvents, events, loading }) => {
  useEffect(() => {
    handleGetAllEvents();
  }, [handleGetAllEvents]);
  return (
    <Row className="main-board">
      <Col
        className="main-board-cl-left"
        style={{ minHeight: "100vh", height: "100%" }}
      >
        {loading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {!loading && (
          <Fragment>
            {events.map((event) => (
              <Card
                style={{ marginTop: "20px", marginBottom: "20px" }}
                key={event.editorId}
              >
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col sm={10}>{event.title}</Col>
                      <Col sm={2}>
                        <Button
                          href={"/edit-event/" + event.editorId}
                          className="float-right grn-btn"
                        >
                          Edit Event
                        </Button>
                      </Col>
                    </Row>
                  </Card.Title>

                  <Card.Text>
                    <span>
                      Event Creation Date
                      <br />
                    </span>
                    <span>
                      View Registrants
                      <br />
                    </span>
                    <span>
                      <Link to={"/schedule/" + event.eventId} target="_blank">
                        View Appointment Page
                      </Link>
                      <br />
                    </span>
                    <span>
                      Preview Appointment Page
                      <br />
                    </span>
                    <span>
                      Delete Button
                      <br />
                    </span>
                    <span>
                      unique visits: 0 Registrants: 0<br />
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Fragment>
        )}
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetAllEvents: () => {
      dispatch(getEvents());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    success: state.events.success,
    events: state.events.allEvents,
    error: state.events.error,
    loading: state.events.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageEvent);
