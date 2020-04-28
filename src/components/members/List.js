import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import Table from "./Table";
import ListHeader from "./ListHeader";
import ListFooter from "./ListFooter";
import ViewProfile from "./ViewProfile";
import UpdateProfile from "./UpdateProfile";
import {
  getMembers,
  editMemberProfile,
  setMemberProfile,
  getMemberProfile,
} from "../../redux/actions/members";

const MembersList = ({
  loading,
  handleMembersLinkClick,
  count,
  name,
  email,
  dob,
  gender,
  aboutMe,
  address,
  phone,
  website,
  userRole,
  handleLoadEditProfile,
  getCurrentProfileSuccess,
  editCurrentProfileSuccess,
  viewCurrentProfile,
  editCurrentProfile,
  handleUpdateProfile,
  handleLoadViewProfile,
  updatedCurrentProfile,
}) => {
  return (
    <Row className="main-board members-info-area">
      <Col
        xl={12}
        className="col-lg-12 col-md-12 col-sm-12 col-12 main-board-cl-left members-info-area-cl"
      >
        <Row className="members-data-rw ">
          <Col
            xl={12}
            className="col-lg-12 col-md-12 col-sm-12 col-12 members-data-cl"
            style={{ height: "auto", minHeight: "100vh" }}
          >
            {viewCurrentProfile && (
              <ViewProfile
                name={name}
                email={email}
                dob={dob}
                gender={gender}
                aboutMe={aboutMe}
                address={address}
                phone={phone}
                website={website}
                userRole={userRole}
                handleLoadEditProfile={handleLoadEditProfile}
                handleMembersLinkClick={handleMembersLinkClick}
              />
            )}
            {!viewCurrentProfile && editCurrentProfile && (
              <UpdateProfile
                name={name}
                email={email}
                dob={dob}
                gender={gender}
                aboutMe={aboutMe}
                address={address}
                phone={phone}
                website={website}
                userRole={userRole}
                updated={updatedCurrentProfile}
                handleLoadViewProfile={handleLoadViewProfile}
                handleMembersLinkClick={handleMembersLinkClick}
                handleUpdateProfile={handleUpdateProfile}
              />
            )}
            {!viewCurrentProfile && !editCurrentProfile && (
              <div className="members-data-all">
                <ListHeader />
                <Table />
                <ListFooter count={count} />
              </div>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMembersLinkClick: () => {
      dispatch(getMembers());
    },
    handleLoadEditProfile: (email) => {
      dispatch(editMemberProfile(email));
    },
    handleLoadViewProfile: (e, email) => {
      e.preventDefault();
      dispatch(getMemberProfile(email));
      return false;
    },
    handleUpdateProfile: (e) => {
      const payload = {
        name: e.name,
        email: e.email,
        dob: e.dob,
        gender: e.gender,
        aboutMe: e.aboutMe,
        website: e.website,
        phone: e.phone,
        userRole: e.userRole,
        address: e.address,
      };
      dispatch(setMemberProfile(payload));
      return false;
    },
  };
};

const mapStateToProps = (state) => {
  const {
    name,
    email,
    dob,
    gender,
    aboutMe,
    address,
    phone,
    website,
    userRole,
  } = state.members.currentMember;
  const {
    getCurrentProfileSuccess,
    editCurrentProfileSuccess,
    viewCurrentProfile,
    editCurrentProfile,
    updatedCurrentProfile,
    count,
    loading,
  } = state.members;
  return {
    loading,
    count,
    name,
    email,
    dob,
    gender,
    aboutMe,
    address,
    phone,
    website,
    userRole,
    getCurrentProfileSuccess,
    editCurrentProfileSuccess,
    viewCurrentProfile,
    editCurrentProfile,
    updatedCurrentProfile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
