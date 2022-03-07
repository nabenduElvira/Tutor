import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PasswordScreen = () => {
  const initialValues = {
    password: "",
    confirmPass: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New Password is required"),
    confirmPass: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  async function OnSubmit(values) {
    console.log(values);
    const updatePass = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/user/change-password",
      {
        user_id: JSON.parse(localStorage.getItem("userInfo")).id,
        password: values.confirmPass,
      }
    );
    console.log(updatePass);
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={OnSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <section className="cd_page_sec bg_color_gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="cd_page_right2">
                  <div className="lan-part comman_box_shadow mb-4">
                    <h2 className="subtitle">Settings</h2>
                    <div className="lan-area">
                      <ul>
                        <li>
                          <Link to="/general">
                            <span>
                              <img src="images/s1.png" alt="" />
                            </span>
                            General
                          </Link>
                        </li>
                        <li>
                          <Link to="/profile-photo">
                            <span>
                              <img src="images/s2.png" alt="" />
                            </span>
                            Profile Photo
                          </Link>
                        </li>
                        <li>
                          <Link to="/language">
                            <span>
                              <img src="images/s3.png" alt="" />
                            </span>
                            Languages
                          </Link>
                        </li>
                        <li>
                          <Link to="/password">
                            <span>
                              <img src="images/s4.png" alt="" />
                            </span>
                            Password
                          </Link>
                        </li>

                        <li>
                          <Link to="deactivate">
                            <span>
                              <img src="images/s7.png" alt="" />
                            </span>
                            Deactivate
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Form>
                  <div className="cd_page_left">
                    <div className="dash_left-part comman_box_shadow mb-4">
                      <h2>
                        Password
                        <span>Change your password</span>
                      </h2>
                      <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              type="password"
                              className={
                                "form-control" +
                                (errors.password && touched.password
                                  ? " is-invalid"
                                  : "")
                              }
                              name="password"
                              placeholder="New password..."
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              type="password"
                              // className="form-control"
                              className={
                                "form-control" +
                                (errors.confirmPass && touched.confirmPass
                                  ? " is-invalid"
                                  : "")
                              }
                              name="confirmPass"
                              placeholder="Confirm password..."
                            />
                            <ErrorMessage
                              name="confirmPass"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cd_course_desc">
                      <div className="l-area">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-success ph"
                        >
                          {isSubmitting && (
                            <span className="spinner-border spinner-border-sm mr-1"></span>
                          )}
                          SAVE
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
};

export default PasswordScreen;
