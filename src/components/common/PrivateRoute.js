import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!isAuth ? <Redirect exact to="/" /> : children)}
    />
  );
};

const mapDispatchToProps = () => {
  return {
    isAuth: localStorage.getItem("token") ? true : false,
  };
};

export default connect(null, mapDispatchToProps)(PrivateRoute);
