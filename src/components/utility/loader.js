import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = ({ text }) => {
  return (
    <div className="loader-container">
      <CircularProgress />
      <h2>{text || "Loading"}</h2>
    </div>
  );
};

export default Loader;
