import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/login";

const LoginForm = ({ handleLogin }) => {
  return (
    <Form onSubmit={handleLogin}>
      <div className="form-group">
        <label>EMAIL:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div className="form-group">
        <label>PASSWORD:</label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="password"
        />
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
        <FontAwesomeIcon icon={faSignInAlt} className="login-frm-icn" />
        SIGN IN
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (e) => {
      e.preventDefault();
      const payload = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      dispatch(loginUser(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
