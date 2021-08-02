import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { SigninSchema } from "./authSchema";
import { FormControlLabel, Switch } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { autoLogin, signIn } from "../../../actions";
import { motion } from "framer-motion";

const Signin = ({ isLoggedIn, changeView, variants }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isRemembered, setIsRemembered] = useState(false);

  const verifyEmail = () => {
    changeView(2);
  };

  const handleSubmit = (values, setSubmitting) => {
    console.log(values);
    sessionStorage.setItem("ab_email", values.email);
    dispatch(signIn({ values, verifyEmail }));
    setSubmitting(true);
  };

  useEffect(() => {
    if (isLoggedIn) history.push("/dashboard");
    // eslint-disable-next-line
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(autoLogin());
    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      className="signin-container"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <h2>Login</h2>
      <p>
        See your growth and enjoy your coffee
        <span className="material-icons">free_breakfast</span>
      </p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmit(values, setSubmitting)
        }
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="sign-in-form">
            <div className="input-group">
              <div
                className={`input ${
                  errors.email && touched.email ? "error" : ""
                }`}
              >
                <span className="material-icons">person_outline</span>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                  autoComplete="off"
                />
              </div>
              <ErrorMessage
                className="form-error"
                name="email"
                component="div"
              />
            </div>
            <div className="input-group">
              <div
                className={`input ${
                  errors.password && touched.password ? "error" : ""
                }`}
              >
                <span className="material-icons">vpn_key</span>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </div>
              <ErrorMessage
                className="form-error"
                name="password"
                component="div"
              />
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={isRemembered}
                  onChange={() => setIsRemembered(!isRemembered)}
                  name="checkedB"
                  color="primary"
                  size="small"
                />
              }
              label="Remember me"
              className="switch"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`sign-in-btn ${isSubmitting ? "disabled" : ""}`}
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </Form>
        )}
      </Formik>
      <div className="other-links">
        <button onClick={() => changeView(1)}>Create an account</button>
        <button onClick={() => changeView(3)}>Forgot password?</button>
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

Signin.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(mapStateToProps)(Signin);
