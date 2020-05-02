import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
const CreateEventDetailsForm = () => {
  return (
    <Row className="main-board">
      <Col
        className="main-board-cl-left"
        style={{ minHeight: "100vh", height: "100%" }}
      >
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Text className="text-muted" name="eventTitle">
                  Your Event Title
                </Form.Text>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Text className="text-muted">
                  Your Event Description
                </Form.Text>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CreateEventDetailsForm;
