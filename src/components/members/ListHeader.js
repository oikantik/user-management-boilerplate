import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList } from "@fortawesome/free-solid-svg-icons";
const ListHeader = () => {
  return (
    <Fragment>
      <div className="members-left-txt">
        <h4>
          <FontAwesomeIcon
            size="sm"
            icon={faThList}
            style={{ marginRight: "10px" }}
          />
          Members Data
        </h4>
        <p>Table to display analytical data effectively Tables</p>
      </div>
      <Row className="members-data-rw-up ">
        <Col
          xl={6}
          className="col-lg-6 col-md-6 col-sm-12 col-12 members-data-cl-hd-lft"
        >
          <div className="members-data-hd-lft">
            <div className="show-list">
              <span>Show</span>
              <select name="text">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">50</option>
                <option value="30">100</option>
              </select>
              <span>entries</span>
            </div>
          </div>
        </Col>

        <Col
          xl={6}
          className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 members-data-cl-hd-rt"
        >
          <div className="members-data-hd-rt">
            <div className="members-filter-src">
              <input
                className="form-control"
                id="myInput"
                type="text"
                placeholder="Search.."
              />
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ListHeader;
