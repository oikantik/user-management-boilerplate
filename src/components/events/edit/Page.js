import React, { Fragment, useState } from "react";
import { Form, Button, Table, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";

import FormFieldEdit from "./FormFieldEdit";

const EditEventPageForm = ({
  editorId,
  loading,
  handleShowEditEventFormFields,
  editingFormFields,
  handleCancelEditFormFields,
  updated,
  formFields,
  handleEditEventFormFields,
}) => {
  const setToFalse = (...theArgs) => {
    theArgs.map((functions) => functions(false));
  };

  const [showEditNameField, setShowEditNameField] = useState(false);
  const [showEditPhoneField, setShowEditPhoneField] = useState(false);
  const [showEditNoteField, setShowEditNoteField] = useState(false);
  const [showEditEmailField, setShowEditEmailField] = useState(false);
  const handleShowEditNameField = () => {
    setShowEditNameField(true);
    setToFalse(
      setShowEditEmailField,
      setShowEditNoteField,
      setShowEditPhoneField
    );
  };

  const handleShowEditPhoneField = () => {
    setShowEditPhoneField(true);
    setToFalse(
      setShowEditEmailField,
      setShowEditNoteField,
      setShowEditNameField
    );
  };

  const handleShowEditNoteField = () => {
    setShowEditNoteField(true);
    setToFalse(
      setShowEditEmailField,
      setShowEditNameField,
      setShowEditPhoneField
    );
  };

  const handleShowEditEmailField = () => {
    setShowEditEmailField(true);
    setToFalse(
      setShowEditNameField,
      setShowEditNoteField,
      setShowEditPhoneField
    );
  };

  const handleEditSingleFormField = () => {
    setToFalse(
      setShowEditNameField,
      setShowEditEmailField,
      setShowEditNoteField,
      setShowEditPhoneField
    );
  };

  const handleCancelEditSingleFormField = () => {
    setToFalse(
      setShowEditNameField,
      setShowEditEmailField,
      setShowEditNoteField,
      setShowEditPhoneField
    );
  };
  return (
    <Fragment>
      <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>
            Form Fields
            {!editingFormFields && (
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
                      handleShowEditEventFormFields(editorId);
                    }}
                    disabled={loading}
                  >
                    Edit
                  </Button>
                </Col>
              </Row>
            )}
          </Card.Title>

          {editingFormFields && !loading && (
            <div>
              <Formik
                onSubmit={handleEditEventFormFields}
                initialValues={{
                  editorId,
                  cusNameLabel: formFields.name.label,
                  cusNameShow: formFields.name.isShown,
                  cusNameRequired: formFields.name.isRequired,
                  cusPhoneLabel: formFields.phone.label,
                  cusPhoneShow: formFields.phone.isShown,
                  cusPhoneRequired: formFields.phone.isRequired,
                  cusNoteLabel: formFields.note.label,
                  cusNoteShow: formFields.note.isShown,
                  cusNoteRequired: formFields.note.isRequired,
                  cusEmailLabel: formFields.email.label,
                  cusEmailShow: true,
                  cusEmailRequired: true,
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  setFieldValue,
                  errors,
                }) => (
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
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>{values.cusNameLabel}</td>
                          <td>
                            <Form.Check
                              id="custom-switch-name"
                              type="switch"
                              name="cusNameShow"
                              label=""
                              onChange={handleChange}
                              checked={values.cusNameShow}
                            />
                          </td>

                          <td>
                            {!showEditNameField && (
                              <Button
                                variant="link"
                                className="grn-txt-btn"
                                disabled={loading}
                                onClick={handleShowEditNameField}
                              >
                                <FontAwesomeIcon
                                  icon={faPencilAlt}
                                  style={{
                                    marginRight: "10px",
                                    marginLeft: "2px",
                                  }}
                                />
                                Edit
                              </Button>
                            )}
                            <FormFieldEdit
                              editing={showEditNameField}
                              handleChange={handleChange}
                              cusFieldName="cusNameLabel"
                              cusFieldValue={values.cusNameLabel}
                              cusSwitchName="cusNameRequired"
                              cusSwitchValue={values.cusNameRequired}
                              handleEditSingleFormField={
                                handleEditSingleFormField
                              }
                              handleCancelEditSingleFormField={
                                handleCancelEditSingleFormField
                              }
                              disabled={false}
                              setFieldValue={setFieldValue}
                              initialLabel={formFields.name.label}
                              initialRequired={formFields.name.isRequired}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>{values.cusPhoneLabel}</td>
                          <td>
                            <Form.Check
                              id="custom-switch-phone"
                              type="switch"
                              name="cusPhoneShow"
                              label=""
                              onChange={handleChange}
                              checked={values.cusPhoneShow}
                            />
                          </td>

                          <td>
                            {!showEditPhoneField && (
                              <Button
                                variant="link"
                                className="grn-txt-btn"
                                disabled={loading}
                                onClick={handleShowEditPhoneField}
                              >
                                <FontAwesomeIcon
                                  icon={faPencilAlt}
                                  style={{
                                    marginRight: "10px",
                                    marginLeft: "2px",
                                  }}
                                />
                                Edit
                              </Button>
                            )}
                            <FormFieldEdit
                              editing={showEditPhoneField}
                              handleChange={handleChange}
                              cusFieldName="cusPhoneLabel"
                              cusFieldValue={values.cusPhoneLabel}
                              cusSwitchName="cusPhoneRequired"
                              cusSwitchValue={values.cusPhoneRequired}
                              handleEditSingleFormField={
                                handleEditSingleFormField
                              }
                              handleCancelEditSingleFormField={
                                handleCancelEditSingleFormField
                              }
                              disabled={false}
                              setFieldValue={setFieldValue}
                              initialLabel={formFields.phone.label}
                              initialRequired={formFields.phone.isRequired}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>{values.cusNoteLabel}</td>
                          <td>
                            <Form.Check
                              id="custom-switch-note"
                              type="switch"
                              name="cusNoteShow"
                              label=""
                              onChange={handleChange}
                              checked={values.cusNoteShow}
                            />
                          </td>

                          <td>
                            {!showEditNoteField && (
                              <Button
                                variant="link"
                                className="grn-txt-btn"
                                disabled={loading}
                                onClick={handleShowEditNoteField}
                              >
                                <FontAwesomeIcon
                                  icon={faPencilAlt}
                                  style={{
                                    marginRight: "10px",
                                    marginLeft: "2px",
                                  }}
                                />
                                Edit
                              </Button>
                            )}
                            <FormFieldEdit
                              editing={showEditNoteField}
                              handleChange={handleChange}
                              cusFieldName="cusNoteLabel"
                              cusFieldValue={values.cusNoteLabel}
                              cusSwitchName="cusNoteRequired"
                              cusSwitchValue={values.cusNoteRequired}
                              handleEditSingleFormField={
                                handleEditSingleFormField
                              }
                              handleCancelEditSingleFormField={
                                handleCancelEditSingleFormField
                              }
                              disabled={false}
                              setFieldValue={setFieldValue}
                              initialLabel={formFields.note.label}
                              initialRequired={formFields.note.isRequired}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>{values.cusEmailLabel}</td>
                          <td>
                            <Form.Check
                              id="custom-switch-email"
                              type="switch"
                              name="cusEmailShow"
                              label=""
                              disabled={true}
                              onChange={handleChange}
                              checked={values.cusEmailShow}
                            />
                          </td>

                          <td>
                            {!showEditEmailField && (
                              <Button
                                variant="link"
                                className="grn-txt-btn"
                                disabled={loading}
                                onClick={handleShowEditEmailField}
                              >
                                <FontAwesomeIcon
                                  icon={faPencilAlt}
                                  style={{
                                    marginRight: "10px",
                                    marginLeft: "2px",
                                  }}
                                />
                                Edit
                              </Button>
                            )}
                            <FormFieldEdit
                              editing={showEditEmailField}
                              handleChange={handleChange}
                              cusFieldName="cusEmailLabel"
                              cusFieldValue={values.cusEmailLabel}
                              cusSwitchName="cusEmailRequired"
                              cusSwitchValue={values.cusEmailRequired}
                              handleEditSingleFormField={
                                handleEditSingleFormField
                              }
                              handleCancelEditSingleFormField={
                                handleCancelEditSingleFormField
                              }
                              disabled={true}
                              setFieldValue={setFieldValue}
                              initialLabel={formFields.email.label}
                              initialRequired={formFields.email.isRequired}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>

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
                      className="grn-txt-btn"
                      disabled={loading}
                      onClick={() => {
                        handleCancelEditSingleFormField();
                        handleCancelEditFormFields();
                      }}
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

export default EditEventPageForm;
