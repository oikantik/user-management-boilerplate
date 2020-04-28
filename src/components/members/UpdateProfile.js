import React, { Fragment } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Success from "./Success";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter name field"),
  dob: Yup.date().required("Please enter your date of birth"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid Gender")
    .required("Please enter gender"),
  email: Yup.string()
    .required("Please enter your email address")
    .email("Please enter a valid email"),
  userRole: Yup.string().oneOf(
    ["", "Super Administrator", "Administrator", "Coordinator", "Staff"],
    "Invalid User Role"
  ),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  address: Yup.string(),
  website: Yup.string(),
  aboutMe: Yup.string(),
});

const UpdateProfile = ({
  name,
  email,
  dob,
  gender,
  aboutMe,
  address,
  phone,
  website,
  userRole,
  updated,
  error,
  handleMembersLinkClick,
  handleLoadViewProfile,
  handleUpdateProfile,
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
                <Link
                  to="/members"
                  onClick={handleMembersLinkClick}
                  style={{
                    color: "#009587",
                    margin: "10px 10px 20px 10px",
                    display: "block",
                  }}
                >
                  Go Back
                </Link>
                {updated && <Success />}
                {!updated && !error && (
                  <Formik
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={handleUpdateProfile}
                    initialValues={{
                      name,
                      email,
                      dob,
                      gender,
                      aboutMe,
                      address,
                      phone,
                      website,
                      userRole,
                    }}
                  >
                    {({ handleSubmit, handleChange, errors, values }) => (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group>
                          <Form.Label>User Role</Form.Label>
                          <Form.Control
                            as="select"
                            name="userRole"
                            onChange={handleChange}
                            value={values.userRole}
                          >
                            <option value="">--</option>
                            <option value="Super Administrator">
                              Super Administrator
                            </option>
                            <option value="Administrator">Administrator</option>
                            <option value="Coordinator">Coordinator</option>
                            <option value="Staff">Staff</option>
                          </Form.Control>
                          <span className="validation-errors">
                            {errors.userRole}
                          </span>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="name"
                            name="fullName"
                            onChange={handleChange}
                            value={values.name}
                          />
                          <span className="validation-errors">
                            {errors.name}
                          </span>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
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
                            value={values.dob}
                          />
                          <span className="validation-errors">
                            {errors.dob}
                          </span>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Gender</Form.Label>
                          <Form.Control
                            as="select"
                            name="gender"
                            onChange={handleChange}
                            value={values.gender}
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

                        <Form.Group>
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            name="address"
                            onChange={handleChange}
                            value={values.address}
                          />
                          <span className="validation-errors">
                            {errors.address}
                          </span>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                          />
                          <span className="validation-errors">
                            {errors.phone}
                          </span>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Website</Form.Label>
                          <Form.Control
                            type="text"
                            name="website"
                            onChange={handleChange}
                            value={values.website}
                          />
                          <span className="validation-errors">
                            {errors.website}
                          </span>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>About Me</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows="3"
                            name="aboutMe"
                            value={values.aboutMe}
                            onChange={handleChange}
                          />
                          <span className="validation-errors">
                            {errors.aboutMe}
                          </span>
                        </Form.Group>
                        <Button type="submit" className="btn-block reg-btn-ftr">
                          Update Profile
                        </Button>
                      </Form>
                    )}
                  </Formik>
                )}

                <div className="rec-log">
                  <Link to="/" onClick={(e) => handleLoadViewProfile(e, email)}>
                    View Profile
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UpdateProfile;
