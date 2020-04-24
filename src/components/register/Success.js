import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Success = ({ FontAwesomeIcon, icon }) => {
  return (
    <Fragment>
      <div style={{ textAlign: "center", paddingBottom: "15px" }}>
        Registration Successful, you can now signin below
      </div>
      <div className="rec-log">
        <Link to="/">
          <FontAwesomeIcon icon={icon} className="reg-frm-icn" /> SIGN IN
        </Link>
      </div>
    </Fragment>
  );
};

export default Success;
