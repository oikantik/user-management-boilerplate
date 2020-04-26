import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

const SingleProfile = () => {
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
                <Row className="pro-up">
                  <Col
                    xl={3}
                    className="col-lg-3 col-md-3 col-sm-11 col-12 pro-up-cl"
                  >
                    <div className="pro-img">
                      <img
                        src="images/woman-avatar.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="pro-nm-info">
                      <h5>John Doe</h5>
                      <p>Administrator</p>
                    </div>
                  </Col>

                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 pro-up-cl-about">
                    <div className="pro-about">
                      <h5>About Me</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages,
                      </p>
                    </div>
                  </div>
                </Row>
                <div className="un-hr">
                  <hr />
                </div>

                <Row className="pro-un-rw">
                  <Col
                    xl={9}
                    className="col-lg-10 col-md-11 col-sm-12 col-12 pro-un-cl-about"
                  >
                    <div className="pro-un-cl-about-info">
                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Name</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>John Doe</p>
                        </div>
                      </div>

                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Address</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>
                            70 Washington Square South, New <br />
                            York, NY 10012, United States
                          </p>
                        </div>
                      </div>

                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Phone</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>+01 888 333 444</p>
                        </div>
                      </div>

                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Email</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>jhondoe@abc.com</p>
                        </div>
                      </div>

                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Website</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>www.abc.com</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SingleProfile;
