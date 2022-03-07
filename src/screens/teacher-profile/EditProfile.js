import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicExtended from "ckeditor5-build-classic-extended";
import EducationModal from "./EducationModal";
import ExperienceModel from "./ExperienceModel";
import CertificationModel from "./CertificationModel";
import Select from "react-select";
import { Markup } from "interweave";

const EditProfile = () => {
  // Hide Part
  const [hide, setHide] = useState(false);
  const [descHide, setDescHide] = useState(false);
  const [gradeHide, setGradeHide] = useState(false);
  const [lessonHide, setLessonHide] = useState(false);
  // Get Part
  const [languages, setLanguages] = useState([]);
  const [accents, setAccents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [lessons, setLessons] = useState([]);
  // Popup Add Lesson data
  const [Lesson, setLesson] = useState("");
  const [Lesson_subject, setLesson_subject] = useState("");
  const [Lesson_price, setLesson_price] = useState("");
  const [teacher_id, setTeacher_id] = useState("");
  const [saveData, setSaveData] = useState(null);
  // Description
  const [description, setDescription] = useState("");
  const [viewDes, setViewDes] = useState();
  //Teacher Data
  const [teacher_details, setTeacher_details] = useState([]);
  // Teacher Password Change
  const [new_password, setNew_password] = useState("");
  const [con_password, setCon_password] = useState("");

  const [PasswordErr, setPasswordErr] = useState("");
  // Grades
  const [grades, setGrades] = useState();
  const [viewGrade, setViewGrade] = useState([]);
  const [admin_grades, setAdmin_grades] = useState([]);
  // Resume
  const [EducationList, setEducationList] = useState([]);
  const [ExperienceList, setExperienceList] = useState([]);
  const [CertificationList, setCertificationList] = useState([]);

  const inputFile = useRef(null);

  const createHide = () => {
    if (hide === true) {
      setHide(false);
    } else setHide(true);
  };

  const createDescHide = () => {
    if (descHide === true) {
      setDescHide(false);
    } else setDescHide(true);
  };

  const createGradeHide = () => {
    if (gradeHide === true) {
      setGradeHide(false);
    } else setGradeHide(true);
  };

  const createLessonHide = () => {
    if (lessonHide === true) {
      setLessonHide(false);
    } else setLessonHide(true);
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  // function ReadMore({ children = 100 }) {
  //   const text = children;
  //   const [isShow, setIsShowLess] = useState(true);
  //   const result = isShow ? text.slice(0, 299) : text;

  //   function toggleIsShow() {
  //     setIsShowLess(!isShow);
  //   }

  //   return (
  //     <p>
  //       {result}
  //       <span
  //         onClick={toggleIsShow}
  //         style={{ color: "green", cursor: "pointer" }}
  //       >
  //         {isShow ? "...Read More" : "...Read Less"}
  //       </span>
  //     </p>
  //   );
  // }

  // Formik initialValues
  const initialValues = {
    first_name: "",
    last_name: "",
    gender: "",
    phone: "",
    language: "",
    accents: "",
    country: "",
    state: "",
    city: "",
    address: "",
    subject: "",
    zipcode: "",
    paypal_email: "",
    time_zone: "",
    youtubeID: "",
    upload_video: "",
  };

  //  Yup validationSchema
  const validationSchema = Yup.object().shape({
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
    phone: Yup.string().required("phone is required"),
    language: Yup.string().required("language is required"),
    accents: Yup.string().required("Accents is required"),
    country: Yup.string().required("country is required"),
    state: Yup.string().required("state is required"),
    city: Yup.string().required("city is required"),
    address: Yup.string().required("address is required"),
    subject: Yup.string().required("subject is required"),
    zipcode: Yup.string().required("Zipcode is required"),
    paypal_email: Yup.string().required("paypal_email is required"),
    time_zone: Yup.string().required("time_zone is required"),
  });

  async function onSubmit(values) {
    // console.log(values);
    console.log(teacher_id);
    const res = await axios.put(
      `https://kawotekbackend.elvirainfotech.org/teachers/${JSON.parse(
        localStorage.getItem("teacher_id")
      )}`,
      {
        user_id: JSON.parse(localStorage.getItem("userInfo")).id,
        first_name: values.first_name,
        last_name: values.last_name,
        gender: values.gender,
        phone: values.phone,
        language: values.language,
        accents: values.accents,
        country: values.country,
        state: values.state,
        city: values.city,
        address: values.address,
        subject: values.subject,
        zip_code: values.zipcode,
        paypal_email: values.paypal_email,
        time_zone: values.time_zone,
        youtube_id: values.youtubeID,
      }
    );
    console.log(res);
    localStorage.clear();
    window.location.href = "/";
  }

  // Popup Add Lesson Data
  const AddLessonPopupSubmit = async () => {
    console.log("lesson btn click ");
    const createLesson = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/lessons/add",
      {
        title: Lesson,
        price: Lesson_price,
        teacher_id: JSON.parse(localStorage.getItem("teacher_id")),
        subject: Lesson_subject,
      }
    );
    console.log(createLesson.data);
    setLessonHide(false);
  };

  //Add Description
  const AddDescription = async () => {
    console.log("Click Des BTN");
    const res = await axios.put(
      `https://kawotekbackend.elvirainfotech.org/teachers/${JSON.parse(
        localStorage.getItem("teacher_id")
      )}`,
      {
        about: description,
        user_id: JSON.parse(localStorage.getItem("userInfo")).id,
      }
    );
    console.log(res.data);
    setDescHide(false);
  };

  // Change Password
  const SubmitPassword = async () => {
    if (new_password !== "") {
      if (con_password !== "") {
        if (new_password === con_password) {
          // console.log("submit");
          const updatePass = await axios.post(
            "https://kawotekbackend.elvirainfotech.org/user/change-password",
            {
              user_id: JSON.parse(localStorage.getItem("userInfo")).id,
              password: con_password,
            }
          );
          console.log(updatePass);
          localStorage.clear();
          window.location.href = "/";
        } else {
          setPasswordErr("Confirm Password not matched");
        }
      } else {
        setPasswordErr("Confirm Password Required");
      }
    } else {
      setPasswordErr("New Password Required");
    }
  };

  //  Grades Part Start

  const GetGrade = (e) => {
    setGrades(Array.isArray(e) ? e.map((c) => c.value) : []);
  };
  // console.log("Grades", JSON.stringify(grades));

  const AddGrade = async () => {
    console.log("Submit");
    const res = await axios.put(
      `https://kawotekbackend.elvirainfotech.org/teachers/${JSON.parse(
        localStorage.getItem("teacher_id")
      )}`,
      {
        teaches: JSON.stringify(grades),
        user_id: JSON.parse(localStorage.getItem("userInfo")).id,
      }
    );
    console.log(res.data);
    setGradeHide(false);
  };

  // Image Upload
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  useEffect(() => {
    // console.log("api called");
    const changeImage = async () => {
      if (file !== undefined && fileName !== "") {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("fileName", fileName);
        const res = await axios.put(
          `https://kawotekbackend.elvirainfotech.org/users/image/${
            JSON.parse(localStorage.getItem("userInfo")).id
          }`,
          formData
        );
        console.log(res);
        // file(undefined);
        // fileName("");
      }
    };
    changeImage();
  }, [file]);

  useEffect(() => {
    const getLanguage = async () => {
      const res = await axios.get(
        "https://kawotekbackend.elvirainfotech.org/languages"
      );
      // console.log(res.data);
      setLanguages(res.data);
    };
    getLanguage();

    const getAccents = async () => {
      const res = await axios.get(
        "https://kawotekbackend.elvirainfotech.org/accents"
      );
      // console.log(res.data);
      setAccents(res.data);
    };
    getAccents();

    const getSubjects = async () => {
      const res = await axios.get(
        "https://kawotekbackend.elvirainfotech.org/subjects"
      );
      // console.log(res.data);
      setSubjects(res.data);
    };
    getSubjects();

    const getGrades = async () => {
      const response = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachs`
      );
      // console.log(response.data);
      var AllGrades = [];
      for (var i = 0; i < response.data.length; i++) {
        // console.log("ffff", response.data[i]);
        AllGrades.push({
          value: response.data[i].name,
          label: response.data[i].name,
        });
      }
      setAdmin_grades(AllGrades);
    };
    getGrades();

    const getTeacherData = async () => {
      
      const teacherId = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/user/${
          JSON.parse(localStorage.getItem("userInfo")).id
        }`
      );
      //console.log('teacher_data',teacherId);
      localStorage.setItem("teacher_id", teacherId.data.id);
      const response = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/${teacherId.data.id}`
      );

      // console.log("hhhhh", JSON.parse(response.data.teaches));
      const saveValues = {
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        gender: response.data.gender,
        phone: response.data.phone,
        language: response.data.language,
        accents: response.data.accents,
        country: response.data.country,
        state: response.data.state,
        city: response.data.city,
        address: response.data.address,
        subject: response.data.subject,
        zipcode: response.data.zip_code,
        paypal_email: response.data.paypal_email,
        time_zone: response.data.time_zone,
        youtubeID: response.data.youtube_id,
        // upload_video: response.data.,
      };
      setSaveData(saveValues);
    };
    getTeacherData();

    const getEducations = async () => {
      const res = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/educations/teacher/${JSON.parse(
          localStorage.getItem("teacher_id")
        )}`
      );
      // console.log(res.data.data);
      setEducationList(res.data.data);
    };
    getEducations();

    const getExperience = async () => {
      const res = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/experience/teacher/${JSON.parse(
          localStorage.getItem("teacher_id")
        )}`
      );
      // console.log(res.data.data);
      setExperienceList(res.data.data);
    };
    getExperience();

    const getCertification = async () => {
      const res = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/certification/teacher/${JSON.parse(
          localStorage.getItem("teacher_id")
        )}`
      );
      // console.log(res.data.data);
      setCertificationList(res.data.data);
    };
    getCertification();
  }, []);

  useEffect(() => {
    const GetLessonByTid = async () => {
      const teacherId = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/user/${
          JSON.parse(localStorage.getItem("userInfo")).id
        }`
      );
      // console.log(teacherId.data.id);
      setTeacher_id(teacherId.data.id);

      const res = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/lessons/teacher/${teacherId.data.id}`
      );
      setLessons(res.data.data);
      // console.log(res.data.data);

      const response = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/${teacherId.data.id}`
      );

      setTeacher_details(response.data);
      setViewGrade(JSON.parse(response.data.teaches));
      setViewDes(response.data.about);
    };
    GetLessonByTid();
  });

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
  const state = [
    {
      id: "0",
      name: "West Bengal",
    },
    {
      id: "1",
      name: "Queensland",
    },
  ];
  const city = [
    {
      id: "0",
      name: "Kolkata",
    },
    {
      id: "1",
      name: "Acacia Ridge",
    },
  ];

  // Dummy Json
  const Timezone = [
    {
      id: "0",
      name: "GMT+5:30",
      time: "India (GMT+5:30)",
    },

    {
      id: "2",
      name: "GMT+5:45",
      time: "Nepal (GMT+5:45)",
    },
  ];

  // console.log(teacher_details);

  return (
    <Formik
      initialValues={saveData || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ errors, touched, isSubmitting }) => (
        <>
          <div
            className="dashboard_banner"
            style={{ backgroundImage: "url(images/dashboard-bg.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="dashboard_profile">
                    <div className="dp_image">
                      {teacher_details.image !== null &&
                      teacher_details.image !== "" ? (
                        <img
                          src={`https://kawotekbackend.elvirainfotech.org/public/images/uploads/${teacher_details.image}`}
                          alt=""
                        />
                      ) : (
                        <img
                          src={`https://ui-avatars.com/api/?name=${teacher_details.first_name}+${teacher_details.last_name}`}
                          alt=""
                        />
                      )}

                      <div className="image_profile_btn_div">
                        <input
                          style={{ display: "none" }}
                          accept=".jpg,.png,.jpeg"
                          ref={inputFile}
                          type="file"
                          onChange={handleFileUpload}
                        />
                        <a
                          href="javascript:void(0)"
                          className="btn btn-success image_profile_btn"
                          onClick={onButtonClick}
                        >
                          <i className="fa fa-edit font-sm" />
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-danger image_profile_btn"
                          onClick={async () => {
                            const response = await axios.put(
                              `https://kawotekbackend.elvirainfotech.org/users/image/${
                                JSON.parse(localStorage.getItem("userInfo")).id
                              }`
                            );
                            console.log(response);
                          }}
                        >
                          <i className="fa fa-trash font-sm" />
                        </a>
                      </div>
                    </div>

                    <div className="dp_content">
                      <h4 className="name">
                        {teacher_details.first_name +
                          " " +
                          teacher_details.last_name}
                      </h4>
                      <p className="designation">Tutor</p>
                      <Link
                        to="#"
                        onClick={createHide}
                        className="btn btn-success btn-sm edit-profile"
                      >
                        {/* Edit Profile */}
                        {hide === true ? "Cancel" : "Edit Profile"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="tutor_details_page bg_color_gray custom_tutor_details2">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="td_left_side">
                    {hide === false ? (
                      // Static Part Start
                      <form className="card-horizontal edit-profile-form mb-4">
                        <div className="form-group">
                          <h6>Profile name:</h6>
                          <p className="etxt">
                            {teacher_details.first_name +
                              " " +
                              teacher_details.last_name}
                          </p>
                        </div>
                        <div className="form-group">
                          <h6>Gender:</h6>
                          <p className="etxt">{teacher_details.gender}</p>
                        </div>
                        <div className="form-group">
                          <h6>Email:</h6>
                          <p className="etxt">{teacher_details.email}</p>
                        </div>
                        <div className="form-group">
                          <h6>Phone Number:</h6>
                          <p className="etxt">{teacher_details.phone}</p>
                        </div>
                        <div className="form-group">
                          <h6>Language:</h6>
                          <p className="etxt">{teacher_details.language}</p>
                        </div>
                        <div className="form-group">
                          <h6>Accents:</h6>
                          <p className="etxt">{teacher_details.accents}</p>
                        </div>
                        <div className="form-group">
                          <h6>Country:</h6>
                          <p className="etxt">{teacher_details.country}</p>
                        </div>
                        <div className="form-group">
                          <h6>State:</h6>
                          <p className="etxt">{teacher_details.state}</p>
                        </div>
                        <div className="form-group">
                          <h6>City:</h6>
                          <p className="etxt">{teacher_details.city}</p>
                        </div>
                        <div className="form-group">
                          <h6>Address:</h6>
                          <p className="etxt">{teacher_details.address}</p>
                        </div>
                        <div className="form-group">
                          <h6>Subject:</h6>
                          <p className="etxt">{teacher_details.subject}</p>
                        </div>
                        <div className="form-group">
                          <h6>Zipcode:</h6>
                          <p className="etxt">{teacher_details.zip_code}</p>
                        </div>
                        <div className="form-group">
                          <h6>Paypal Email ID:</h6>
                          <p className="etxt">{teacher_details.paypal_email}</p>
                        </div>
                        <div className="form-group">
                          <h6>Timezone:</h6>
                          <p className="etxt">{teacher_details.time_zone}</p>
                        </div>
                        <div className="form-group">
                          <h6>Introduction video:</h6>
                          <p className="etxt">{teacher_details.youtube_id}</p>
                        </div>
                        {/* <div className="d-flex justify-content-between align-items-center form-group notification-switch">
                          <h6>Notification:</h6>
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                          </label>
                        </div> */}
                        <div className="form-group btn_wrap text-right submit">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    ) : (
                      // Static Part End
                      <Form className="card-horizontal edit-profile-form mb-4">
                        <div className="form-group introform">
                          <h6>First Name:</h6>
                          {/* <input type="text" className="form-control" /> */}
                          <Field
                            type="text"
                            className={
                              "form-control" +
                              (errors.first_name && touched.first_name
                                ? " is-invalid"
                                : "")
                            }
                            name="first_name"
                          />
                          <ErrorMessage
                            name="first_name"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Last Name:</h6>
                          {/* <input type="text" className="form-control" /> */}
                          <Field
                            type="text"
                            className={
                              "form-control" +
                              (errors.last_name && touched.last_name
                                ? " is-invalid"
                                : "")
                            }
                            name="last_name"
                          />
                          <ErrorMessage
                            name="last_name"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Gender:</h6>
                          {/* <select className="form-control">
                            <option>Please Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select> */}
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
                        <div className="form-group ">
                          <h6>Email:</h6>
                          <p className="etxt">{teacher_details.email}</p>
                          {/* <Field
                            type="text"
                            className={
                              "form-control" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                            name="email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          /> */}
                        </div>
                        <div className="form-group introform">
                          <h6>Phone Number:</h6>
                          {/* <input type="email" className="form-control" /> */}
                          <Field
                            type="text"
                            className={
                              "form-control" +
                              (errors.phone && touched.phone
                                ? " is-invalid"
                                : "")
                            }
                            name="phone"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Language:</h6>
                          {/* <select className="form-control">
                            <option> English</option>
                            <option>Arabic</option>
                          </select> */}
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
                            {languages.map((items) => {
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
                        <div className="form-group introform">
                          <h6>Accents:</h6>
                          <Field
                            name="accents"
                            as="select"
                            className={
                              "form-control" +
                              (errors.accents && touched.accents
                                ? " is-invalid"
                                : "")
                            }
                          >
                            <option value="">Please Select Accents</option>
                            {accents.map((items) => {
                              return (
                                <option value={items.name}>{items.name}</option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="accents"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Country:</h6>
                          {/* <select className="form-control">
                            <option>United States of America</option>
                            <option>Uruguay</option>
                            <option>Uzbekistan</option>
                          </select> */}
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
                            <option value="">Please Select Country</option>
                            {country.map((items) => {
                              return (
                                <option value={items.name}>{items.name}</option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="country"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>State:</h6>
                          {/* <input type="text" className="form-control" /> */}
                          <Field
                            name="state"
                            as="select"
                            className={
                              "form-control" +
                              (errors.state && touched.state
                                ? " is-invalid"
                                : "")
                            }
                          >
                            <option value="">Please Select State</option>
                            {state.map((items) => {
                              return (
                                <option value={items.name}>{items.name}</option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="state"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>City:</h6>
                          {/* <input type="text" className="form-control" /> */}
                          <Field
                            name="city"
                            as="select"
                            className={
                              "form-control" +
                              (errors.city && touched.city ? " is-invalid" : "")
                            }
                          >
                            <option value="">Please Select City</option>
                            {city.map((items) => {
                              return (
                                <option value={items.name}>{items.name}</option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="city"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Address:</h6>
                          {/* <input type="text" className="form-control" /> */}
                          <Field
                            type="text"
                            className={
                              "form-control" +
                              (errors.address && touched.address
                                ? " is-invalid"
                                : "")
                            }
                            name="address"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Subject:</h6>
                          {/* <select className="form-control">
                            <option>English</option>
                            <option>Math</option>
                          </select> */}
                          <Field
                            name="subject"
                            as="select"
                            className={
                              "form-control" +
                              (errors.subject && touched.subject
                                ? " is-invalid"
                                : "")
                            }
                          >
                            <option value="">Please Select Subject</option>
                            {subjects.map((items) => {
                              return (
                                <option value={items.name}>{items.name}</option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="subject"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Zipcode:</h6>
                          {/* <input type="text" className="form-control" /> */}
                          <Field
                            type="text"
                            className={
                              "form-control" +
                              (errors.zipcode && touched.zipcode
                                ? " is-invalid"
                                : "")
                            }
                            name="zipcode"
                          />
                          <ErrorMessage
                            name="zipcode"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Paypal Email ID:</h6>
                          {/* <input
                            type="email"
                            className="form-control"
                            placeholder="user@example.com"
                          /> */}
                          <Field
                            type="text"
                            className={
                              "form-control" +
                              (errors.paypal_email && touched.paypal_email
                                ? " is-invalid"
                                : "")
                            }
                            name="paypal_email"
                          />
                          <ErrorMessage
                            name="paypal_email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Timezone:</h6>
                          {/* <select className="form-control">
                            <option>America/Phoenix</option>
                            <option>America/Port-au-Prince</option>
                            <option>America/Port_of_Spain</option>
                          </select> */}
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
                            <option value="">Please Select TimeZone</option>
                            {Timezone.map((items) => {
                              return (
                                <option value={items.time}>{items.time}</option>
                              );
                            })}
                          </Field>
                          <ErrorMessage
                            name="time_zone"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group introform">
                          <h6>Introduction video:</h6>
                          <div className="video_introduct">
                            <nav>
                              <div
                                className="nav nav-tabs"
                                id="vidnav-tab"
                                role="tablist"
                              >
                                <a
                                  className="nav-item nav-link active"
                                  id="uploadvideo"
                                  data-toggle="tab"
                                  href="#nav-upvideo"
                                  role="tab"
                                  aria-controls="nav-home"
                                  aria-selected="true"
                                >
                                  <span className="chkdiv" />
                                  Upload
                                </a>
                                <a
                                  className="nav-item nav-link"
                                  id="ytubevideo"
                                  data-toggle="tab"
                                  href="#nav-ytube"
                                  role="tab"
                                  aria-controls="nav-profile"
                                  aria-selected="false"
                                >
                                  <span className="chkdiv" />
                                  From Youtube
                                </a>
                              </div>
                            </nav>
                            <div className="tab-content" id="vidnav-tabContent">
                              <div
                                className="tab-pane fade show active"
                                id="nav-upvideo"
                                role="tabpanel"
                                aria-labelledby="uploadvideo"
                              >
                                <div className="upload_zone mt-2">
                                  <label
                                    className="custom-file-upload"
                                    htmlFor="id-introVideo"
                                  >
                                    <i
                                      className="fa fa-cloud-upload"
                                      aria-hidden="true"
                                    />
                                    <span translate>
                                      Drop or select file to here
                                    </span>
                                  </label>
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                  />
                                </div>
                                <small>
                                  Upload mp4 file, webm file, 3gp file, ogg
                                  file, wmv file or webm file for your video
                                </small>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="nav-ytube"
                                role="tabpanel"
                                aria-labelledby="ytubevideo"
                              >
                                <div className="form-group mt-2">
                                  {/* <input
                                    type="text"
                                    name
                                    placeholder="Youtube Id"
                                    className="form-control"
                                  /> */}
                                  <Field
                                    type="text"
                                    className={
                                      "form-control" +
                                      (errors.youtubeID && touched.youtubeID
                                        ? " is-invalid"
                                        : "")
                                    }
                                    name="youtubeID"
                                    placeholder="Youtube Id"
                                  />
                                  <small>Please enter only ID</small>
                                  <br />
                                  <small>
                                    EG: https://www.youtube.com/watch?v=
                                    <strong>xRjlRfpsHGw</strong>
                                    <br /> ID = <strong>xRjlRfpsHGw</strong>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="d-flex justify-content-between align-items-center form-group notification-switch">
                          <h6>Notification:</h6>
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="slider round" />
                          </label>
                        </div> */}
                        <div className="form-group btn_wrap text-right submit introform">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-success btn-lg"
                          >
                            {isSubmitting && (
                              <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            Submit
                          </button>
                        </div>
                      </Form>
                    )}

                    <div className="card-horizontal mb-4">
                      <h5>
                        <strong>Change Password</strong>
                      </h5>
                      <p style={{ color: "red" }}>{PasswordErr}</p>

                      <form className="row update_password">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="New Password"
                              onChange={(e) => setNew_password(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Confirm Password"
                              onChange={(e) => setCon_password(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 text-right">
                          <button
                            type="button"
                            className="btn btn-success w-100"
                            onClick={SubmitPassword}
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* <div className="share_my_profile">
                  <h5>
                    <strong>Share my profile:</strong>
                  </h5>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div> */}
                  </div>
                </div>
                <div className="col-lg-7 md_res_mar_top_30">
                  <div className="td_right_side sidebar_stcky">
                    <div className="description-box card-horizontal mb-4">
                      <h4 className="ql-heading">
                        <strong>Description</strong>
                        <Link
                          to="#"
                          className="btn"
                          id="descBtn"
                          onClick={createDescHide}
                        >
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          />
                        </Link>
                      </h4>
                      <div className="description_container">
                        <div className="desciption-wrap">
                          {descHide === true ? (
                            <div>
                              <CKEditor
                                editor={ClassicExtended}
                                config={{
                                  toolbar: [
                                    "heading",
                                    "|",
                                    "bold",
                                    "italic",
                                    "undo",
                                    "redo",
                                  ],
                                }}
                                data={teacher_details.about}
                                onChange={(event, editor) => {
                                  const data = editor.getData();
                                  // console.log(data);
                                  setDescription(data);
                                }}
                              />
                              <button
                                type="submit"
                                className="btn btn-success w-100"
                                style={{ marginTop: 7 }}
                                onClick={AddDescription}
                              >
                                Update
                              </button>
                            </div>
                          ) : (
                            <div className="desc-editor">
                              <Markup content={viewDes} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="choose-grades card-horizontal mb-4">
                      <h4 className="ql-heading">
                        <strong>Add Lessons</strong>
                        <Link to="#" className="btn" onClick={createLessonHide}>
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          />
                        </Link>
                      </h4>
                      {lessonHide === true ? (
                        <>
                          <div className="row">
                            <div className="col-lg-12 col-md-6 col-sm-6 Teachers_Profile_main">
                              <div className="form-group">
                                <select
                                  className="form-control"
                                  onSelect={setLesson_subject(
                                    teacher_details.subject
                                  )}
                                >
                                  <option value={teacher_details.subject}>
                                    {teacher_details.subject}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-6 col-sm-6 Teachers_Profile_main">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="lesson"
                                  placeholder="Enter Lesson"
                                  onChange={(e) => setLesson(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-6 col-sm-6 Teachers_Profile_main">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="lesson_price"
                                  placeholder="Enter Lesson Price Per Hour"
                                  onChange={(e) =>
                                    setLesson_price(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="Teachers_Profile mb-4">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-6 d-flex justify-content-center">
                                <button
                                  type="button"
                                  className="btn btn-success ph"
                                  onClick={AddLessonPopupSubmit}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Subject</th>
                              <th scope="col">Lesson</th>
                              <th scope="col">Price</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            {lessons.map((details, index) => {
                              return (
                                <>
                                  <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{details.subject}</td>
                                    <td>{details.title}</td>
                                    <td>{details.price}</td>
                                    <td>
                                      <i
                                        className="fa fa-trash-o btn btn-light-default"
                                        aria-hidden="true"
                                        onClick={async () => {
                                          const response = await axios.delete(
                                            `https://kawotekbackend.elvirainfotech.org/lessons/${details.id}`
                                          );
                                          console.log(response);
                                        }}
                                      ></i>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      )}

                      {/* <div className="grade_block d-flex justify-content-between">
                        <a href className="badge">
                          Intermidiate
                        </a>
                        <a href className="badge">
                          Advanced
                        </a>
                      </div> */}
                    </div>
                    <div className="choose-grades card-horizontal mb-4">
                      <h4 className="ql-heading">
                        <strong>Choose Grades</strong>
                        <Link to="#" className="btn" onClick={createGradeHide}>
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          />
                        </Link>
                      </h4>
                      {gradeHide === true ? (
                        <div>
                          <Select
                            isMulti
                            placeholder="Select Grades"
                            options={admin_grades}
                            onChange={GetGrade}
                            // defaultValue={TeacherSubjectLists}
                          />
                          <button
                            type="submit"
                            className="btn btn-success w-100"
                            style={{ marginTop: 7 }}
                            onClick={AddGrade}
                          >
                            Update
                          </button>
                        </div>
                      ) : (
                        <div className="grade_block d-flex">
                          {viewGrade.map((items)   => {
                            return (
                              <a href className="badge" key={items.id}>
                                {items}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div className="resume__block card-horizontal mb-4">
                      <h4 className="ql-heading">
                        <strong>Resume</strong>
                      </h4>
                      <div className="resume__block_inner">
                        <nav>
                          <div
                            className="nav nav-tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <a
                              className="nav-item nav-link active"
                              id="nav-home-tab"
                              data-toggle="tab"
                              href="#nav-home"
                              role="tab"
                              aria-controls="nav-home"
                              aria-selected="true"
                            >
                              Education
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-profile-tab"
                              data-toggle="tab"
                              href="#nav-profile"
                              role="tab"
                              aria-controls="nav-profile"
                              aria-selected="false"
                            >
                              Experience
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-contact-tab"
                              data-toggle="tab"
                              href="#nav-contact"
                              role="tab"
                              aria-controls="nav-contact"
                              aria-selected="false"
                            >
                              Certification
                            </a>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12 mb-4">
                                <button
                                  type="button"
                                  className="btn btn-md btn-danger"
                                  data-toggle="modal"
                                  data-target="#certificateModalCenter"
                                >
                                  <i className="fa fa-plus font-sm" />
                                </button>
                              </div>

                              {EducationList.map((items) => {
                                // console.log(items);
                                return (
                                  <>
                                    <div
                                      className="col-lg-6 mb-3"
                                      key={items.id}
                                    >
                                      <div className="card border">
                                        <div className="card-body">
                                          <div className="row">
                                            <div className="col-lg-12 mb-4">
                                              <p className="card-text year">
                                                {items.from_year +
                                                  "-" +
                                                  items.to_year}
                                              </p>
                                              <p className="card-text">
                                                {items.title}
                                              </p>
                                              <p className="card-text">
                                                {items.name}
                                              </p>
                                            </div>
                                            <div className="col-lg-12 btn_tab">
                                              {/* <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="#certificateModalCenterEdit"
                                          className="btn btn-success"
                                        >
                                          <i className="fa fa-edit font-sm" />
                                        </a> */}
                                              <a
                                                href="javascript:void(0)"
                                                className="btn btn-outline-dark"
                                                onClick={async () => {
                                                  const response =
                                                    await axios.delete(
                                                      `https://kawotekbackend.elvirainfotech.org/educations/${items.id}`
                                                    );
                                                  console.log(response);
                                                  window.location.reload();
                                                }}
                                              >
                                                <i className="fa fa-trash font-sm" />
                                              </a>
                                              <a
                                                className="btn btn-success"
                                                href="#"
                                              >
                                                <i className="fa fa-download font-sm" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12 mb-4">
                                <button
                                  type="button"
                                  className="btn btn-md btn-danger"
                                  data-toggle="modal"
                                  data-target="#certificateModalCenter2"
                                >
                                  <i className="fa fa-plus font-sm" />
                                </button>
                              </div>

                              {ExperienceList.map((items) => {
                                return (
                                  <>
                                    <div className="col-lg-6 mb-3">
                                      <div className="card border">
                                        <div className="card-body">
                                          <div className="row">
                                            <div className="col-lg-12 mb-4">
                                              <p className="card-text year">
                                                {items.from_year +
                                                  "-" +
                                                  items.to_year}
                                              </p>
                                              <p className="card-text">
                                                {items.title}
                                              </p>
                                              <p className="card-text">
                                                {items.name}
                                              </p>
                                            </div>
                                            <div className="col-lg-12 btn_tab">
                                              {/* <a
                                          href="javascript:void(0)"
                                          className="btn btn-success"
                                        >
                                          <i className="fa fa-edit font-sm" />
                                        </a> */}
                                              <a
                                                href="javascript:void(0)"
                                                className="btn btn-outline-dark"
                                                onClick={async () => {
                                                  const response =
                                                    await axios.delete(
                                                      `https://kawotekbackend.elvirainfotech.org/experience/${items.id}`
                                                    );
                                                  console.log(response);
                                                  window.location.reload();
                                                }}
                                              >
                                                <i className="fa fa-trash font-sm" />
                                              </a>
                                              <a
                                                className="btn btn-success"
                                                href="#"
                                              >
                                                <i className="fa fa-download font-sm" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12 mb-4">
                                <button
                                  type="button"
                                  className="btn btn-md btn-danger"
                                  data-toggle="modal"
                                  data-target="#certificateModalCenter3"
                                >
                                  <i className="fa fa-plus font-sm" />
                                </button>
                              </div>
                              {CertificationList.map((items) => {
                                return (
                                  <>
                                    <div className="col-lg-6 mb-3">
                                      <div className="card border">
                                        <div className="card-body">
                                          <div className="row">
                                            <div className="col-lg-12 mb-4">
                                              <p className="card-text year">
                                                {items.from_year +
                                                  "-" +
                                                  items.to_year}
                                              </p>
                                              <p className="card-text">
                                                {items.title}
                                              </p>
                                              <p className="card-text">
                                                {items.name}
                                              </p>
                                            </div>
                                            <div className="col-lg-12 btn_tab">
                                              {/* <a
                                          href="javascript:void(0)"
                                          className="btn btn-success"
                                        >
                                          <i className="fa fa-edit font-sm" />
                                        </a> */}
                                              <a
                                                href="javascript:void(0)"
                                                className="btn btn-outline-dark"
                                                onClick={async () => {
                                                  const response =
                                                    await axios.delete(
                                                      `https://kawotekbackend.elvirainfotech.org/certification/${items.id}`
                                                    );
                                                  console.log(response);
                                                  window.location.reload();
                                                }}
                                              >
                                                <i className="fa fa-trash font-sm" />
                                              </a>
                                              <a
                                                className="btn btn-success"
                                                href="#"
                                              >
                                                <i className="fa fa-download font-sm" />
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="mycourse_certificate card-horizontal">
                      <div className="row">
                        <div className="col-lg-12">
                          <table
                            id="table_id"
                            className="table table-horizontal tble-responsive"
                          >
                            <thead>
                              <tr>
                                <th translate>Course Name</th>
                                <th translate>Completed Date</th>
                                <th translate>View</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Est quis nulla laborum officia ad nisi ex
                                  nostrud culpa Lorem excepteur aliquip dolor
                                  aliqua irure ex. Nulla ut duis ipsum nisi elit
                                  fugiat commodo sunt reprehenderit laborum
                                  veniam eu veniam.{" "}
                                </td>
                                <td>8/18/21</td>
                                <td>
                                  <button className="btn btn-light-default btn-hvr-primary btn-hvr-primary btn-sm">
                                    <i className="fa fa-eye" />
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* All Modals */}
          <EducationModal />
          <ExperienceModel />
          <CertificationModel />
        </>
      )}
    </Formik>
  );
};

export default EditProfile;
