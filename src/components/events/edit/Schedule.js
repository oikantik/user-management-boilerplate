import React from "react";
import { Form, Button } from "react-bootstrap";

const EditEventSchedulingForm = () => {
  return (
    <Form>
      <p>
        {" "}
        Placeholder date picker
        <br />
        Start Date Time
        <br />
        Availability hours (Monday to Sunday, Look at EverWebinar?)
        <br />
        Meeting Time (15, 30, 60)
        <br /> End Date Time
      </p>

      <p>Placeholder timezone selector </p>
      <p>
        Placeholder blackout date time selector
        <br />
        Add
      </p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EditEventSchedulingForm;
