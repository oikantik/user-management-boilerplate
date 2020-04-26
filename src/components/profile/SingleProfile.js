import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import {
  getMyProfile,
  loadEditProfile,
  loadViewProfile,
} from "../../redux/actions/profile";
import UpdateSingleProfile from "./UpdateSingleProfile";
import ViewProfile from "./ViewProfile";

const SingleProfile = ({
  handleGetMyProfile,
  handleLoadEditProfile,
  handleLoadViewProfile,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProfile);
