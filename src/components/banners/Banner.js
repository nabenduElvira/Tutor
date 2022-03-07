import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import Select from "react-select";
// import { Country } from "country-state-city";

const Banner = () => {
  // const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const initialValues = {
    type: 0,
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string().required("name is required"),
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
    phone: Yup.string().required("Mobile number is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  async function OnSubmit(values) {
    // console.log(values);
    const response = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/register",
      values
    );
    // console.log(response);
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
      window.location.href = "/tutor-list";
    } else {
      setSuccess("");
      setError(response.data.message);
    }
  }

  // useEffect(() => {
  //   // get All Countries
  //   const country = Country.getAllCountries();
  //   var AllCountry = [];
  //   for (var i = 0; i < country.length; i++) {
  //     // console.log("ffff", country[i].name);
  //     AllCountry.push({
  //       value: country[i].isoCode,
  //       label: country[i].name,
  //     });
  //   }
  //   setCountries(AllCountry);
  // }, []);
  // console.log(AllCountry);

  // Options
  // const Countries = AllCountry;

  // Get Selected Data
  // const [countryList, setCountryList] = useState();

  // const GetCountries = (e) => {
  //   setCountryList(Array.isArray(e) ? e.map((b) => b.value) : []);
  // };

  // console.log("Country", countryList);
  // console.log(countries);
  return (
    <div>
      <div id="main_banner" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/banner1.jpg" alt="Los Angeles" />
          </div>
        </div>
        <div className="banner_overlay">
          <div className="container">
            <div className="banner_txt_box">
              <div className="banner_form_area">
                <h2>Find An Expert Tutor</h2>
                {/* <div className="tab_ul_area">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#banner_tab1"
                      >
                        1
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#banner_tab2"
                      >
                        2
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="form_subtitle">
                  <h3>
                    <span>Enter Your Details</span>
                  </h3>
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
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={OnSubmit}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form>
                      <div className="tab-content">
                        <div id="banner_tab1" className="tab-pane active">
                          <div className="banner_tab_body">
                            <div className="form_banner">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    {/* <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter name of your child"
                                    /> */}
                                    <Field
                                      type="text"
                                      className={
                                        "form-control" +
                                        (errors.first_name && touched.first_name
                                          ? " is-invalid"
                                          : "")
                                      }
                                      name="first_name"
                                      placeholder="Enter First Name"
                                    />
                                    <ErrorMessage
                                      name="first_name"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    {/* <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter name of your child"
                                    /> */}
                                    <Field
                                      type="text"
                                      className={
                                        "form-control" +
                                        (errors.last_name && touched.last_name
                                          ? " is-invalid"
                                          : "")
                                      }
                                      name="last_name"
                                      placeholder="Enter Last Name"
                                    />
                                    <ErrorMessage
                                      name="last_name"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <div className="inp_relative">
                                      {/* <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your mobile number"
                                      /> */}
                                      <Field
                                        type="text"
                                        className={
                                          "form-control" +
                                          (errors.phone && touched.phone
                                            ? " is-invalid"
                                            : "")
                                        }
                                        name="phone"
                                        placeholder="Enter your mobile number"
                                      />
                                      <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="invalid-feedback"
                                      />
                                      {/* <button className="otp_btn" type="button">
                                        Send OTP
                                      </button> */}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    {/* <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Email Address"
                                    /> */}
                                    <Field
                                      type="text"
                                      // className="form-control"
                                      className={
                                        "form-control" +
                                        (errors.email && touched.email
                                          ? " is-invalid"
                                          : "")
                                      }
                                      name="email"
                                      placeholder="Your email address"
                                    />
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
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
                                      placeholder="Enter Password"
                                    />
                                    <ErrorMessage
                                      name="password"
                                      component="div"
                                      className="invalid-feedback"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12 text-center">
                                  <div className="form-group">
                                    <button
                                      className="submit_btn"
                                      type="submit"
                                      disabled={isSubmitting}
                                    >
                                      {isSubmitting && (
                                        <span className="spinner-border spinner-border-sm mr-1"></span>
                                      )}
                                      Schedule a Free Class
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div id="banner_tab2" className="tab-pane fade">
                          <div className="banner_tab_body">
                            <div className="form_banner">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter name of your child"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter name of your child"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Email Address"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <select className="form-control">
                                      <option>State</option>
                                      <option>State</option>
                                      <option>State</option>
                                      <option>State</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                  <div className="form-group">
                                    <button
                                      className="submit_btn"
                                      type="submit"
                                      disabled={isSubmitting}
                                    >
                                      Schedule a Free Class
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
