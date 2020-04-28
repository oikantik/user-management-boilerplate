import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
  faPencilAlt,
  faTimes,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import {
  getMembers,
  getMemberProfile,
  editMemberProfile,
} from "../../redux/actions/members";
import { connect } from "react-redux";

const MembersTable = ({
  handleGetMembersList,
  handleGetMemberProfile,
  handleLoadEditProfile,
  list,
  count,
}) => {
  useEffect(() => {
    handleGetMembersList();
  }, [handleGetMembersList]);
  return (
    <Row className="members-table-rw">
      <Col
        xl={12}
        className="col-lg-12 col-md12 col-sm-12 col-12 members-table-cl"
      >
        <div className="members-table">
          {count > 0 ? (
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
                  <th className="list-option-vi">
                    <p>View</p>
                  </th>
                  <th className="list-option-de">
                    <p>Delete</p>
                  </th>
                </tr>
              </thead>
              {list.map((member) => (
                <tbody id="myTable" className="mytable" key={uuidv4()}>
                  <tr>
                    <td>{member.name}</td>
                    <td>{member.userRole}</td>
                    <td className="icon">
                      <Link
                        to=""
                        onClick={(e) => handleLoadEditProfile(e, member.email)}
                      >
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
                      <Link
                        to=""
                        onClick={(e) => handleGetMemberProfile(e, member.email)}
                      >
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{
                            marginRight: "10px",
                            marginLeft: "2px",
                          }}
                        />
                        View
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
              ))}
            </table>
          ) : (
            <p>Nothing found</p>
          )}
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
    handleGetMemberProfile: (e, email) => {
      e.preventDefault();
      dispatch(getMemberProfile(email));
      return false;
    },
    handleLoadEditProfile: (e, email) => {
      e.preventDefault();
      dispatch(editMemberProfile(email));
      return false;
    },
  };
};

const mapStateToProps = (state) => {
  return {
    list: state.members.list,
    count: state.members.count,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MembersTable);
