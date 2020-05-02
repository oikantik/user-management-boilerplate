import React from "react";
import { Form, Button } from "react-bootstrap";

const EditEventTrackingForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Header Tracking Code</Form.Label>
        <Form.Text className="text-muted">
          This goes inside <code>&lt;head&gt;&lt;/head&gt;</code>
        </Form.Text>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Body Tracking Code</Form.Label>
        <Form.Text className="text-muted">
          This goes inside <code>&lt;body&gt;&lt;/body&gt;</code>
        </Form.Text>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditEventTrackingForm;
