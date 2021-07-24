import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { SigninSchema } from "./authSchema";
import { FormControlLabel, Switch } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { signIn } from "../../../actions";

const Signin = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isRemembered, setIsRemembered] = useState(false);

  const handleSubmit = (values, setSubmitting) => {
    console.log(values);
    dispatch(signIn(values));
    setSubmitting(false);
  };

  useEffect(() => {
    if (isLoggedIn) history.push("/dashboard");
    // eslint-disable-next-line
  }, [isLoggedIn]);

  return (
    <div className="signin-container">
      <h2>Login</h2>
      <p>
        See your growth and enjoy your coffee
        <span class="material-icons">free_breakfast</span>
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
                <span class="material-icons">person_outline</span>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                  autocomplete="off"
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
                <span class="material-icons">vpn_key</span>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  autocomplete="off"
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
              className="sign-in-btn"
            >
              Log in
            </button>
          </Form>
        )}
      </Formik>
      <div className="other-links">
        <button>Create an account</button>
        <button>Forgot password?</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

Signin.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(mapStateToProps)(Signin);
