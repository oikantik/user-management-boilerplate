import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import {
  getMyProfile,
  loadEditProfile,
  loadViewProfile,
  updateMyProfile,
} from "../../redux/actions/profile";
import UpdateSingleProfile from "./UpdateProfile";
import ViewProfile from "./ViewProfile";

import { baseAvatarURI } from "../../config/default.json";

const LoadProfile = ({
  handleGetMyProfile,
  handleLoadEditProfile,
  handleLoadViewProfile,
  handleUpdateProfile,
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
  viewProfile,
  editProfile,
  updated,
  error,
}) => {
  useEffect(() => {
    handleGetMyProfile();
  }, [handleGetMyProfile]);
  return (
    <Fragment>
      {viewProfile ? (
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
          handleLoadEditProfile={handleLoadEditProfile}
        />
      ) : (
        <UpdateSingleProfile
          name={name}
          email={email}
          dob={dob}
          gender={gender}
          aboutMe={aboutMe}
          address={address}
          phone={phone}
          website={website}
          userRole={userRole}
          editProfile={editProfile}
          avatarUrl={avatarUrl}
          baseAvatarURI={baseAvatarURI}
          handleLoadViewProfile={handleLoadViewProfile}
          handleUpdateProfile={handleUpdateProfile}
          updated={updated}
          error={error}
        />
      )}
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetMyProfile: () => {
      dispatch(getMyProfile());
    },
    handleLoadEditProfile: () => {
      dispatch(loadEditProfile());
    },
    handleLoadViewProfile: (e) => {
      e.preventDefault();
      dispatch(loadViewProfile());
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
      dispatch(updateMyProfile(payload));
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
    viewProfile,
    editProfile,
    updated,
    error,
  } = state.profile;
  return {
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
    viewProfile,
    editProfile,
    updated,
    error,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoadProfile);
