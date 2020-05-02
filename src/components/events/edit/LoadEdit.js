import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import EditEventDetailsForm from "./Details";
import EditEventTrackingForm from "./Tracking";
import EditEventSchedulingForm from "./Schedule";
import EditEventEmailsForm from "./Email";
import EditEventPageForm from "./Page";

const EditEvent = () => {
  return (
    <Row className="main-board">
      <Col
        className="main-board-cl-left"
        style={{ minHeight: "100vh", height: "100%" }}
      >
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title>
              Event Title/Description
              <Button className="float-right">Edit</Button>
            </Card.Title>

            <Card.Text>
              <EditEventDetailsForm />
            </Card.Text>
          </Card.Body>
        </Card>

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
  );
};

export default EditEvent;
