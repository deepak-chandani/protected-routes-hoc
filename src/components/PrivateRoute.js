import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";

const PrivateRoute = props => {
  const { auth, component: Component } = props;

  //return auth ? <Route {...props} /> : <Redirect to="/" />;
  return (
    <Route
      render={() => {
        return auth ? <Component /> : <Redirect to="" />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(PrivateRoute);

/**
 * <PrivateRoute path="/protected" component={} />
 */
