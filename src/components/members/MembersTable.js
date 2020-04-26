import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
  faPencilAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { getMembers } from "../../redux/actions/members";
import { connect } from "react-redux";

const MembersTable = ({ handleGetMembersList }) => {
  useEffect(() => {
    handleGetMembersList();
  });
  return (
    <Row className="members-table-rw">
      <Col
        xl={12}
        className="col-lg-12 col-md12 col-sm-12 col-12 members-table-cl"
      >
        <div className="members-table">
          <table className="table table-bordered">
            <thead>
              <tr className="list-option">
                <th className="list-option-nm">
                  <p>Name</p>
                  <p className="updown">
                    <Link to="">
                      <FontAwesomeIcon
                        icon={faLongArrowAltUp}
                        style={{
                          marginRight: "2px",
                          marginLeft: "2px",
                        }}
                      />
                    </Link>
                    <Link to="">
                      <FontAwesomeIcon
                        icon={faLongArrowAltDown}
                        style={{
                          marginRight: "2px",
                          marginLeft: "2px",
                        }}
                      />
                    </Link>
                  </p>
                </th>

                <th className="list-option-ps">
                  <p>User Role</p>
                  <p className="updown">
                    <Link to="">
                      <FontAwesomeIcon
                        icon={faLongArrowAltUp}
                        style={{
                          marginRight: "2px",
                          marginLeft: "2px",
                        }}
                      />
                    </Link>
                    <Link to="">
                      <FontAwesomeIcon
                        icon={faLongArrowAltDown}
                        style={{
                          marginRight: "2px",
                          marginLeft: "2px",
                        }}
                      />
                    </Link>
                  </p>
                </th>

                <th className="list-option-ed">
                  <p>Edit</p>
                </th>

                <th className="list-option-de">
                  <p>Delete</p>
                </th>
              </tr>
            </thead>
            <tbody id="myTable" className="mytable">
              <tr>
                <td>Airi Satou</td>
                <td>Administrator</td>
                <td className="icon">
                  <Link to="">
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      style={{
                        marginRight: "10px",
                        marginLeft: "2px",
                      }}
                    />
                    Edit
                  </Link>
                </td>
                <td className="icon">
                  <Link to="">
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{
                        marginRight: "10px",
                        marginLeft: "2px",
                        color: "red",
                      }}
                    />
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetMembersList: () => {
      dispatch(getMembers());
    },
  };
};

export default connect(null, mapDispatchToProps)(MembersTable);
