import React, { Fragment } from "react";
import Footer from "../../components/common/Footer";
import { Container, Row, Col } from "react-bootstrap";
import SidebarNav from "../../components/common/SidebarNav";
import BreadcrumbTop from "../../components/common/BreadcrumbTop";
import CreateEventDetailsForm from "../../components/events/create/Details";

const CreateEvent = () => {
  return (
    <Fragment>
      <section className="content-main-area">
        <Container fluid={true} className="content-main-area-fld">
          <Row className="content-left-area-rw">
            <SidebarNav />
            <Col
              xl={10}
              className="col-lg-10 col-md-12 col-sm-12 col-12 content-right-area-cl content-right-area-cl"
            >
              <BreadcrumbTop
                currentPage="Create Event"
                currentLink="/create-event"
              />
              <CreateEventDetailsForm />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Fragment>
  );
};

export default CreateEvent;
