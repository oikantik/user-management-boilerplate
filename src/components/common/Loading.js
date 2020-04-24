import React, { Fragment } from "react";

const Loading = ({ show }) => {
  return (
    <Fragment>
      {show && (
        <div className="loading-icn">
          <div className="loadingio-spinner-dual-ball-3g3844nbszf">
            <div className="ldio-yytmiul8dm">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Loading;
