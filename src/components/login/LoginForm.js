import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { loginUser } from "../../redux/actions/login";
import Error from "../login/Error";
import Loading from "../common/Loading";

const validationSchema = Yup.object({
  password: Yup.string().required("Please enter password field"),
  email: Yup.string()
    .required("Please enter your email address")
    .email("Please enter a valid email"),
});

const LoginForm = ({ handleLogin, success, error, loading }) => {
  return (
    <Fragment>
      {error !== "" && (
        <Error
          FontAwesomeIcon={FontAwesomeIcon}
          icon={faSignInAlt}
          error={error}
        />
      )}
      {success && <Redirect to="/members" />}
      {!success && error === "" && (
        <Fragment>
          <Formik
            validationSchema={validationSchema}
            onSubmit={handleLogin}
            initialValues={{}}
          >
            {({ handleSubmit, handleChange, errors }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>EMAIL:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                  <span className="validation-errors">{errors.email}</span>
                </div>
                <div className="form-group">
                  <label>PASSWORD:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                  />
                  <span className="validation-errors">{errors.password}</span>
                </div>
                <div className="remember-forgot">
                  <div className="form-group form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                      />{" "}
                      Remember me
                    </label>
                  </div>
                  <div className="forgot">
                    <Link to="">Forgot Password ?</Link>
                  </div>
                </div>

                <Button type="submit" className="btn-block">
                  <FontAwesomeIcon
                    icon={faSignInAlt}
                    className="login-frm-icn"
                  />
                  SIGN IN
                </Button>
                <Loading show={loading} />
              </Form>
            )}
          </Formik>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (e) => {
      const payload = {
        email: e.email,
        password: e.password,
      };
      dispatch(loginUser(payload));
      return false;
    },
  };
};

const mapStateToProps = (state) => {
  return {
    success: state.login.success,
    loading: state.login.loading,
    error: state.login.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
