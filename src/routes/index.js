import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Auth from "../components/views/auth";
import Dashboard from "../components/views/dashboard";
import ProtectedRoute from "./protectedRoute";
import PropTypes from "prop-types";

const Routes = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <ProtectedRoute
        exact
        isLoggedIn={isLoggedIn}
        path="/dashboard"
        component={Dashboard}
      />
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  role: state.auth?.user?.role,
});

Routes.propTypes = {
  isLoggedIn: PropTypes.bool,
  role: PropTypes.string,
};

export default connect(mapStateToProps)(Routes);
