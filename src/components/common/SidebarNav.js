import React from "react";
import { Col } from "react-bootstrap";
import Logo from "../../images/LOGO.png";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <Col
      xl={2}
      className="col-lg-2 col-md-12 col-sm-12 col-12 content-left-area-cl pagination-pg"
    >
      <div className="content-left-profile">
        <div className="left-profile-img">
          <Link to="">
            <img src={Logo} alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="navbar navbar-expand-lg">
          {/** <!-- Toggler/collapsibe Button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNav"
          >
            <i className="fa fa-bars"></i>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="left-profile-dashboard collapse navbar-collapse"
            id="myNav"
          >
            <div className="nav-info">
              <div className="das-das">
                <Link to="">
                  <h5>Dashboard</h5>
                </Link>{" "}
                <br />
              </div>
              <div className="das-hr">
                <hr />
              </div>

              <ul className="navbar-nav das-nav-ul">
                <li className="nav-item">
                  <Link to="" className="dropdown-item">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="" className="dropdown-item">
                    Manage Members
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="dropdown-item">
                    My Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="dropdown-item">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SidebarNav;
