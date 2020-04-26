import React from "react";
import { Col, Navbar, Nav } from "react-bootstrap";
import Logo from "../../images/LOGO.png";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    return false;
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
                  <Link to="/" className="dropdown-item">
                    Manage Members
                  </Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/" className="dropdown-item">
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

export default SidebarNav;
