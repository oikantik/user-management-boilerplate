import React from "react";
import { Form, Button } from "react-bootstrap";

const EditEventEmailsForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>From Name</Form.Label>
        <Form.Text className="text-muted" name="eventTitle">
          Enter your from name
        </Form.Text>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Reply To</Form.Label>
        <Form.Text className="text-muted" name="replyTo">
          Enter your reply to
        </Form.Text>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Subject</Form.Label>
        <Form.Text className="text-muted" name="eventTitle">
          Enter your email subject
        </Form.Text>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email Body</Form.Label>
        <Form.Text className="text-muted">Your Email Body</Form.Text>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditEventEmailsForm;
