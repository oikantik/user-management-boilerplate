import React, { Fragment } from "react";

import { Form, Button, Row, Col } from "react-bootstrap";

const FormFieldEdit = ({
  editing,
  handleChange,
  cusFieldName,
  cusFieldValue,
  cusSwitchName,
  cusSwitchValue,
  disabled,
  handleEditSingleFormField,
  handleCancelEditSingleFormField,
  setFieldValue,
  initialLabel,
  initialRequired,
}) => {
  return (
    <Fragment>
      {editing && (
        <Fragment>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Label
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name={cusFieldName}
                value={cusFieldValue}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Check
              id="custom-switch-editing"
              type="switch"
              name={cusSwitchName}
              checked={cusSwitchValue}
              label="Required"
              onChange={handleChange}
              disabled={disabled}
            />
          </Form.Group>

          <Button
            variant="primary"
            className="grn-btn"
            onClick={handleEditSingleFormField}
          >
            Submit
          </Button>
          <Button
            variant="link"
            className="grn-txt-btn"
            onClick={() => {
              setFieldValue(cusFieldName, initialLabel);
              setFieldValue(cusSwitchName, initialRequired);
              handleCancelEditSingleFormField();
            }}
          >
            Clear
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default FormFieldEdit;
