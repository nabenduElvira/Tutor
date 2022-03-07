import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { Country } from "country-state-city";
import axios from "axios";

const GeneralScreen = () => {
  const [saveData, setSaveData] = useState(null);
  const [student_id, setStudent_id] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");

  // get All Countries
  const country = [
    {
      id: "0",
      name: "India",
    },
    {
      id: "1",
      name: "Australia",
    },
  ];

  // Formik initialValues
  const initialValues = {
    // email: "",
    first_name: "",
    last_name: "",
    gender: "",
    phone: "",
    zip_code: "",
    address: "",
    country: "",
    currency: "",
    time_zone: "",
    clock: "",
  };

  //  Yup validationSchema
  const validationSchema = Yup.object().shape({
    // email: Yup.string().email("Email is invalid").required("Email is required"),
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
    gender: Yup.string().required("Select is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    zip_code: Yup.string().required("Zip Code is required"),
    country: Yup.string().required("Select is required"),
    currency: Yup.string().required("Select is required"),
    time_zone: Yup.string().required("Select is required"),
    clock: Yup.string().required("Clock is required"),
  });

  useEffect(() => {
    const getStudentData = async () => {
      // Formik saveData
      const res = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/students/user/${
          JSON.parse(localStorage.getItem("userInfo")).id
        }`
      );
      // console.log(res.data);
      setStudent_id(res.data.sid);
      // localStorage.setItem("sid", JSON.stringify(res.data.sid));
      setEmail(res.data.email);
      const saveValues = {
        // email: res.data.email,
        first_name: res.data.first_name,
        last_name: res.data.last_name,
        gender: res.data.gender,
        phone: res.data.phone,
        address: res.data.address,
        zip_code: res.data.zip_code,
        country: res.data.country == null ? "" : res.data.country,
        currency: res.data.currency == null ? "" : res.data.currency,
        time_zone: res.data.time_zone == null ? "" : res.data.time_zone,
        clock: res.data.clock == null ? "" : res.data.clock,
      };
      setSaveData(saveValues);
    };
    getStudentData();
  }, []);

  // Formik onSubmit
  async function onSubmit(values) {
    // console.log(values);
    // console.log(student_id);
    const res = await axios.put(
      `https://kawotekbackend.elvirainfotech.org/students/${student_id}`,
      {
        // email: values.email,
        user_id: JSON.parse(localStorage.getItem("userInfo")).id,
        first_name: values.first_name,
        last_name: values.last_name,
        gender: values.gender,
        phone: values.phone,
        address: values.address,
        zip_code: values.zip_code,
        country: values.country,
        currency: values.currency,
        time_zone: values.time_zone,
        clock: values.clock,
      }
    );
    console.log(res.data);
    if (res.data.status === "1") {
      setSuccessMsg("Student details update successfully.");
    }
    localStorage.clear();
    window.location.href = "/";
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSuccessMsg("");
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [SuccessMsg]);

  // Dummy Json
  const Currency = [
    {
      id: "0",
      name: "NIO",
      currency: "NIO - Nicaraguan Córdoba",
    },
    {
      id: "1",
      name: "INR",
      currency: "INR - Indian Rupee",
    },
    {
      id: "2",
      name: "NOK",
      currency: "NOK - Norwegian Krone",
    },
  ];

  // Dummy Json
  const Timezone = [
    {
      id: "0",
      name: "GMT+5:30",
      currency: "India (GMT+5:30)",
    },
    {
      id: "1",
      name: "GMT-8",
      currency: "Los Angeles (GMT-8)",
    },
    {
      id: "2",
      name: "GMT+5:45",
      currency: "Nepal (GMT+5:45)",
    },
  ];

  // console.log(student_id);

  return (
    <Formik
      initialValues={saveData || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
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
                        General
                        <span>View and edit your profile settings</span>
                      </h2>

                      <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              type="text"
                              className={
                                "form-control" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                              name="email"
                              placeholder="Email *"
                              value={email}
                            />
                            {/* <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            /> */}
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-12">
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
                              placeholder="First Name *"
                            />
                            <ErrorMessage
                              name="first_name"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-12">
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
                              placeholder="Last Name *"
                            />
                            <ErrorMessage
                              name="last_name"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              name="gender"
                              as="select"
                              className={
                                "form-control" +
                                (errors.gender && touched.gender
                                  ? " is-invalid"
                                  : "")
                              }
                            >
                              <option value="">Please Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </Field>
                            <ErrorMessage
                              name="gender"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              type="text"
                              className={
                                "form-control" +
                                (errors.phone && touched.phone
                                  ? " is-invalid"
                                  : "")
                              }
                              name="phone"
                              placeholder="Phone *"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              name="country"
                              as="select"
                              className={
                                "form-control" +
                                (errors.country && touched.country
                                  ? " is-invalid"
                                  : "")
                              }
                            >
                              <option value="">Select Country *</option>
                              {country.map((items) => {
                                return (
                                  <option value={items.name}>
                                    {items.name}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              name="country"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              type="text"
                              className={
                                "form-control" +
                                (errors.address && touched.address
                                  ? " is-invalid"
                                  : "")
                              }
                              name="address"
                              placeholder="Address *"
                            />
                            <ErrorMessage
                              name="address"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              type="text"
                              className={
                                "form-control" +
                                (errors.zip_code && touched.zip_code
                                  ? " is-invalid"
                                  : "")
                              }
                              name="zip_code"
                              placeholder="Zip Code *"
                            />
                            <ErrorMessage
                              name="zip_code"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              name="currency"
                              as="select"
                              className={
                                "form-control" +
                                (errors.currency && touched.currency
                                  ? " is-invalid"
                                  : "")
                              }
                            >
                              <option value="">Select Currency *</option>
                              {Currency.map((items) => {
                                return (
                                  <option value={items.name}>
                                    {items.currency}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              name="currency"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              name="time_zone"
                              as="select"
                              className={
                                "form-control" +
                                (errors.time_zone && touched.time_zone
                                  ? " is-invalid"
                                  : "")
                              }
                            >
                              <option value="">Select Timezone *</option>
                              {Timezone.map((items) => {
                                return (
                                  <option value={items.name}>
                                    {items.currency}
                                  </option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              name="time_zone"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group">
                            <Field
                              name="clock"
                              as="select"
                              className={
                                "form-control" +
                                (errors.clock && touched.clock
                                  ? " is-invalid"
                                  : "")
                              }
                            >
                              <option value="">Select Clock *</option>
                              <option value="12">12-hour clock</option>
                              <option value="24">24-hour clock</option>
                            </Field>
                            <ErrorMessage
                              name="clock"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <p
                        style={{
                          color: "green",
                          textAlign: "center",
                          fontSize: 14,
                        }}
                      >
                        {SuccessMsg}
                      </p>
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

export default GeneralScreen;
