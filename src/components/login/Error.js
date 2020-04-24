import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetLogin } from "../../redux/actions/login";

const Error = ({ handleClickback, error, FontAwesomeIcon, icon }) => {
  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>{error}</div>
      <div className="rec-log">
        <Link to="/" onClick={handleClickback}>
          <FontAwesomeIcon icon={icon} className="reg-frm-icn" /> GO BACK
        </Link>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickback: () => {
      dispatch(resetLogin());
    },
  };
};

export default connect(null, mapDispatchToProps)(Error);
