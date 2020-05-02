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
              <Button href="/edit-event" className="float-right">
                Edit Event
              </Button>
            </Card.Title>

            <Card.Text>
              <p>Event Creation Date</p>
              <p>View Registrants</p>
              <p>View Appointment Page</p>
              <p>Preview Appointment Page</p>
              <p>unique visits: 0 Registrants: 0</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ManageEvent;
