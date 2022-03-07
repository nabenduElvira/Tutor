import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddLesson from "./popup/AddLesson";
import moment from "moment";
import swal from 'sweetalert';
import ReactHtmlParser from "react-html-parser";

const TutorDetailsSec = () => {
  const [details, setDetails] = useState([]);
  const [grades, setGrades] = useState([]);
  const [allLesson, setAllLesson] = useState([]);
  const [calenderDetails, setCalenderDetails] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [clickEvent, setClickEvent] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [privateLessons, setprivateLessons] = useState([]);
  const [timeSlot, setTimeSlot] = useState([]);
  const [bookingStart, setBookingStart] = useState("");
  const [bookingEnd, setBookingEnd] = useState("");

  const teacher_id = new URLSearchParams(window.location.search).get("d");

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

  useEffect(() => {
    axios.get(`https://kawotekbackend.elvirainfotech.org/private_lesson/${teacher_id}`)
        .then(res => {
            // console.log(res)
            setprivateLessons(res.data)
        })
        .catch(err => {
            // console.log(err)
        })
}, [])


  useEffect(() => {
    // const getPrivateLessons = async () => {
    //   if (teacher_id !== null) {
    //     const response = await axios.get(
    //       `https://kawotekbackend.elvirainfotech.org/private_lesson/${teacher_id}`
    //     );
    //     // console.log(response);
    //     setprivateLessons(response.data);
    //   }
    // };
    // getPrivateLessons();


    const getSingleData = async () => {
      if (teacher_id !== null) {
        const response = await axios.get(
          `https://kawotekbackend.elvirainfotech.org/teachers/${teacher_id}`
        );
        // console.log(response);
        setDetails(response.data);
        if (response.data.teaches !== null) {
          setGrades(JSON.parse(response.data.teaches));
        }
      }
    };
    getSingleData();
    
    
    const getLesson = async () => {
      if (teacher_id !== null) {
        const lessonResponse = await axios.get(
          `https://kawotekbackend.elvirainfotech.org/lessons/teacher/${teacher_id}`
        );
        // console.log(lessonResponse.data.data);
        setAllLesson(lessonResponse.data.data);
      }
    };
    getLesson();
  }, [teacher_id]);

  const newUrl = () => {
    return window.location.href.toString().split(window.location.host)[1];
  };

  useEffect(() => {
    newUrl();

    const getTeacherId = async () => {
      if (JSON.parse(localStorage.getItem("userInfo"))) {
        const res = await axios.get(
          `https://kawotekbackend.elvirainfotech.org/teachers/user/${teacher_id}`
        );
        // console.log(res);
        localStorage.setItem("teacher_id", teacher_id);
      }
    };
    getTeacherId();
  }, []);

  
  const abc = async (e) => {
    //setTimeSlot([]);
    // console.log("hhhhh", moment(e.start).format("DD-MM-YYYY "));
    // // console.log(moment(e.start).format(" h:mm a"));
    // console.log(e.title);
    // console.log(
    //   moment(e.start).format(" h:mm a") + "-" + moment(e.end).format(" h:mm a")
    // );

    setButtonPopup(true);
    setClickEvent(e);
    var duration = moment.duration(moment(e.end).diff(moment(e.start)));
    var hours = duration.asHours();
    var routingTime = moment(e.start);

    //setTimeSlot([]);
    for (var i = 0; i < hours; i++) {
      //=moment(routingTime).add(1,'hour').format('hh:mm:ss');
      let timeStart = moment(routingTime, 'DD-MM-YYYY hh:mm:ss').format('h:mm a');
      let timeStartLong = moment(routingTime, 'DD-MM-YYYY hh:mm:ss').format('YYYY-MM-DD hh:mm:ss');
      routingTime = moment(routingTime, "DD-MM-YYYY hh:mm:ss")
        .add(1, 'hour');
      let timeEnd = moment(routingTime, 'DD-MM-YYYY hh:mm:ss').format('h:mm a');
      let timeEndLong = moment(routingTime, 'DD-MM-YYYY hh:mm:ss').format('YYYY-MM-DD hh:mm:ss');
      let ttm = timeStartLong + '~' + timeEndLong;
      timeSlot.push(ttm);
    }
  };

  const addBookingLessionApi = (post_data) =>{
    return new Promise((resolve, reject) => {
      fetch('https://kawotekbackend.elvirainfotech.org/trials/add', {
        method: 'post',
        body: JSON.stringify(post_data),
        headers: {
          'content-type': 'application/json'
        }
      }).then((res) => res.json())
        .then(data => {
          if (data) {
            resolve({ success: true, data: data })
            swal({
              title: "Your Free Trail Lesson Booked",
              text: "",
              icon: "success",
              timer: 3000,
             
            });
          }
          else {
            resolve({ success: false, data: [] })
          }
        })
        .catch(err => {
          resolve({ success: false, err: err })
        })
    })
  }
  

  const AddBookLesson = async () => {
    // console.log(clickEvent.id);
    // console.log(JSON.parse(localStorage.getItem("userInfo")).id);
    const res = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/schedule-booking/add",
      {
        schedule_id: clickEvent.id,
        student_id: JSON.parse(localStorage.getItem("userInfo")).id,
      }
    );
    if (res.data.status === "1") {
      // console.log(res.data.message);
      setSuccessMsg(res.data.message);

      // Notification API's
      let Date = moment(clickEvent.start).format("DD-MM-YYYY ");
      let Time =
        moment(clickEvent.start).format(" h:mm a") +
        "-" +
        moment(clickEvent.end).format(" h:mm a");

      let studentMessage = `Your class has been booked for Teacher : ${details.first_name + " " + details.last_name
        } , Date & Time : ${Date} ${Time} , Title : ${clickEvent.title}.`;

      let teacherMessage = `Your class has been booked by Student : ${JSON.parse(localStorage.getItem("userInfo")).first_name +
        " " +
        JSON.parse(localStorage.getItem("userInfo")).last_name
        } , Date & Time : ${Date} ${Time} , Title : ${clickEvent.title}.`;

      // console.log(studentMessage);
      // console.log(teacherMessage);

      const StudentNotification = await axios.post(
        "https://kawotekbackend.elvirainfotech.org/notification/add",
        {
          user_id: JSON.parse(localStorage.getItem("userInfo")).id,
          msg: studentMessage,
        }
      );
      // console.log("student-noti", StudentNotification.data);
      if (StudentNotification.data.status === "1") {
        const TeacherNotification = await axios.post(
          "https://kawotekbackend.elvirainfotech.org/notification/add",
          {
            user_id: details.user_id,
            msg: teacherMessage,
          }
        );
        // console.log("teacher-noti", TeacherNotification.data);
      }
    } else {
      // console.log(res.data.message);
      setErrMsg(res.data.message);
    }
  };

  useEffect(
    () => {
      const interval = setInterval(() => {
        setSuccessMsg("");
        setErrMsg("");
      }, 2000);
      return () => clearInterval(interval);
    },
    [errMsg],
    [successMsg]
  );

  useEffect(() => {
    const getSchedule = async () => {
      const response = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/schedule/teacher/${teacher_id}`
      );
      // console.log(response.data.data);
      const schedules = [];
      for (var i = 0; i < response.data.data.length; i++) {
        // console.log(response.data.data[i]);
        schedules.push({
          id: response.data.data[i].id,
          title: response.data.data[i].title,
          start: new Date(response.data.data[i].start),
          end: new Date(response.data.data[i].end),
        });
      }

      setCalenderDetails(schedules);
    };
    getSchedule();
  });
  const addNotificationApi = (post_data) => {
    return new Promise((resolve, reject) => {
      fetch('https://kawotekbackend.elvirainfotech.org/notification/add', {
        method: 'post',
        body: JSON.stringify(post_data),
        headers: {
          'content-type': 'application/json'
        }
      }).then((res) => res.json())
        .then(data => {
          if (data) {
            resolve({ success: true, data: data })
          }
          else {
            resolve({ success: false, data: [] })
          }
        })
        .catch(err => {
          resolve({ success: false, err: err })
        })
    })
  }

  function bookClass(start, end){
    setBookingStart(start);
    setBookingEnd(end);
  }

  function addBookingLessionNew() { 
    let student_id = JSON.parse(localStorage.getItem("userInfo")).id;
    let teacher_id = new URLSearchParams(window.location.search).get("d");
    let start_times = bookingStart;
    let end_times = bookingEnd;
    let lessons = clickEvent.title;
    let api_data={
      'student_id': student_id,
      'teacher_id': teacher_id,
      'start_times': start_times,
      'end_times': end_times,
      'lessons': lessons
    };
    //console.log('title', lessons);
    addBookingLessionApi(api_data).then(data => {
        if(data.data){
          if (data.data.status === "1") {
            // console.log(res.data.message);
            setSuccessMsg(data.data.message);

            // Notification API's
            let Date = moment(start_times).format("DD-MM-YYYY ");
            let Time =
              moment(start_times).format(" h:mm a") +
              "-" +
              moment(end_times).format(" h:mm a");

            let studentMessage = `Your class has been booked for Teacher : ${details.first_name + " " + details.last_name
              } , Date & Time : ${Date} ${Time} , Title : ${clickEvent.title}.`;

            let teacherMessage = `Your class has been booked by Student : ${JSON.parse(localStorage.getItem("userInfo")).first_name +
              " " +
              JSON.parse(localStorage.getItem("userInfo")).last_name
              } , Date & Time : ${Date} ${Time} , Title : ${clickEvent.title}.`;

            // console.log(studentMessage);
            // console.log(teacherMessage);
            let not_post_data={
              'user_id': JSON.parse(localStorage.getItem("userInfo")).id,
              'msg': studentMessage
            }
            addNotificationApi(not_post_data).then(data => {
              if (data.data) {
                // console.log('student_noti',data.data);
              }
            });
            let not_post_data_teacher = {
              'user_id': new URLSearchParams(window.location.search).get("d"),
              'msg': teacherMessage
            }
            addNotificationApi(not_post_data_teacher).then(data => {
              if (data.data) {
                // console.log('teacher_noti', data.data);
              }
            });

          } else {
            // console.log(res.data.message);
            setErrMsg(data.data.message);
          }
          //console.log(data.data);
        }
    });
  }
 /*  const bookClass = (start, end) => {
    console.log('start', start);
  }; */


  // console.log(details);

  return (
    <div>
      <section className="tutor_details_page bg_color_gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="td_left_side">
                <div className="td_profile mb-4">
                  <div className="td_profile_banner">
                    {/* <img src="images/teacher_profile_banner.jpg" alt="" /> */}
                    <iframe
                      width="730"
                      height="315"
                      src={`https://www.youtube.com/embed/${details.youtube_id}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="td_profile_full">
                    <div className="td_profile_media">
                      <div className="media">
                        <div className="media-left">
                          <div className="td_profile_img">
                            {/* <img
                              className="media-object"
                              src="images/teacher1.jpg"
                              alt=""
                            /> */}
                            {details.image !== null && details.image !== "" ? (
                              <img
                                src={`https://kawotekbackend.elvirainfotech.org/public/images/uploads/${details.image}`}
                                alt=""
                              />

                            ) : (
                              <img
                                src={`https://ui-avatars.com/api/?name=${details.first_name}+${details.last_name}`}
                                alt=""
                              />
                            )}
                          </div>
                        </div>

                        <div className="media-body">
                          <div className="td_teacher_name d-flex">
                            <h3>
                              {details.first_name + " " + details.last_name}
                            </h3>
                            <ul>
                              <li>
                                <img src="images/sec_star.png" alt="" />
                              </li>
                              <li>4.5</li>
                            </ul>
                          </div>
                          <div className="td_feature_list">
                            <ul>
                              <li>
                                {/* <span className="td_i">
                                  <img src="images/country_flag.png" alt="" />
                                </span> */}
                                <strong>
                                  Teaches :
                                  <span className="txt_color_green">
                                    {" " + details.subject}
                                  </span>
                                </strong>
                              </li>
                              <li>
                                {/* <span className="td_i">
                                  <img src="images/globe_icon.png" alt="" />
                                </span> */}
                                <strong>
                                  Country :
                                  <span className="txt_color_green">
                                    {" " + details.country}
                                  </span>
                                </strong>
                              </li>
                              <li>
                                {/* <span className="td_i">
                                  <img src="images/clock_icon.png" alt="" />
                                </span> */}
                                <strong>
                                  Gender :
                                  <span className="txt_color_green">
                                    {" " + details.gender}
                                  </span>
                                </strong>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="td_profile_content">
                      <h3>About Me</h3>
                      <Markup content={details.about} />
                    </div>
                  </div>
                </div>
                <div className="teacher_stats comman_box_shadow mb-4">
                  <h2 className="box_subtitle">Teacher Stats</h2>
                  <div className="teacher_stat_area">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 t_stat_box_main">
                        <div className="t_stat_box">
                          <img src="images/t_stat_clock.png" alt="" />
                          <p>Response Time</p>
                          <h4>{details.response_time}</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 t_stat_box_main">
                        <div className="t_stat_box">
                          <img src="images/t_stat_calendar.png" alt="" />
                          <p>Joined Verbling</p>
                          <h4>4 year ago</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 t_stat_box_main">
                        <div className="t_stat_box">
                          <img src="images/t_stat_location.png" alt="" />
                          <p>Attedence Rate</p>
                          <h4>100%</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 t_stat_box_main">
                        <div className="t_stat_box">
                          <img src="images/t_stat_lessions.png" alt="" />
                          <p>Total Lessions</p>
                          <h4>{details.lession_include}</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 t_stat_box_main">
                        <div className="t_stat_box">
                          <img src="images/t_stat_student.png" alt="" />
                          <p>Lessions per Students</p>
                          <h4>15.6 lession average</h4>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 t_stat_box_main">
                        <div className="t_stat_box">
                          <img src="images/t_stat_star.png" alt="" />
                          <p>Average Rating</p>
                          <h4>5.0</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="td_schedule comman_box_shadow mb-4">
                  <h2 className="box_subtitle">Scheduler</h2>
                  <div className="schedule_popup">
                    <Calendar
                      // selectable
                      step={15}
                      localizer={localizer}
                      events={calenderDetails}
                      startAccessor="start"
                      defaultView="week"
                      views={["week"]}
                      endAccessor="end"
                      // scrollToTime={new Date()}
                      // defaultDate={new Date()}
                      onSelectEvent={abc} //{(event) => console.log(event)}
                      // onSelectSlot={handleSelect}
                      style={{ height: 450 }}
                    />
                  </div>
                </div>

                <div className="teaching_exp comman_box_shadow mb-4">
                  <h2 className="box_subtitle">Teaching Expertise</h2>
                  <div className="teach_exp_box">
                    <h4>Grades</h4>
                    <ul>
                      {grades.map((items, index) => {
                        return <li key={index}>{items}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="teach_exp_box">
                    <h4>Accents</h4>
                    <ul>{details.accents}</ul>
                  </div>
                  <div className="teach_exp_box">
                    <h4>Lessons</h4>
                    <ul>
                      {allLesson.map((items) => {
                        // console.log(items);
                        return <li key={items.id}>{items.title}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="teach_exp_box">
                    <h4>Subject</h4>
                    <ul>{details.subject}</ul>
                  </div>
                </div>
                <div className="comman_box_shadow mb-4">
                  <h2 className="box_subtitle">Resume</h2>
                  <div className="resume_edu">
                    <div className="resume_edu_title">
                      <h3>
                        <span>
                          <img src="images/resume_edu_icon.png" alt="" />
                        </span>
                        Education
                      </h3>
                    </div>
                    <div className="resume_media">
                      <div className="media">
                        <div className="media-left">
                          <p>2014-2017</p>
                        </div>
                        <div className="media-body">
                          <h4>MS Psychology</h4>
                          <p>State University</p>
                        </div>
                      </div>
                    </div>
                    <div className="resume_media">
                      <div className="media">
                        <div className="media-left">
                          <p>2014-2017</p>
                        </div>
                        <div className="media-body">
                          <h4>MS Psychology</h4>
                          <p>State University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resume_edu">
                    <div className="resume_edu_title">
                      <h3>
                        <span>
                          <img src="images/resume_bag_icon.png" alt="" />
                        </span>
                        Work Experience
                      </h3>
                    </div>
                    <div className="resume_media">
                      <div className="media">
                        <div className="media-left">
                          <p>2014-2017</p>
                        </div>
                        <div className="media-body">
                          <h4>MS Psychology</h4>
                          <p>State University</p>
                        </div>
                      </div>
                    </div>
                    <div className="resume_media">
                      <div className="media">
                        <div className="media-left">
                          <p>2014-2017</p>
                        </div>
                        <div className="media-body">
                          <h4>MS Psychology</h4>
                          <p>State University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resume_edu">
                    <div className="resume_edu_title">
                      <h3>
                        <span>
                          <img
                            src="images/resume_certificate_icon.png"
                            alt=""
                          />
                        </span>
                        Certificates
                      </h3>
                    </div>
                    <div className="resume_media">
                      <div className="media">
                        <div className="media-left">
                          <p>2014-2017</p>
                        </div>
                        <div className="media-body">
                          <h4>MS Psychology</h4>
                          <p>State University</p>
                        </div>
                      </div>
                    </div>
                    <div className="resume_media">
                      <div className="media">
                        <div className="media-left">
                          <p>2014-2017</p>
                        </div>
                        <div className="media-body">
                          <h4>MS Psychology</h4>
                          <p>State University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {JSON.parse(localStorage.getItem("userInfo")) ? (
              <>
                {JSON.parse(localStorage.getItem("userInfo")).id ===
                  details.user_id ? (
                  ""
                ) : (
                  <div className="col-lg-4 md_res_mar_top_30">
                    <div className="td_right_side sidebar_stcky">
                      <div className="comman_box_shadow mb-4">
                        <div className="vidget_title">
                          <h3>Trial Lesson</h3>
                          <p>One time, 30 minutes</p>
                        </div>
                        <div className="lession_price_area">
                          <div className="lession_price_box d-flex">
                            <div className="lp_left">
                              <h4>Trial Lesson</h4>
                            </div>
                            <div className="lp_right">
                              <h3>Free</h3>
                              <p>30 min</p>
                            </div>
                          </div>
                          <div className="lession_book">
                            <Link
                              className="lession_btn"
                              to={newUrl}

                              onClick={() => {
                                alert("hello check out")
                              }}
                            // onClick={() => setHide(true)}
                            >
                              Book Free Trial
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="comman_box_shadow ">
                        {/* <div className="vidget_title"> */}
                        <h3>Private Lessons</h3>
                        <p>60 minutes</p>

                        {/* <p>
                            {parseInt(totalLessonHours / 60) === 0
                              ? ""
                              : parseInt(totalLessonHours / 60) + "h"}{" "}
                            {parseInt(totalLessonHours % 60) === 0
                              ? ""
                              : parseInt(totalLessonHours % 60) + "m"}
                          </p> */}
                        {/* </div> */}

                        {/* Showing teacher's private lessons by id */}


                        {/* <div className="lession_price_area">

                          {
                            privateLessons.map((pvt_lesson) => {

                              return (
                                <a href="#">
                                  <div className="lession_price_box d-flex">
                                    <div className="lp_left">
                                      <h4>{pvt_lesson.lessons} Lesson</h4>
                                    </div>
                                    <div className="lp_right">
                                      <h3> ₦ {pvt_lesson.amount}</h3>
                                      <p>per hour</p>
                                    </div>
                                  </div>
                                </a>
                              )
                            })
                          }
                          <div className="lession_book">
                            <Link
                              className="lession_btn"
                              to={newUrl}

                              onClick={() => {
                                alert("hello check out")
                              }}
                            >
                              Book Now
                            </Link>
                          </div>

                        </div> */}


                        <div className="lession_price_area">
                          {
                            privateLessons.map((pvt_lesson)=>{
                              return(
                                <div className="lession_price_panel" key={pvt_lesson.id}>
                                <a href="#">
                                  <div className="lession_price_box d-flex">
                                    <div className="lp_left">
                                      <h4>{pvt_lesson.lessons} Lessons</h4>
                                    </div>
                                    <div className="lp_right">
                                      <h3> ₦ {pvt_lesson.amount}</h3>
                                      <p>per hour</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              )
                            })
                          }
                           <div className="lession_book">
                            <Link
                              className="lession_btn"
                              to={newUrl}

                              onClick={() => {
                                alert("hello check out")
                              }}
                            // onClick={() => setHide(true)}
                            >
                              Book Now
                            </Link>
                          </div>
                         
                          
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="col-lg-4 md_res_mar_top_30">
                <div className="td_right_side sidebar_stcky">
                  <div className="comman_box_shadow mb-4">
                    <div className="vidget_title">
                      <h3>Trial Lesson</h3>
                      <p>One time, 30 minutes</p>
                    </div>
                    <div className="lession_price_area">
                      <div className="lession_price_box d-flex">
                        <div className="lp_left">
                          <h4>Trial Lesson</h4>
                        </div>
                        <div className="lp_right">
                          <h3>Free</h3>
                          <p>30 min</p>
                        </div>
                      </div>
                      <div className="lession_book">
                        <Link
                          className="lession_btn"
                          to={newUrl}
                        // onClick={() => setHide(true)}
                        >
                          Book Free Trial
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="comman_box_shadow ">
                    {/* <div className="vidget_title"> */}
                    <h5><b>Private Lessons</b></h5>
                    {/* <p>
                      {parseInt(totalLessonHours / 60) === 0
                        ? ""
                        : parseInt(totalLessonHours / 60) + "h"}{" "}
                      {parseInt(totalLessonHours % 60) === 0
                        ? ""
                        : parseInt(totalLessonHours % 60) + "m"}
                    </p> */}

                    {/* </div> */}
                    <div className="lession_price_area">
                      {/* {allLesson.map((ls) => {
                      return (
                        <div className="lession_price_box d-flex" key={ls.id}>
                          <div className="lp_left">
                            <h4>{ls.title} </h4>
                          </div>
                          <div className="lp_right">
                            <h3>₹{ls.price}</h3>
                            <p>
                              {parseInt(ls.time / 60) === 0
                                ? ""
                                : parseInt(ls.time / 60) + "h"}{" "}
                              {parseInt(ls.time % 60)}m
                            </p>
                          </div>
                        </div>
                      );
                    })} */}

                      {/* <div className="lession_price_box d-flex">
                      <div className="lp_left">
                        <h4>5 Lesson </h4>
                      </div>
                      <div className="lp_right">
                        <h3>₹2,289.59</h3>
                        <p>per hour</p>
                      </div>
                    </div> */}
                      {/* <div className="lession_price_box d-flex">
                      <div className="lp_left">
                        <h4>10 Lesson </h4>
                      </div>
                      <div className="lp_right">
                        <h3>₹2,289.59</h3>
                        <p>per hour</p>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="lession_price_area">
              <AddLesson trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="col-lg-12">
                  <p
                    style={{
                      color: "red",
                      textAlign: "center",
                      fontSize: 14,
                      marginBottom: 0,
                    }}
                  >
                    {errMsg}
                  </p>
                </div>
                <div className="col-lg-12">
                  <p
                    style={{
                      color: "green",
                      textAlign: "center",
                      fontSize: 14,
                      marginBottom: 0,
                    }}
                  >
                    {successMsg}
                  </p>
                </div>
                <div className="sche-pophead">
                  <div className="sche-avatar">
                    {details.image !== null && details.image !== "" ? (
                      <img
                        src={`https://kawotekbackend.elvirainfotech.org/public/images/uploads/${details.image}`}
                        alt=""
                      />
                    ) : (
                      <img
                        src={`https://ui-avatars.com/api/?name=${details.first_name}+${details.last_name}`}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="sche-avatar-title">
                    <div className="name">
                      {details.first_name + " " + details.last_name}
                    </div>
                    {/* <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div> */}
                  </div>
                </div>
                <div className="sche-cardbody">
                  <div className="sched__inner">
                    <div className="sche-date">
                      <strong>Date:</strong>
                      <div className="timedt">
                        {moment(clickEvent.start).format("DD-MM-YYYY ")}
                      </div>
                    </div>
                    <div className="sche-date">
                      <strong>Time:</strong>
                      <div className="timedt">
                        <ul className="booking_time_slot">
                        {
                          timeSlot.map((ts) => {
                            let darr=ts.split('~');
                            let start=darr[0];
                            let end=darr[1];
                            return (
                              <li>
                                <a href="#" className="btn btn-outline-info" onClick={function () { bookClass(start, end) }}>{moment(start, 'DD-MM-YYYY hh:mm:ss').format('h:mm a')} - {moment(end, 'DD-MM-YYYY hh:mm:ss').format('h:mm a')}</a>
                              </li> 
                              
                            )
                          })
                          
                        }
                        
                        </ul>
                        <input id="bookingStartInput" type={'hidden'} value={bookingStart}></input>
                        <input id="bookingEndInput" type={'hidden'} value={bookingEnd}></input>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    // onClick={addBookingLessionNew}
                    className="btn btn-success w-100 mt-2"
                  >
                    Book Lesson
                  </button>
                  <button type="button" onClick={addBookingLessionNew} className="btn btn-success w-100 mt-2">
                    Book free Class
                  </button>
                </div>
              </AddLesson>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorDetailsSec;
