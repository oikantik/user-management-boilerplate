import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { createNewEvent } from "../../../redux/actions/events";

const validationSchema = Yup.object({
  eventId: Yup.string()
    .required("Please enter event id")
    .matches(
      /^([a-zA-Z]).*[a-zA-Z\d]$/g,
      "Must Start with a letter, Cannot have spaces or symbols"
    )
    .min(3, "Must be over 3")
    .max(10, "Must be less than 10"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Please enter something for description"),
});

const CreateEventDetailsForm = ({ handleCreateNewEvent }) => {
  return (
    <Row className="main-board">
      <Col
        className="main-board-cl-left"
        style={{ minHeight: "100vh", height: "100%" }}
      >
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <Formik
              validationSchema={validationSchema}
              onSubmit={handleCreateNewEvent}
              initialValues={{}}
            >
              {({ handleSubmit, handleChange, errors }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Path</Form.Label>
                    <Form.Text className="text-muted">
                      this will be your url
                    </Form.Text>
                    <Form.Control
                      type="text"
                      name="eventId"
                      onChange={handleChange}
                    />
                    <span className="validation-errors">{errors.eventId}</span>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Text className="text-muted">
                      Your Event Title
                    </Form.Text>
                    <Form.Control
                      type="text"
                      name="title"
                      onChange={handleChange}
                    />
                    <span className="validation-errors">{errors.title}</span>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Text className="text-muted">
                      Your Event Description
                    </Form.Text>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      name="description"
                      onChange={handleChange}
                    />
                    <span className="validation-errors">
                      {errors.description}
                    </span>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCreateNewEvent: (e) => {
      const payload = {
        eventId: e.eventId,
        title: e.title,
        description: e.description,
      };
      dispatch(createNewEvent(payload));
      return false;
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateEventDetailsForm);
