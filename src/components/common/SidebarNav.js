import React from "react";
import { Col } from "react-bootstrap";
import Logo from "../../images/LOGO.png";

const SidebarNav = () => {
  return (
    <Col
      xl={2}
      className="col-lg-2 col-md-12 col-sm-12 col-12 content-left-area-cl pagination-pg"
    >
      <div className="content-left-profile">
        <div className="left-profile-img">
          <a href="somehere.html" title="">
            <img src={Logo} alt="" className="img-fluid" />
          </a>
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
                <a href="" title="">
                  <h5>Dashboard</h5>
                </a>{" "}
                <br />
              </div>
              <div className="das-hr">
                <hr />
              </div>

              <ul className="navbar-nav das-nav-ul">
                <li className="nav-item">
                  <a className="dropdown-item" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="profile.html">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="members.html">
                    Manage Members
                  </a>
                </li>
                <a className="dropdown-item" href="accountSettings.html">
                  Account Settings
                </a>
                <li className="nav-item">
                  <a className="dropdown-item" href="login.html">
                    Log Out
                  </a>
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
