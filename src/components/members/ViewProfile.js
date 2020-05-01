import React, { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewProfile = ({
  handleLoadEditProfile,
  handleMembersLinkClick,
  name,
  email,
  dob,
  gender,
  aboutMe,
  address,
  phone,
  website,
  userRole,
  avatarUrl,
  baseAvatarURI,
  temporaryAvatar,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
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
              <Row className="pro-up">
                <Col
                  xl={3}
                  className="col-lg-3 col-md-3 col-sm-11 col-12 pro-up-cl"
                >
                  <div className="pro-img">
                    <img
                      src={
                        avatarUrl === "" || typeof avatarUrl === "undefined"
                          ? temporaryAvatar
                          : baseAvatarURI + "/" + avatarUrl
                      }
                      alt="avatar"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pro-nm-info">
                    <h5>{name}</h5>
                    <p>{userRole}</p>
                  </div>
                </Col>

                <Col
                  xl={9}
                  className="col-lg-9 col-md-9 col-sm-12 col-12 pro-up-cl-about"
                >
                  <div className="pro-about">
                    <h5>About Me</h5>
                    <p>{aboutMe ? aboutMe : <span>Add some text here</span>}</p>
                  </div>
                </Col>
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
                        <p>{name}</p>
                      </div>
                    </div>

                    {dob && (
                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Date of Birth</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>{dob}</p>
                        </div>
                      </div>
                    )}

                    {gender && (
                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Gender</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>{gender}</p>
                        </div>
                      </div>
                    )}

                    {address && (
                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Address</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>{address}</p>
                        </div>
                      </div>
                    )}

                    {phone && (
                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Phone</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>{phone}</p>
                        </div>
                      </div>
                    )}
                    <div className="pro-un-info-txt">
                      <div className="pro-un-info-txt-left">
                        <p>Email</p>
                        <span>:</span>
                      </div>
                      <div className="pro-un-info-txt-right">
                        <p>{email}</p>
                      </div>
                    </div>
                    {website && (
                      <div className="pro-un-info-txt">
                        <div className="pro-un-info-txt-left">
                          <p>Website</p>
                          <span>:</span>
                        </div>
                        <div className="pro-un-info-txt-right">
                          <p>{website}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Col>
              </Row>

              <Button
                variant="primary"
                style={{ float: "right" }}
                onClick={(e) => handleLoadEditProfile(e, email)}
                className="btn-block reg-btn-ftr"
              >
                Edit Profile
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ViewProfile;
