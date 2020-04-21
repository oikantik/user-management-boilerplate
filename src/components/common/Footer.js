import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-area">
      <Container fluid={true} className="footer-area-fld">
        <div className="footer-txt">
          <small>
            Copyright © 2020 -{" "}
            <a href="" title="">
              Oqtave
            </a>{" "}
            - All Rights Reserved
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
