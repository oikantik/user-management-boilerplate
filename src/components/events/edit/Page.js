import React from "react";
import { Form, Button } from "react-bootstrap";

const EditEventPageForm = () => {
  return (
    <Form>
      <p>
        Fields to Collect
        <br />
        Redirect After Schedule
      </p>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditEventPageForm;
