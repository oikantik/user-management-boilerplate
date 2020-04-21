import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BreadcrumbTop = () => {
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
              <a href="" title="">
                Dashboard
              </a>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ marginLeft: "5px", marginRight: "5px" }}
              />
              <a href="" title="">
                App Page
              </a>
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
