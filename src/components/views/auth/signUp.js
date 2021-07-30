import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignUpSchema } from "./authSchema";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { getAllIndustry, signUp } from "../../../actions";

const SignUp = ({ changeView, variants, industries }) => {
  const dispatch = useDispatch();

  const onSuccessRegister = () => {
    changeView(2);
  };

  const handleSubmit = (values, setSubmitting) => {
    console.log(values);
    setSubmitting(true);
    const data = {
      industry_id: values.industry,
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(signUp({ data, onSuccessRegister }));
  };

  useEffect(() => {
    dispatch(getAllIndustry());
    // eslint-disable-next-line
  }, []);
  return (
    <motion.div
      className="signin-container"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <h2>Create a free account</h2>
      <p>Focus on your business, rest we will handle</p>
      <Formik
        initialValues={{ industry: "", email: "", password: "", name: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmit(values, setSubmitting)
        }
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="sign-in-form">
            <div className="input-group">
              <div
                className={`input ${
                  errors.industry && touched.industry ? "error" : ""
                }`}
              >
                <span>
                  <ApartmentIcon />
                </span>
                <Field
                  name="industry"
                  as="select"
                  className="signup-form-select"
                >
                  <option value="">Select your industry type</option>
                  {industries.map((type) => {
                    return (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    );
                  })}
                </Field>
              </div>
              <ErrorMessage
                className="form-error"
                name="industry"
                component="div"
              />
            </div>
            <div className="input-group">
              <div
                className={`input ${
                  errors.name && touched.name ? "error" : ""
                }`}
              >
                <span>
                  <AccountBalanceIcon />
                </span>
                <Field
                  type="text"
                  name="name"
                  placeholder="Company Name"
                  autoComplete="off"
                />
              </div>
              <ErrorMessage
                className="form-error"
                name="name"
                component="div"
              />
            </div>
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
            <button
              type="submit"
              disabled={isSubmitting}
              className={`sign-in-btn ${isSubmitting ? "disabled" : ""}`}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
      <div className="other-links">
        <button onClick={() => changeView(0)}>
          Already have an account? Login Here
        </button>
        <button onClick={() => changeView(3)}>Forgot password?</button>
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  industries: state.auth.industries,
});

SignUp.propTypes = {
  industries: PropTypes.array,
};

export default connect(mapStateToProps)(SignUp);
