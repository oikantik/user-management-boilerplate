import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PrivateRoute = ({ component, isAuth, redirectTo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return isAuth ? (
          renderMergedProps(component, routeProps, rest)
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: routeProps.location },
            }}
          />
        );
      }}
    />
  );
};

const mapDispatchToProps = () => {
  return {
    isAuth: localStorage.getItem("token") ? true : false,
  };
};

export default connect(null, mapDispatchToProps)(PrivateRoute);
