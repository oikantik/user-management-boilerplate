import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { getMyProfile } from "../../redux/actions/profile";
import UpdateSingleProfile from "./UpdateSingleProfile";
import ViewProfile from "./ViewProfile";

const SingleProfile = ({
  handleGetMyProfile,
  name,
  email,
  dob,
  gender,
  aboutMe,
  address,
  phone,
  website,
  userRole,
}) => {
  useEffect(() => {
    handleGetMyProfile();
  }, [handleGetMyProfile]);
  return (
    <Fragment>
      {false ? (
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProfile);
