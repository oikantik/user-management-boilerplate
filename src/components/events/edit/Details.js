import React, { Fragment } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

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

const EditEventDetailsForm = ({
  handleShowEditEvent,
  handleEditEvent,
  editorId,
  title,
  description,
  eventId,
  loading,
  updated,
  editingDetails,
  handleCancelEditDetails,
}) => {
  return (
    <Fragment>
      <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>
            Event Title/Description
            {!editingDetails && (
              <Row className="float-right">
                {updated && (
                  <Col sm={8}>
                    <span className="grn-txt-sml-s-dt">
                      Updated Successfully
                    </span>
                  </Col>
                )}
                <Col sm={updated ? 4 : 12}>
                  <Button
                    className="float-right grn-btn"
                    onClick={() => {
                      handleShowEditEvent(editorId);
                    }}
                    disabled={loading}
                  >
                    Edit
                  </Button>
                </Col>
              </Row>
            )}
          </Card.Title>

          {editingDetails && !loading && (
            <div>
              <Formik
                validationSchema={validationSchema}
                onSubmit={handleEditEvent}
                initialValues={{ editorId, eventId, title, description }}
              >
                {({ handleSubmit, handleChange, errors, values }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Control
                        type="hidden"
                        name="editorId"
                        onChange={handleChange}
                        value={values.editorId}
                      />
                      <span className="validation-errors">
                        {errors.editorId}
                      </span>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Path</Form.Label>
                      <Form.Text className="text-muted">
                        this will be your url
                      </Form.Text>
                      <Form.Control
                        type="text"
                        name="eventId"
                        onChange={handleChange}
                        value={values.eventId}
                      />
                      <span className="validation-errors">
                        {errors.eventId}
                      </span>
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
                        value={values.title}
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
                        value={values.description}
                      />
                      <span className="validation-errors">
                        {errors.description}
                      </span>
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="grn-btn"
                      disabled={loading}
                    >
                      Save
                    </Button>
                    <Button
                      variant="link"
                      onClick={handleCancelEditDetails}
                      className="grn-txt-btn"
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default EditEventDetailsForm;
