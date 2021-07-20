import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ loading }) => {
  useEffect(() => {
    console.log(loading, "loading");
  }, [loading]);
  return (
    <h1>
      Accounts Buddy Home - <Link to="/auth">Sign in</Link>
    </h1>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.isLoading,
});

export default connect(mapStateToProps)(Home);
