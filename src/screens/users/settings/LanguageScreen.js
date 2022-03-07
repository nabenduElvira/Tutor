import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



const LanguageScreen = () => {
const [Language, setLanguage] = useState([]);
const [saveData,setSaveData] = useState(null);
const [Student_id,setStudent_id]=useState("");
const [SuccessMsg, setSuccessMsg] = useState("");


// Formik initialValues
const initialValues = {
  language: "",
};

//  Yup validationSchema
const validationSchema = Yup.object().shape({
  language: Yup.string().required("Language is required"),
});

async function onSubmit(values) {
  console.log(values);
  const res = await axios.put(`https://kawotekbackend.elvirainfotech.org/students/${Student_id}`,{
    user_id : JSON.parse(localStorage.getItem("userInfo")).id,
    language: values.language
  })
  console.log(res);
  if (res.data.status === "1") {
    setSuccessMsg("Language added successfully.");
  }
}

  useEffect(() => {
    const getLanguage = async () => {
      const response = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/languages`
      );
      
      setLanguage(response.data)
    };
    getLanguage();

    const getStudentId = async () => {
      const res = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/students/user/${
          JSON.parse(localStorage.getItem("userInfo")).id
        }`
      );
      setStudent_id(res.data.sid);
      // setStudentLanguage(res.data.language)

      const saveValues = {
        language: res.data.language == null ? "" : res.data.language,
      };
      setSaveData(saveValues);
    }
    getStudentId();

  },[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSuccessMsg("");
    }, 2000);
    return () => clearInterval(interval);
  }, [SuccessMsg]);



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
            <div className="cd_page_left">
              <div className="dash_left-part comman_box_shadow mb-4">
                <h2>
                  Languages
                  <span>Your Language</span>
                </h2>
                <div className="bg-area">
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
                  <Form>
                  <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12">
                      <div className="row">
                        <div className="col-lg-12 col-md-6 col-sm-6 Teachers_Profile_main">
                          <div className="form-group">
                          <Field
                            name="language"
                            as="select"
                            className={
                              "form-control" +
                              (errors.language && touched.language
                                ? " is-invalid"
                                : "")
                            }
                          >
                            <option value="">Please Select Language</option>
                            {Language.map((items) => {
                              return (
                                <option value={items.name}>{items.name}</option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="language"
                            component="div"
                            className="invalid-feedback"
                          />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6 col-sm-12">
                      <div className="but-area">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                        >
                          Add Language
                          {isSubmitting && (
                            <span className="spinner-border spinner-border-sm mr-1"></span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     )}
     </Formik>
  );
};

export default LanguageScreen;
