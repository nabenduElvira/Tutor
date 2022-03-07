import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const [error, setError] = useState("");

  // const [gerror, setGerror] = useState("");
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // let history = useHistory();

  async function OnSubmit(values) {
    // console.log(values);
    const response = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/login",
      values
    );
    console.log(response.data);
    if (response.data.status === "1") {
      console.log(response.data.data.type);
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          type: response.data.data.type,
          email: response.data.data.email,
          id: response.data.data.id,
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          phone: response.data.data.phone,
          image: response.data.data.image,
        })
      );
      // console.log(response.data.data.type);
      if (response.data.data.type === 0) {
        window.location.href = "/tutor-list";
      } else {
        const response2 = await axios.get(
          `https://kawotekbackend.elvirainfotech.org/teachers/user/${response.data.data.id}`
        );
        // console.log(response2);
        window.location.href = `/tutor-details?d=${response2.data.id}`;
      }
    } else {
      setError(response.data[0].msg);
    }
    // history.push("/");
  }

  // Google Login
  const responseGoogle = async (response) => {
    console.log('response rana',response);
    let googleId = (response.profileObj) ? response.profileObj.googleId : 0;
    const googleLogin = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/glogin",
      {
        googleid: googleId,
      }
    );

    // console.log(googleLogin.data[0].status);

    if (googleLogin.data.status === "1") {
      console.log(googleLogin.data.data.id);
      localStorage.setItem("userInfo", JSON.stringify(googleLogin.data.data));
      const response2 = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/user/${googleLogin.data.data.id}`
      );
      // console.log(response2);
      window.location.href = `/tutor-details?d=${response2.data.id}`;
    } else {
      // setGerror(googleLogin.data[0].msg);
      let name = (response.profileObj) ? response.profileObj.name : '';  
      let first_name = name.split(" ")[0];
      let last_name = name.substring(first_name.length).trim();
      let email = (response.profileObj) ? response.profileObj.email : ''; 
      // let googleId = response.profileObj.googleId;
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
      console.log(register.data.id);
      if (register.data.status === "1") {
        localStorage.setItem("userInfo", JSON.stringify(register.data));
        const response2 = await axios.get(
          `https://kawotekbackend.elvirainfotech.org/teachers/user/${register.data.id}`
        );
        // console.log(response2);
        window.location.href = `/tutor-details?d=${response2.data.id}`;
      }
    }
  };

  // Facebook Login
  const responseFacebook = async (response) => {
    console.log(response);
    // console.log(response.id);
    let fb_id = response.id;
    let name = response.name;
    let first_name = name.split(" ")[0];
    let last_name = name.substring(first_name.length).trim();
    let email = response.email;
    let type = 1;

    const fbLogin = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/fblogin",
      {
        facebookid: fb_id,
      }
    );
    // console.log(fbLogin.data.status);
    if (fbLogin.data.status === "1") {
      console.log(fbLogin.data.data.id);
      localStorage.setItem("userInfo", JSON.stringify(fbLogin.data.data));
      const response2 = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/user/${fbLogin.data.data.id}`
      );
      // console.log(response2);
      window.location.href = `/tutor-details?d=${response2.data.id}`;
    } else {
      console.log("Call fb register api");
      //   ------Facebook Login Regiser-------

      const fbRegister = await axios.post(
        "https://kawotekbackend.elvirainfotech.org/register",
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          facebookid: fb_id,
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
        // console.log(response2);
        window.location.href = `/tutor-details?d=${response2.data.id}`;
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={OnSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <div className="modal" id="loginModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
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
              {/* Modal body */}
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
                </div>
                <div className="text-center text-muted delimiter">or</div>
                <div className="d-flex flex-column text-center">
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
                  <Form>
                    <div className="form-group">
                      <Field
                        type="text"
                        // className="form-control"
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
                        type="password"
                        // className="form-control"
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
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-info btn-block btn-round"
                    >
                      {isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      Login
                    </button>
                  </Form>
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer d-flex justify-content-center">
                <div className="signup-section">
                  <Link
                    to="#"
                    id="for_pass"
                    data-toggle="modal"
                    data-target="#forgotmodel"
                    className="text-info"
                  >
                    Forgot Password ?
                  </Link>
                  <Link
                    to="#"
                    id="reg_lnk_btn"
                    data-toggle="modal"
                    data-target="#loginModa2"
                    className="text-info"
                  >
                    Create a New Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginScreen;
