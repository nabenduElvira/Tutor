import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "react-select";
import { Country } from "country-state-city";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import AddLesson from "./popup/AddLesson";

import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const UpdateProfileScreen = () => {
  const [saveData, setSaveData] = useState(null);
  const [language, setLanguage] = useState([]);
  const [subject, setSubject] = useState();
  const [user_id, setuser_id] = useState("");
  const [calenderDetails, setCalenderDetails] = useState([]);
  const [LessonsDetails, setLessonsDetails] = useState([]);
  const [TeacherAccents, setTeacherAccents] = useState([]);
  const [TeacherSubject, setTeacherSubject] = useState([]);
  const [TeacherSubjectLists, setTeacherSubjectLists] = useState([]);

  const details = calenderDetails;
  // console.log(details);

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(details);

  const getCalenderData = () => {
    fetch("https://kawotekbackend.elvirainfotech.org/trials")
      .then((response) => response.json())
      .then((data) => setCalenderDetails(getSingleData(data)))
      .catch((err) => console.error(err));
    // console.log("trainings:", trainings);
    // console.log(calenderDetails);

    const getSingleData = (data) => {
      // console.log(data);
      var Calender = [];
      for (var i = 0; i < data.length; i++) {
        // console.log("ffff", data[i]);

        var currentTime = moment(
          moment(data[i].times).format("YYYY-MM-DD h:mm:ss a")
        );
        // console.log(moment(currentTime).format("hh:mm"));
        Calender.push({
          title: moment(currentTime).format("hh:mm"),
          start: data[i].times,
          end: data[i].times,
        });
      }
      return Calender;
    };
  };

  //   const getLesson = async () => {
  //     const getLessonDetails = await axios.get(
  //       `https://kawotekbackend.elvirainfotech.org/lessons`
  //     );
  //     // console.log(getLessonDetails.data);
  //     setLessonsDetails(getLessonDetails.data);
  //   };

  useEffect(() => {
    getCalenderData();
    // getLesson();
  });

  async function handleAddEvent() {
    const response = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/trials/add",
      {
        teacher_id: JSON.parse(localStorage.getItem("userInfo")).id,
        times: newEvent.start,
      }
    );
    console.log(response.data.message);
    setAllEvents([...allEvents, newEvent]);
  }

  // console.log(allEvents);
  // console.log(newEvent.start);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    description: "",
    education: "",
    experience: "",
    certificate: "",
    teaches_from: "",
  };

  const teacher_id = new URLSearchParams(window.location.search).get("i");

  useEffect(() => {
    const getTeacherData = async () => {
      const response = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/teachers/${teacher_id}`
      );
      // console.log(JSON.parse(response.data.subject));
      // console.log(JSON.parse(response.data.accents));
      setuser_id(response.data.user_id);
      setTeacherAccents(response.data.accents);
      setTeacherSubject(JSON.parse(response.data.subject));

      const getLessonDetails = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/lessons`
      );
      // console.log(getLessonDetails.data);
      setLessonsDetails(getLessonDetails.data);

      const saveValues = {
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        email: response.data.email,
        phone: response.data.phone,
        description: response.data.about,
        teaches_from: response.data.teaches_from,
        certificate: response.data.certificate,
        education: response.data.education,
        experience: response.data.work_exp,
      };
      setSaveData(saveValues);
    };
    getTeacherData();

    const getLanguage = async () => {
      const response = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/languages`
      );
      // console.log(response.data);
      var AllLanguage = [];
      for (var i = 0; i < response.data.length; i++) {
        // console.log("ffff", response.data[i]);
        AllLanguage.push({
          value: response.data[i].name,
          label: response.data[i].name,
        });
      }
      // console.log(AllLanguage);
      setLanguage(AllLanguage);
    };
    getLanguage();

    const getSubject = async () => {
      const response = await axios.get(
        "https://kawotekbackend.elvirainfotech.org/subjects"
      );
      // console.log(response.data);
      var AllSubject = [];
      for (var i = 0; i < response.data.length; i++) {
        // console.log(response.data[i]);
        AllSubject.push({
          value: response.data[i].name,
          label: response.data[i].name,
        });
      }
      // console.log(AllSubject);
      setSubject(AllSubject);
    };
    getSubject();

    const getTeacherSubjectList = () => {
      var AllTeacherSubject = [];
      TeacherSubject.map((items) => {
        // console.log(items);
        AllTeacherSubject.push({
          value: items,
          label: items,
        });
      });
      setTeacherSubjectLists(AllTeacherSubject);
      // console.log(AllTeacherSubject);
    };
    getTeacherSubjectList();
  }, [teacher_id]);

  const validationSchema = Yup.object().shape({
    // first_name: Yup.string()
    //   .matches(
    //     /^[a-zA-Z]+$/,
    //     "Only alphabets are allowed and check blank spaces for this field"
    //   )
    //   .required("First Name is required"),
    // last_name: Yup.string()
    //   .matches(
    //     /^[a-zA-Z]+$/,
    //     "Only alphabets are allowed and check blank spaces for this field"
    //   )
    //   .required("Last Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    // phone: Yup.string()
    //   .matches(/^[0-9]*$/, "Only number is allowed")
    //   .min(5, "Phone number must be at least 5 characters")
    //   .required("Phone number is required"),
  });

  async function onSubmit(values, actions) {
    values["language"] = JSON.stringify(languageList);
    values["subject"] = JSON.stringify(subjectList);
    values["accents"] = JSON.stringify(tags);
    console.log(values);
    const updateTeacher = await axios.put(
      `https://kawotekbackend.elvirainfotech.org/teachers/${teacher_id}`,
      {
        subject: values.subject,
        about: values.description,
        accents: values.accents,
        education: values.education,
        work_exp: values.experience,
        certificate: values.certificate,
        teaches_from: values.teaches_from,
      }
    );
    // console.log(updateTeacher);
    const updateUser = await axios.put(
      `https://kawotekbackend.elvirainfotech.org/users/${user_id}`,
      {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        phone: values.phone,
      }
    );
    // console.log(updateUser);
  }

  // var AllTeacherSubject = [];
  // TeacherSubject.map((items) => {
  //   // console.log(items);
  //   AllTeacherSubject.push({
  //     value: items,
  //     label: items,
  //   });
  // });
  // console.log(AllTeacherSubject);
  // setTeacherSubjectLists(AllTeacherSubject);

  // get All Countries
  const country = Country.getAllCountries();

  // Options
  const Languages = language;
  const Subjects = subject;
  const Teacher_subject = TeacherSubjectLists;

  // Get Selected Data
  const [languageList, setLanguageList] = useState();
  const [subjectList, setSubjectList] = useState();
  const [TeacherSubjectList, setTeacherSubjectList] = useState();

  const GetLanguages = (e) => {
    setLanguageList(Array.isArray(e) ? e.map((a) => a.value) : []);
  };
  // console.log("languages", JSON.stringify(languageList));

  const GetSubjects = (e) => {
    setSubjectList(Array.isArray(e) ? e.map((c) => c.value) : []);
  };
  // console.log("Subject", JSON.stringify(subjectList));

  const GetTeacherSubjects = (e) => {
    setTeacherSubjectList(Array.isArray(e) ? e.map((c) => c.value) : []);
  };
  // console.log("TeacherSubject", TeacherSubjectList);

  //  -------Add Lesson Popup Start-------
  const [buttonPopup, setButtonPopup] = useState(false);
  const [Lesson, setLesson] = useState("");
  const [Lesson_type, setLesson_type] = useState("");
  const [Lesson_time, setLesson_time] = useState("");
  const [Lesson_price, setLesson_price] = useState("");
  const [popupClose, setPopupClose] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [tags, setTags] = useState([]);

  const getAddLessonPopup = () => {
    setSuccessMsg("");
    setButtonPopup(true);
  };

  const AddLessonPopupSubmit = async () => {
    const createLesson = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/lessons/add",
      {
        title: Lesson,
        quantity: Lesson_type,
        teacher_id: teacher_id,
        time: Lesson_time,
        price: Lesson_price,
        subject: JSON.stringify(TeacherSubjectList),
      }
    );
    // console.log(createLesson.data);
    setPopupClose(createLesson.data.status);
    setSuccessMsg(createLesson.data.message);
  };

  useEffect(() => {
    if (popupClose !== "") {
      setTimeout(() => {
        setButtonPopup(false);
      }, 1500);
    }
  }, [popupClose]);

  //  -------Add Lesson Popup Start-------

  // --------Scroll Up Start---------
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // --------Scroll Up End--------
  // console.log(TeacherSubjectLists);
  return (
    <Formik
      initialValues={saveData || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ errors, touched, isSubmitting }) => (
        <section className="tutor_details_page bg_color_gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <Form>
                  <div className="td_left_side">
                    {/*  */}
                    <div className="Teachers_Profile comman_box_shadow mb-4">
                      <h2 className="box_subtitle2">Teachers Profile</h2>
                      <div className="Teachers_Profile">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
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
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
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
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
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
                                placeholder="Your email address..."
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
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
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                            <div className="form-group">
                              <Select
                                isMulti
                                placeholder="Select Language"
                                options={Languages}
                                onChange={GetLanguages}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                            <div className="form-group">
                              <ReactTagInput
                                tags={tags}
                                placeholder="Please type accents and press enter"
                                onChange={(newTags) => setTags(newTags)}
                              />
                              {/* <Field
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.accents && touched.accents
                                    ? " is-invalid"
                                    : "")
                                }
                                name="accents"
                                placeholder="Enter Accents"
                              /> */}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                            <div className="form-group">
                              {/* <Select
                                isMulti
                                placeholder="Select Country"
                                options={Countries}
                                onChange={GetCountries}
                                // selectedValue={label: 'Any', value: 'Any'}
                                // defaultValue={{
                                //   label: teacherDetails.teaches_from,
                                //   value: "",
                                // }}
                              /> */}
                              <Field
                                name="teaches_from"
                                as="select"
                                className={
                                  "form-control" +
                                  (errors.teaches_from && touched.teaches_from
                                    ? "is-invalid"
                                    : "")
                                }
                              >
                                <option value="">Select Country</option>
                                {country.map((items) => {
                                  return (
                                    <option value={items.name}>
                                      {items.name}
                                    </option>
                                  );
                                })}
                              </Field>
                              <ErrorMessage
                                name="teaches_from"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Teachers_Profile comman_box_shadow mb-4">
                      <h2 className="box_subtitle2">Description</h2>
                      <div className="Teachers_Profile">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 Teachers_Profile_main">
                            <div className="form-group">
                              <Field
                                type="text"
                                rows={4}
                                as="textarea"
                                placeholder="About Me"
                                name="description"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Teachers_Profile comman_box_shadow mb-4">
                      <h2 className="box_subtitle2">Teaching Expertise</h2>
                      <div className="Teachers_Profile">
                        <div className="row">
                          <div className="col-lg-12 col-md-6 col-sm-6 Teachers_Profile_main">
                            <div className="form-group">
                              <Select
                                isMulti
                                placeholder="Select Subject"
                                options={Subjects}
                                onChange={GetSubjects}
                                // defaultValue={TeacherSubjectLists}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="Teachers_Profile comman_box_shadow mb-4">
                      <h2 className="box_subtitle2">Lessons</h2>
                      <div className="Teachers_Profile">
                        <button
                          type="button"
                          className="btn btn-success add_btn"
                          style={{ marginTop: -30 }}
                          onClick={() => getAddLessonPopup()}
                        >
                          Add
                        </button>
                        <AddLesson
                          trigger={buttonPopup}
                          setTrigger={setButtonPopup}
                        >
                          <p style={{ color: "green" }}>{successMsg}</p>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                              <div className="form-group">
                                {/* nnnnn */}
                                <Select
                                  isMulti
                                  placeholder="Select Subject"
                                  options={Teacher_subject}
                                  onChange={GetTeacherSubjects}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
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
                            <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="lesson_type"
                                  placeholder="Enter Lesson Type"
                                  onChange={(e) =>
                                    setLesson_type(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="lesson_time"
                                  placeholder="Enter Lesson Time"
                                  onChange={(e) =>
                                    setLesson_time(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
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
                        </AddLesson>

                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Subject</th>
                              <th scope="col">Lesson</th>
                              <th scope="col">Lesson Type</th>
                              <th scope="col">Time</th>
                              <th scope="col">Price</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            {LessonsDetails.map((details, index) => {
                              return (
                                <>
                                  <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{JSON.parse(details.subject)}</td>
                                    <td>{details.title}</td>
                                    <td>{details.quantity}</td>
                                    <td>{details.time}</td>
                                    <td>{details.price}</td>
                                    <td>
                                      <i
                                        className="fa fa-trash-o"
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

                        {/* <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                            <div className="form-group">
                              <Field
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.lesson && touched.lesson
                                    ? " is-invalid"
                                    : "")
                                }
                                name="lesson"
                                placeholder="Enter Lesson"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                            <div className="form-group">
                              <Field
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.lesson_type && touched.lesson_type
                                    ? " is-invalid"
                                    : "")
                                }
                                name="lesson_type"
                                placeholder="Enter Lesson Type"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                            <div className="form-group">
                              <Field
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.lesson_time && touched.lesson_time
                                    ? " is-invalid"
                                    : "")
                                }
                                name="lesson_time"
                                placeholder="Enter Lesson Time"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 Teachers_Profile_main">
                            <div className="form-group">
                              <Field
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.lesson_price && touched.lesson_price
                                    ? " is-invalid"
                                    : "")
                                }
                                name="lesson_price"
                                placeholder="Enter Lesson Price Per Hour"
                              />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>

                    <div className="Teachers_Profile comman_box_shadow mb-4">
                      <h2 className="box_subtitle2">Resume</h2>
                      <div className="Teachers_Profile">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 Teachers_Profile_main">
                            <div className="form-group">
                              <div className="row">
                                <div className="col-lg-12">
                                  <Field
                                    type="text"
                                    rows={4}
                                    as="textarea"
                                    placeholder="Education"
                                    // defaultValue={""}
                                    name="education"
                                    className={
                                      "form-control" +
                                      (errors.education && touched.education
                                        ? " is-invalid"
                                        : "")
                                    }
                                  />
                                  <ErrorMessage
                                    name="education"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                                </div>
                                {/* <div className="col-lg-5">
                                  <input
                                    type="file"
                                    id="education"
                                    name="education"
                                  />
                                  <input
                                    name="education_file"
                                    type="file"
                                    onChange={(e) => {
                                      setFieldValue("file", e.target.files[0]);
                                    }}
                                  />
                                </div> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 Teachers_Profile_main">
                            <div className="form-group">
                              <div className="row">
                                <div className="col-lg-12">
                                  <Field
                                    type="text"
                                    rows={4}
                                    as="textarea"
                                    placeholder="Experience"
                                    // defaultValue={""}
                                    name="experience"
                                    className={
                                      "form-control" +
                                      (errors.experience && touched.experience
                                        ? " is-invalid"
                                        : "")
                                    }
                                  />
                                  {/* <textarea
                                    className="form-control"
                                    rows={4}
                                    placeholder="Experience"
                                    // defaultValue={""}
                                  /> */}
                                </div>
                                {/* <div className="col-lg-5">
                                  <input
                                    type="file"
                                    id="experience"
                                    name="experience"
                                  />
                                </div> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 Teachers_Profile_main">
                            <div className="form-group">
                              <div className="row">
                                <div className="col-lg-12">
                                  <Field
                                    type="text"
                                    rows={4}
                                    as="textarea"
                                    placeholder="Certificates"
                                    // defaultValue={""}
                                    name="certificate"
                                    className={
                                      "form-control" +
                                      (errors.certificate && touched.certificate
                                        ? " is-invalid"
                                        : "")
                                    }
                                  />
                                  {/* <textarea
                                    className="form-control"
                                    rows={4}
                                    placeholder="Certificates"
                                    defaultValue={""}
                                  /> */}
                                </div>
                                {/* <div className="col-lg-5">
                                  <input
                                    type="file"
                                    name="certificates"
                                    id="certificates"
                                  />
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="Teachers_Profile comman_box_shadow mb-4">
                      <h2 className="box_subtitle2">Calender</h2>
                      <div className="Teachers_Profile">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 Teachers_Profile_main">
                            <h2>Add Book Free Trial</h2>
                            <div className="form-group">
                              {/* hhhhhhhhhhh */}
                              <div>
                                {/* <input
                                  type="text"
                                  placeholder="Add Title"
                                  style={{ width: "20%", marginRight: "10px" }}
                                  value={newEvent.title}
                                  onChange={(e) =>
                                    setNewEvent({
                                      ...newEvent,
                                      title: e.target.value,
                                    })
                                  }
                                /> */}
                                <DatePicker
                                  showTimeSelect
                                  placeholderText="Start Date"
                                  style={{ marginRight: "10px" }}
                                  selected={newEvent.start}
                                  onChange={(start) =>
                                    setNewEvent({ ...newEvent, start })
                                  }
                                />
                                {/* <DatePicker
                                  // showTimeSelect
                                  placeholderText="End Date"
                                  selected={newEvent.end}
                                  onChange={(end) =>
                                    setNewEvent({ ...newEvent, end })
                                  }
                                /> */}
                                <button
                                  stlye={{ marginTop: "10px" }}
                                  onClick={handleAddEvent}
                                >
                                  Add Trials
                                </button>
                              </div>
                              <Calendar
                                localizer={localizer}
                                events={calenderDetails}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500, margin: "50px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="Teachers_Profile mb-4">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-6 d-flex justify-content-center">
                          {/* <button
                              type="button"
                              className="btn btn-success ph"
                            >
                              UPDATE
                            </button> */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-success ph"
                          >
                            {isSubmitting && (
                              <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            UPDATE
                          </button>
                          <button type="button" className="btn btn-danger">
                            CANCEL
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
              <div className="col-lg-3 md_res_mar_top_30">
                <div className="td_right_side sidebar_stcky">
                  <div className="comman_box_shadow mb-4">
                    <div className="ima_area">
                      <img src="images/tutor-profile.jpg" alt="" />
                    </div>
                    <div className="lession_price_area">
                      <div className="lession_book d-flex justify-content-center">
                        <button type="button" className="btn btn-success ph">
                          CHANGE
                        </button>
                        <button type="button" className="btn btn-danger">
                          CLEAR
                        </button>
                      </div>
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

export default UpdateProfileScreen;
