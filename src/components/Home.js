import React, { useEffect } from "react";
import { connect } from "react-redux";

const Home = ({ loading }) => {
  useEffect(() => {
    console.log(loading, "loading");
  }, [loading]);
  return <h1>Accounts Buddy Home</h1>;
};

const mapStateToProps = (state) => ({
  loading: state.auth.isLoading,
});

export default connect(mapStateToProps)(Home);
