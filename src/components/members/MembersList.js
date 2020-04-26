import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import MembersTable from "./MembersTable";

const MembersList = ({ count }) => {
  return (
    <Row className="main-board members-info-area">
      <Col
        xl={12}
        className="col-lg-12 col-md-12 col-sm-12 col-12 main-board-cl-left members-info-area-cl"
      >
        <Row className="members-data-rw ">
          <Col
            xl={12}
            className="col-lg-12 col-md-12 col-sm-12 col-12 members-data-cl"
            style={{ height: "100vh" }}
          >
            <div className="members-data-all">
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
                        <option value="volvo">10</option>
                        <option value="saab">20</option>
                        <option value="fiat">30</option>
                        <option value="audi">40</option>
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

              {/** <!--Table--> */}
              <MembersTable />

              {/** <!--Pagination-->  */}

              <Row className="pagi-data-rw-up ">
                <Col
                  xl={6}
                  className="col-lg-6 col-md-6 col-sm-12 col-12 pagi-data-cl-hd-lft"
                >
                  <div className="pagi-data-hd-lft">
                    <div className="show-list-pagi">
                      <span>Showing 1 to 10 of {count} entries</span>
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
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.members.count,
  };
};

export default connect(mapStateToProps)(MembersList);
