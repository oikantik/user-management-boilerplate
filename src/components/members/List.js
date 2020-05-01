import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import Table from "./Table";
import ListHeader from "./ListHeader";
import ListFooter from "./ListFooter";
import ViewProfile from "./ViewProfile";
import UpdateProfile from "./UpdateProfile";
import temporaryAvatar from "../../images/male-avatar1.png";
import { baseAvatarURI } from "../../config/default.json";

import {
  getMembers,
  editMemberProfile,
  setMemberProfile,
  getMemberProfile,
} from "../../redux/actions/members";

const MembersList = ({
  list,
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
  avatarUrl,
  getCurrentProfileSuccess,
  editCurrentProfileSuccess,
  viewCurrentProfile,
  editCurrentProfile,
  updatedCurrentProfile,
  handleGetMembersList,
  handleGetMemberProfile,
  handleMembersLinkClick,
  handleLoadEditProfile,
  handleUpdateProfile,
  handleLoadViewProfile,
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
                avatarUrl={avatarUrl}
                baseAvatarURI={baseAvatarURI}
                temporaryAvatar={temporaryAvatar}
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
                avatarUrl={avatarUrl}
                baseAvatarURI={baseAvatarURI}
                updated={updatedCurrentProfile}
                handleLoadViewProfile={handleLoadViewProfile}
                temporaryAvatar={temporaryAvatar}
                handleMembersLinkClick={handleMembersLinkClick}
                handleUpdateProfile={handleUpdateProfile}
              />
            )}
            {!viewCurrentProfile && !editCurrentProfile && (
              <div className="members-data-all">
                <ListHeader />
                <Table
                  handleGetMembersList={handleGetMembersList}
                  handleGetMemberProfile={handleGetMemberProfile}
                  handleLoadEditProfile={handleLoadEditProfile}
                  list={list}
                  count={count}
                />
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
    handleGetMembersList: () => {
      dispatch(getMembers());
    },
    handleGetMemberProfile: (e, email) => {
      e.preventDefault();
      dispatch(getMemberProfile(email));
      return false;
    },
    handleLoadEditProfile: (e, email) => {
      e.preventDefault();
      dispatch(editMemberProfile(email));
      return false;
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
        avatar: e.avatar,
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
    avatarUrl,
  } = state.members.currentMember;
  const {
    getCurrentProfileSuccess,
    editCurrentProfileSuccess,
    viewCurrentProfile,
    editCurrentProfile,
    updatedCurrentProfile,
    count,
    loading,
    list,
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
    avatarUrl,
    getCurrentProfileSuccess,
    editCurrentProfileSuccess,
    viewCurrentProfile,
    editCurrentProfile,
    updatedCurrentProfile,
    list,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
