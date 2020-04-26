import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import {
  getMyProfile,
  loadEditProfile,
  loadViewProfile,
  updateMyProfile,
} from "../../redux/actions/profile";
import UpdateSingleProfile from "./UpdateSingleProfile";
import ViewProfile from "./ViewProfile";

const SingleProfile = ({
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
    viewProfile,
    editProfile,
    updated,
    error,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProfile);
