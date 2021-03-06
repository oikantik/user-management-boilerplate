import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import LoginForm from "../components/login/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login-frm">
      <Container fluid={true} className="login-frm-fld">
        <Container className="login-frm-cntr">
          <Row className="login-frm-rw">
            <Col
              xl={4}
              className="col-lg-5 col-md-7 col-sm-9 col-12 login-frm-cl"
            >
              <div className="login-frm-info">
                {/** Login form header starts **/}
                <div className="login-frm-hd">
                  <h2>oqtave</h2>
                </div>
                {/** Login form header ends */}
                {/** Login form begins */}
                <div className="login-frm-txt">
                  <div className="login-hd-txt">
                    <h4>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="login-frm-icn"
                        size="sm"
                      />
                      SIGN IN
                    </h4>
                    <hr />
                  </div>
                  {/** form fields begin */}
                  <LoginForm />
                  {/** form fields end */}
                  <div className="cre-acc">
                    <Link to="/register">Create an account</Link>
                  </div>
                </div>
                {/** Login form ends */}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Login;
