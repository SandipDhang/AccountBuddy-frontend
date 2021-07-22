import React from "react";
import ReactDOM from "react-dom";
import Router from "./routes";
import { Provider } from "react-redux";
import Store from "./store";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
