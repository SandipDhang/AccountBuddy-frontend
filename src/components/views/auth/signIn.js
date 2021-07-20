import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signin = () => {
  return (
    <div className="signin-container">
      <h2>Login</h2>
      <p>
        See your growth and enjoy your coffee
        <span class="material-icons">free_breakfast</span>
      </p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
                {console.log(touched)}
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
    </div>
  );
};

export default Signin;
