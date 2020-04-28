import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BreadcrumbTop = ({ currentPage, currentLink }) => {
  return (
    <div className="row header-dashboard-rw">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 header-dashboard-cl">
        <div className="header-dashboard">
          <div className="header-lft-dash">
            <p className="dash-menu-left">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                style={{ marginRight: "10px" }}
              />
              <Link to="" className="breadcrumbs">
                Dashboard
              </Link>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ marginLeft: "5px", marginRight: "5px" }}
              />
              <Link to={currentLink} className="breadcrumbs">
                {currentPage}
              </Link>
            </p>
          </div>
        </div>

        <div className="header-dashboard-cl-hr">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbTop;
