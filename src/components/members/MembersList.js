import React from "react";

const MembersList = () => {
  return (
    <div className="row main-board members-info-area">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 main-board-cl-left members-info-area-cl">
        <div className="row members-info-area-cl-rw">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 members-info-cl">
            <div className="members-left-txt">
              <h4>
                <span>
                  <i className="fa fa-th-list"></i>
                </span>
                Members Data
              </h4>
              <p>Table to display analytical data effectively Tables</p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 members-info-cl">
            <div className="members-right-txt">
              <p>
                <i className="fa fa-home"></i>
                <span>/</span> Manage Members <span>/</span>{" "}
                <a href="" title="">
                  Members Data
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row members-data-rw ">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 members-data-cl">
            <div className="members-data-all">
              <div className="row members-data-rw-up ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 members-data-cl-hd-lft">
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
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 members-data-cl-hd-rt">
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
                </div>
              </div>

              {/** <!--Table--> */}

              <div className="row members-table-rw">
                <div className="col-xl-12 col-lg-12 col-md12 col-sm-12 col-12 members-table-cl">
                  <div className="members-table">
                    <table className="table table-bordered">
                      <thead>
                        <tr className="list-option">
                          <th className="list-option-nm">
                            <p>Name</p>
                            <p className="updown">
                              <a href="" title="">
                                <i className="fa fa-long-arrow-up"></i>
                              </a>
                              <a href="" title="">
                                <i className="fa fa-long-arrow-down"></i>
                              </a>
                            </p>
                          </th>

                          <th className="list-option-ps">
                            <p>Position</p>
                            <p className="updown">
                              <a href="" title="">
                                <i className="fa fa-long-arrow-up"></i>
                              </a>
                              <a href="" title="">
                                <i className="fa fa-long-arrow-down"></i>
                              </a>
                            </p>
                          </th>

                          <th className="list-option-ed">
                            <p>Edit</p>
                            <p className="updown">
                              <a href="" title="">
                                <i className="fa fa-long-arrow-up"></i>
                              </a>
                              <a href="" title="">
                                <i className="fa fa-long-arrow-down"></i>
                              </a>
                            </p>
                          </th>

                          <th className="list-option-vi">
                            <p>View</p>
                            <p className="updown">
                              <a href="" title="">
                                <i className="fa fa-long-arrow-up"></i>
                              </a>
                              <a href="" title="">
                                <i className="fa fa-long-arrow-down"></i>
                              </a>
                            </p>
                          </th>

                          <th className="list-option-de">
                            <p>Delete</p>
                            <p className="updown">
                              <a href="" title="">
                                <i className="fa fa-long-arrow-up"></i>
                              </a>
                              <a href="" title="">
                                <i className="fa fa-long-arrow-down"></i>
                              </a>
                            </p>
                          </th>
                        </tr>
                      </thead>
                      <tbody id="myTable" className="mytable">
                        <tr>
                          <td>Airi Satou</td>
                          <td>Accountant</td>
                          <td className="icon">
                            <a
                              href=""
                              title=""
                              data-toggle="modal"
                              data-target="#dataEdit"
                            >
                              <span>
                                <i className="fa fa-pencil"></i>
                              </span>
                              Edit
                            </a>
                          </td>
                          <td className="icon">
                            <a
                              href=""
                              title=""
                              data-toggle="modal"
                              data-target="#dataView"
                            >
                              <span>
                                <i className="fa fa-eye"></i>
                              </span>
                              View
                            </a>
                          </td>
                          <td className="icon">
                            <a href="" title="">
                              <span>
                                <i className="fa fa-times"></i>
                              </span>
                              Delete
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/** <!--Pagination-->  */}

              <div className="row pagi-data-rw-up ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pagi-data-cl-hd-lft">
                  <div className="pagi-data-hd-lft">
                    <div className="show-list-pagi">
                      <span>Showing 1 to 10 of 57 entries</span>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pagi-data-cl-hd-rt">
                  <div className="pagi-data-hd-rt">
                    <div className="pagi-filter-src">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>

                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersList;
