import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import Auth from "../components/views/auth";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
    </BrowserRouter>
  );
};

export default Routes;
