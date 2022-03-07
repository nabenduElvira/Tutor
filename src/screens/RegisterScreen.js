import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const RegisterScreen = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [gerror, setGerror] = useState("");
  const initialValues = {
    type: 1,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    acceptTerms: false,
  };

  const validationSchema = Yup.object().shape({
    // type: Yup.string().required("Category is required"),
    first_name: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "Only alphabets are allowed and check blank spaces for this field"
      )
      .required("First Name is required"),
    last_name: Yup.string()
      .matches(
        /^[a-zA-Z]+$/,
        "Only alphabets are allowed and check blank spaces for this field"
      )
      .required("Last Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    // confirmPass: Yup.string()
    //   .oneOf([Yup.ref("pass"), null], "Passwords must match")
    //   .required("Confirm Password is required"),
    phone: Yup.string()
      .min(5, "Phone number must be at least 5 characters")
      .required("Phone number is required"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms & Conditions is required"
    ),
  });

  async function onSubmit(values, actions) {
    // console.log(values);
    const response = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/register",
      values
    );

    if (response.data.status === "1") {
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          type: response.data.type,
          email: response.data.email,
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          phone: response.data.phone,
        })
      );
      setError("");
      setSuccess(response.data.message);
      const response2 = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/user/${response.data.id}`
      );
      // console.log(response2.data.id);
      window.location.href = `/tutor-details?d=${response2.data.id}`;
    } else {
      setSuccess("");
      setError(response.data.message);
    }
  }

  // Google Login
  const responseGoogle = async (response) => {
    console.log(response);
    let name = (response.profileObj) ? response.profileObj.name : '';
    let first_name = name.split(" ")[0];
    let last_name = name.substring(first_name.length).trim();
    let email = (response.profileObj) ? response.profileObj.email : '';
    let googleId = (response.profileObj) ? response.profileObj.googleId : '';
    let type = 1;
    const register = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/register",
      {
        first_name: first_name,
        last_name: last_name,
        email: email,
        googleid: googleId,
        type: type,
      }
    );
    // console.log(register.data.id);
    if (register.data.status === "1") {
      localStorage.setItem("userInfo", JSON.stringify(register.data));
      const response2 = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/user/${register.data.id}`
      );
      window.location.href = `/tutor-details?d=${response2.data.id}`;
    }
  };

  // Facebook Login
  const responseFacebook = async (response) => {
    console.log(response);
    let name = response.name;
    let first_name = name.split(" ")[0];
    let last_name = name.substring(first_name.length).trim();
    let email = response.email;
    let id = response.id;
    let type = 1;
    const fbRegister = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/register",
      {
        first_name: first_name,
        last_name: last_name,
        email: email,
        facebookid: id,
        type: type,
      }
    );
    console.log(fbRegister.data.id);
    // console.log(fbRegister.data.status);
    if (fbRegister.data.status === "1") {
      localStorage.setItem("userInfo", JSON.stringify(fbRegister.data));
      const response2 = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/user/${fbRegister.data.id}`
      );
      window.location.href = `/tutor-details?d=${response2.data.id}`;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <div className="modal fade" id="loginModa2">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-title text-center">
                  <h4>
                    <img src="images/login-logo.png" alt="" />
                  </h4>
                </div>
                <div>
                  {/* <div className="col-lg-12">
                    <p
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontSize: 14,
                      }}
                    >
                      {gerror}
                    </p>
                  </div> */}
                  <div className="social-buttons">
                    <FacebookLogin
                      // appId="309504701011302" //https://kawotek.elvirainfotech.org/
                      appId="781823249330265" //http://localhost:3000/
                      fields="name,email,picture"
                      callback={responseFacebook}
                      render={(renderProps) => (
                        <button
                          type="button"
                          onClick={renderProps.onClick}
                          className="btn btn-primary"
                        >
                          Sign in with Facebook
                        </button>
                      )}
                    />
                  </div>
                  <div className="social-buttons">
                    <GoogleLogin
                      clientId="768521198724-3ks096ebr43t2hmmf2f52o0hohprv9ib.apps.googleusercontent.com"
                      // http://localhost:3000/ AND https://kawotek.elvirainfotech.org/
                      render={(renderProps) => (
                        <button
                          type="submit"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          className="btn btn-outline-primary"
                        >
                          Sign in with Google
                        </button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      // cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <div className="text-center text-muted delimiter">or</div>
                  <div className="d-flex flex-column text-center">
                    <Form>
                      <div className="col-lg-12">
                        <p
                          style={{
                            color: "red",
                            textAlign: "center",
                            fontSize: 14,
                          }}
                        >
                          {error}
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <p
                          style={{
                            color: "green",
                            textAlign: "center",
                            fontSize: 14,
                          }}
                        >
                          {success}
                        </p>
                      </div>
                      {/* <div className="form-group">
                        <Field
                          name="type"
                          as="select"
                          className={
                            "form-control" +
                            (errors.type && touched.type ? " is-invalid" : "")
                          }
                        >
                          <option value="">Select Category</option>
                          <option value="0">Student</option>
                          <option value="1">Teacher</option>
                        </Field>
                        <ErrorMessage
                          name="type"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div> */}
                      <div className="form-group">
                        <Field
                          type="text"
                          className={
                            "form-control" +
                            (errors.first_name && touched.first_name
                              ? " is-invalid"
                              : "")
                          }
                          name="first_name"
                          placeholder="First Name..."
                        />
                        <ErrorMessage
                          name="first_name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          className={
                            "form-control" +
                            (errors.last_name && touched.last_name
                              ? " is-invalid"
                              : "")
                          }
                          name="last_name"
                          placeholder="Last Name..."
                        />
                        <ErrorMessage
                          name="last_name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <Field
                          type="text"
                          className={
                            "form-control" +
                            (errors.email && touched.email ? " is-invalid" : "")
                          }
                          name="email"
                          placeholder="Your email address..."
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <Field
                          type="text"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                          name="password"
                          placeholder="Your password..."
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <div className="input-group mb-3">
                          <Field
                            type="text"
                            className={
                              "form-control" +
                              (errors.phone && touched.phone
                                ? " is-invalid"
                                : "")
                            }
                            name="phone"
                            placeholder="Phone..."
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="invalid-feedback"
                          />
                          {/* <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              Send OTP
                            </button>
                          </div> */}
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-center">
                        <div className="signup-section">
                          <Field
                            type="checkbox"
                            className={
                              "form-check-input " +
                              (errors.acceptTerms && touched.acceptTerms
                                ? " is-invalid"
                                : "")
                            }
                            id="exampleCheck1"
                            name="acceptTerms"
                          />
                          <label
                            htmlFor="acceptTerms"
                            className="form-check-label"
                          >
                            {" "}
                            Sign me up Kawotek Academy Updates, exclusive offer
                            and learning tips.
                          </label>

                          <ErrorMessage
                            name="acceptTerms"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      <div className="modal-footer d-flex justify-content-center">
                        <div className="signup-section">
                          By Signing up, agree to our <br />
                          <a href="#a" className="text-info">
                            Terms of use
                          </a>
                          and
                          <a href="#a" className="text-info">
                            Privacy Policy
                          </a>
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-info btn-block btn-round"
                      >
                        {isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        Sign Me Up
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterScreen;
