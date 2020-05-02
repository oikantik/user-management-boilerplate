import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ManageEvent = () => {
  return (
    <Row className="main-board">
      <Col
        className="main-board-cl-left"
        style={{ minHeight: "100vh", height: "100%" }}
      >
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <p>All Events Will be here.</p>
            <p>There will be a button to create events</p>
            <p>There will be a button to find members</p>
            <p>A button to see the preview of event page</p>
            <p>A button to see the actual url</p>
            <p>
              It will show how many unique visits, how many signed up (if a
              contact is deleted, make sure to remove that from count
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ManageEvent;
