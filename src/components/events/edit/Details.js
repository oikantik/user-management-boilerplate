import React from "react";
import { Form, Button } from "react-bootstrap";

const EditEventDetailsForm = () => {
  return (
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
        <Form.Text className="text-muted">Your Event Description</Form.Text>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditEventDetailsForm;
