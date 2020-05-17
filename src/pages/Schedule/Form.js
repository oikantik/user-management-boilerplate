import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
const ShowForm = ({ formFields }) => {
  return (
    <Fragment>
      <Form>
        {formFields &&
          formFields.map((x, y) => (
            <Fragment key={y}>
              {console.log(x.label)}
              {x.isShown && (
                <Form.Group>
                  {console.log(x)}
                  <Form.Label>{x.label}</Form.Label>
                  <Form.Control
                    type={x.fieldType}
                    name={x.fieldName}
                    placeholder={x.label}
                    required={x.isRequired}
                  />
                </Form.Group>
              )}
            </Fragment>
          ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default ShowForm;
