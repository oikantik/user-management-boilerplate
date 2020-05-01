import React from "react";
import { Col, Navbar, Nav } from "react-bootstrap";
import Logo from "../../images/LOGO.png";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getMembers } from "../../redux/actions/members";
import { loadViewProfile } from "../../redux/actions/profile";
import axios from "axios";
import { logoutUserURI } from "../../config/default.json";
const SidebarNav = ({ handleMembersLinkClick, handleLoadViewProfile }) => {
  const handleLogout = async () => {
    localStorage.removeItem("token");
    try {
      axios.defaults.withCredentials = true;
      await axios.get(logoutUserURI);

      return <Redirect to="/" />;
    } catch (error) {
      return <Redirect to="/" />;
    }
  };
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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="left-profile-dashboard collapse navbar-collapse"
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
              <Nav as="ul" className="das-nav-ul">
                <Nav.Item as="li">
                  <Link to="/" className="dropdown-item">
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    to="/members"
                    className="dropdown-item"
                    onClick={handleMembersLinkClick}
                  >
                    Manage Members
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link
                    to="/my-profile"
                    className="dropdown-item"
                    onClick={handleLoadViewProfile}
                  >
                    My Profile
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/" className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </Link>
                </Nav.Item>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMembersLinkClick: () => {
      dispatch(getMembers());
    },
    handleLoadViewProfile: () => {
      dispatch(loadViewProfile());
    },
  };
};

export default connect(null, mapDispatchToProps)(SidebarNav);
