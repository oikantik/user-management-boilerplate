import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetRegister } from "../../redux/actions/register";

const Error = ({ handleClickback, error, FontAwesomeIcon, icon }) => {
  return (
    <Fragment>
      <div style={{ textAlign: "center", paddingBottom: "15px" }}>{error}</div>
      <div className="rec-log">
        <Link to="/register" onClick={handleClickback}>
          <FontAwesomeIcon icon={icon} className="reg-frm-icn" /> GO BACK
        </Link>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickback: () => {
      dispatch(resetRegister());
    },
  };
};

export default connect(null, mapDispatchToProps)(Error);
