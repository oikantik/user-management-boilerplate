import React, { Fragment } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Please enter name field"),
  dob: Yup.date().required("Please enter your date of birth"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid Gender")
    .required("Please enter gender"),
  email: Yup.string()
    .required("Please enter your email address")
    .email("Please enter a valid email"),
});

const UpdateSingleProfile = ({
  name,
  email,
  dob,
  gender,
  aboutMe,
  address,
  phone,
  website,
  userRole,
}) => {
  return (
    <Fragment>
      <Row className="main-board profile-info-area">
        <Col
          xl={12}
          className="col-lg-12 col-md-12 col-sm-12 col-12 main-board-cl-left profile-info-area-cl"
        >
          <Row className="profile-info-area-txt-rw">
            <Col
              xl={7}
              className="col-lg-8 col-md-9 col-sm-11 col-12 profile-info-area-txt"
            >
              <div className="pro-info-text">
                <Formik
                  validationSchema={validationSchema}
                  onSubmit={() => console.log("form submitted")}
                  initialValues={{ fullName: name, email, gender }}
                >
                  {({ handleSubmit, handleChange, errors }) => (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="name"
                          name="fullName"
                          onChange={handleChange}
                          value={name}
                        />
                        <span className="validation-errors">
                          {errors.fullName}
                        </span>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={handleChange}
                          value={email}
                        />
                        <span className="validation-errors">
                          {errors.email}
                        </span>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          name="dob"
                          onChange={handleChange}
                          value={dob}
                        />
                        <span className="validation-errors">{errors.dob}</span>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                          as="select"
                          name="gender"
                          onChange={handleChange}
                          value={gender}
                        >
                          <option value="--">--</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Form.Control>
                        <span className="validation-errors">
                          {errors.gender}
                        </span>
                      </Form.Group>
                      <Button type="submit" className="btn-block reg-btn-ftr">
                        Update Profile
                      </Button>
                    </Form>
                  )}
                </Formik>
                <div style={{ textAlign: "center", padding: "10px" }}>
                  <Link to="">Go Back</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UpdateSingleProfile;
