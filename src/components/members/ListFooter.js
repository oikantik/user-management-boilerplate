import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListFooter = ({ count }) => {
  return (
    <Row className="pagi-data-rw-up ">
      <Col
        xl={6}
        className="col-lg-6 col-md-6 col-sm-12 col-12 pagi-data-cl-hd-lft"
      >
        <div className="pagi-data-hd-lft">
          <div className="show-list-pagi">
            {count > 1 ? (
              <span>{count} entries found</span>
            ) : (
              <span>{count} entry found</span>
            )}
          </div>
        </div>
      </Col>

      <Col
        xl={6}
        className="col-lg-6 col-md-6 col-sm-12 col-12 pagi-data-cl-hd-rt"
      >
        <div className="pagi-data-hd-rt">
          <div className="pagi-filter-src">
            <ul className="pagination">
              <li className="page-item">
                <Link to="" className="page-link">
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link to="" className="page-link">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link to="" className="page-link" href="#">
                  2
                </Link>
              </li>

              <li className="page-item">
                <Link to="" className="page-link" href="#">
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ListFooter;
