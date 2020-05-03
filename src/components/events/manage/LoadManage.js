import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const ManageEvent = () => {
  return (
    <Row className="main-board">
      <Col
        className="main-board-cl-left"
        style={{ minHeight: "100vh", height: "100%" }}
      >
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title>
              Event Title
              <Button href="/edit-event:eventId" className="float-right">
                Edit Event
              </Button>
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
                View Appointment Page
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
      </Col>
    </Row>
  );
};

export default ManageEvent;
