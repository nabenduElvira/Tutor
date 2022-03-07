import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import axios from "axios";

const ForgotPassword = () => {
  const [error, setError] = useState("");

  const initialValues = {
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });

  // let history = useHistory();

  async function OnSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={OnSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <div className="modal" id="forgotmodel">
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

                <div className="text-center text-muted delimiter">
                  Forgot Password
                </div>
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
                        placeholder="Enter Registered Email"
                      />
                      <ErrorMessage
                        name="email"
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
                      Submit
                    </button>
                  </Form>
                </div>
              </div>
              {/* Modal footer */}
              {/* <div className="modal-footer d-flex justify-content-center">
                <div className="signup-section">
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
              </div> */}
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default ForgotPassword;
