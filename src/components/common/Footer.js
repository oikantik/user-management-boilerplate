import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area">
      <Container fluid={true} className="footer-area-fld">
        <div className="footer-txt">
          <small>
            Copyright © 2020 - <Link to="">Oqtave</Link> - All Rights Reserved
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
