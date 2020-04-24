import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../components/register/RegisterForm";

const Register = () => {
  return (
    <section className="reg-frm">
      <Container fluid={true} className="reg-frm-fld">
        <Container className="reg-frm-cntr">
          <Row className="row reg-frm-rw">
            <Col
              xl={6}
              className="col-lg-7 col-md-9 col-sm-11 col-12 reg-frm-cl"
            >
              <div className="reg-frm-info">
                {/** Registration header starts */}
                <div className="reg-frm-hd">
                  <h2>oqtave</h2>
                </div>
                {/** Registration header ends */}
                <div className="reg-frm-txt">
                  {/** Registration form starts */}
                  <RegisterForm />
                  {/** Registration form ends */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Register;
