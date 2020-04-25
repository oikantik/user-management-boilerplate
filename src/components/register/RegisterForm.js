import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUser,
  faEnvelope,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

import { registerUser } from "../../redux/actions/register";
import Loading from "../common/Loading";
import Success from "./Success";
import Error from "./Error";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Please enter name field"),
  password: Yup.string().required("Please enter password field"),
  email: Yup.string()
    .required("Please enter your email address")
    .email("Please enter a valid email"),
  dob: Yup.date().required("Please enter your date of birth"),
  gender: Yup.string()
    .oneOf(["Male", "Female", "Other"], "Invalid Gender")
    .required("Please enter gender"),
});

const RegisterForm = ({ handleRegister, loading, success, error, isAuth }) => {
  return (
    <Fragment>
      {error !== "" && (
        <Error
          FontAwesomeIcon={FontAwesomeIcon}
          icon={faSignInAlt}
          error={error}
        />
      )}
      {isAuth && <Redirect to="/members" />}
      {success && (
        <Success FontAwesomeIcon={FontAwesomeIcon} icon={faSignInAlt} />
      )}
      {!success && error === "" && (
        <Fragment>
          <Formik
            validationSchema={validationSchema}
            onSubmit={handleRegister}
            initialValues={{}}
          >
            {({ handleSubmit, handleChange, errors }) => (
              <Form onSubmit={handleSubmit}>
                <div className="reg-account">
                  <div className="form-group">
                    <label>Account</label>
                    <div className="reg-frm-icn">
                      <input
                        type="name"
                        className="form-control acc"
                        id="nm"
                        placeholder="Full Name"
                        name="fullName"
                        onChange={handleChange}
                      />

                      <span className="reg-frm-icn-on">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <span className="validation-errors">
                        {errors.fullName}
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="reg-frm-icn">
                      <input
                        type="email"
                        className="form-control acc"
                        id="email"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                      />
                      <span className="reg-frm-icn-on">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <span className="validation-errors">{errors.email}</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="reg-frm-icn">
                      <input
                        type="text"
                        className="form-control acc"
                        id="ps"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                      />
                      <span className="reg-frm-icn-on">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                      <span className="validation-errors">
                        {errors.password}
                      </span>
                    </div>
                  </div>

                  <div className="row date-name">
                    <Col className="fnm">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        className="form-control date"
                        id="dt"
                        placeholder=""
                        name="dob"
                        onChange={handleChange}
                      />
                      <span className="validation-errors">{errors.dob}</span>
                    </Col>
                    <Col className="lnm">
                      <div className="form-group">
                        <label>Gender</label>
                        <select
                          className="form-control"
                          id="sel1"
                          name="gender"
                          onChange={handleChange}
                        >
                          <option>--</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                        <span className="validation-errors">
                          {errors.gender}
                        </span>
                      </div>
                    </Col>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="btn-block reg-btn-ftr"
                  disabled={loading}
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="reg-frm-icn" />
                  REGISTER
                </Button>
                <Loading show={loading} />
              </Form>
            )}
          </Formik>
          <div className="rec-log">
            <Link to="/">
              <FontAwesomeIcon icon={faSignInAlt} className="reg-frm-icn" />{" "}
              SIGN IN
            </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRegister: (e) => {
      const payload = {
        name: e.fullName,
        email: e.email,
        password: e.password,
        dob: e.dob,
        gender: e.gender,
      };
      dispatch(registerUser(payload));
      return false;
    },
  };
};

const mapStateToProps = (state) => {
  return {
    success: state.register.success,
    loading: state.register.loading,
    error: state.register.error,
    isAuth: localStorage.getItem("token") ? true : false,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
