import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes";
import { Provider } from "react-redux";
import Store from "./store";
import "./index.css";

ReactDOM.render(
  <Provider store={Store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
