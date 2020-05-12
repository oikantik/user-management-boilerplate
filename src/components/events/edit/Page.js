import React from "react";
import { Form, Button } from "react-bootstrap";

const EditEventPageForm = () => {
  return (
    <Form>
      <span>
        Fields to Collect
        <br />
        Redirect After Schedule
      </span>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditEventPageForm;
