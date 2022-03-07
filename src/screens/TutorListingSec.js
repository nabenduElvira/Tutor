import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Markup } from "interweave";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";


const TutorListingSec = () => {
  const [allTeachers, setAllTeachers] = useState([]);
  const [TeacherList, setTeacherList] = useState([]);
  const [rightCard, setRightCard] = useState([]);
  const [teacher_id, setTeacher_id] = useState("");
  const [calenderDetails, setCalenderDetails] = useState([]);
  const [clickEvent, setClickEvent] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [FavouriteStatus, setFavouriteStatus] = useState("");
  const [Filter, setFilter] = useState({
    subject: "",
    searchText: "",
  })

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


  const abc = (e) => {
    console.log("hhhhh", moment(e.start).format("DD-MM-YYYY "));
    // console.log(moment(e.start).format(" h:mm a"));
    console.log(e.title);
    console.log(
      moment(e.start).format(" h:mm a") + "-" + moment(e.end).format(" h:mm a")
    );

    setButtonPopup(true);
    setClickEvent(e);
  };


  async function getEventData(id) {
    // console.log(id);
    setTeacher_id(id);
    const response = await axios.get(
      `https://kawotekbackend.elvirainfotech.org/teachers/${id}`
    );
    // console.log(response.data);
    setRightCard(response.data);
  }


  useEffect(() => {
    const getTeacher = async () => {
      const response = await axios.get(
        "https://kawotekbackend.elvirainfotech.org/teachers"
      );
      // console.log(response.data);
      setAllTeachers(response.data);
    };
    getTeacher();
  }, [FavouriteStatus]);

  // filter 

  useEffect(() => {
    setTeacherList(allTeachers.filter(teacher => {
      if (Filter.subject != '') {
        if (teacher.subject !== Filter.subject) return false;
      }
      if (Filter.searchText != '') {
        // if (!teacher.subject?.toLowerCase()?.includes(Filter.searchText?.toLowerCase())) return false;
      }
      return true;
    }))
  }, [Filter])

  useEffect(() => {
    setTeacherList([...allTeachers])
  }, [allTeachers])


  const favouriteTeacher = async () => {
    console.log("clicked", teacher_id);
    const createFavourite = await axios.post(
      "https://kawotekbackend.elvirainfotech.org/favourites/add",
      {
        user_id: JSON.parse(localStorage.getItem("userInfo")).id,
        teacher_id: teacher_id,
      }
    );
    console.log(createFavourite);
    setFavouriteStatus(createFavourite);
  };


  return (
    <div>
      <section className="tutor_listing_sec">
        <div className="container">
          <div className="heading_box">
            <h2> Tutors </h2>
          </div>
          <div className="comman_top">
            <div className="tutor_listing_area">
              <div className="row">
                <div className="col-lg-8">
                  <div className="tutor_listing_left">
                    <div className="tl_sorting">
                      <div className="row">
                        <div className="col-lg-4 d-flex align-items-center">
                          <div className="sort_grid_box w-100">
                            <ul>
                              <li className="active">
                                <Link to="/">
                                  <i
                                    className="fa fa-th-large"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i
                                    className="fa fa-list-ul"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </li>
                              <li>Showing 1-9 of 12</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-8 sorting_form">
                          <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6 col-12">
                              <div className="form_sorting">


                                <select className="form-control" onChange={(e) => {
                                  setFilter({ ...Filter, subject: e.target.value })
                                }}>
                                  <option value="">Choose Subject</option>
                                  {allTeachers.map((teachers) => {
                                    return (
                                      <option key={teachers.id} value={teachers.subject}>{teachers.subject}</option>
                                    )
                                  })}
                                </select>

                              </div>
                            </div>
                            {/* search here */}
                            <div className="col-lg-5 col-md-5 col-sm-6 col-12">
                              <div className="form_sorting">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search Here" aria-label="Search" value={Filter.searchText} onChange={e => setFilter({ ...Filter, searchText: e.target.value })} />
                              </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="form_sorting">
                                <select className="form-control">
                                  <option>Category</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                </select>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tl_listing_area">
                      {TeacherList.map((teachers) => {
                        // console.log(teachers);
                        return (
                          <div
                            className="teacher_box"
                            key={teachers.id}
                            onMouseEnter={() => {
                              getEventData(teachers.id);
                            }}
                          >
                            <div className="row">
                              <div className="col-lg-4 col-md-4">
                                <div className="teacher_img_side">
                                  <div className="teacher_img_box">
                                    <div className="overlay_ribban">
                                      <p>featured</p>
                                    </div>
                                    <div className="teacher_img">
                                      {/* <img src="images/teacher1.jpg" alt="" /> */}
                                      {teachers.image !== null &&
                                        teachers.image !== "" ? (
                                        <img
                                          src={`https://kawotekbackend.elvirainfotech.org/public/images/uploads/${teachers.image}`}
                                          alt=""
                                        // style={{ height: 120, width: 120 }}
                                        />
                                      ) : (
                                        <img
                                          src={`https://ui-avatars.com/api/?name=${teachers.first_name}+${teachers.last_name}`}
                                          alt=""
                                        // style={{ height: 120, width: 120 }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                  {/* <div className="t_amount">
                                    <h4>₦ {teachers.accents} / hour</h4>
                                  </div> */}
                                </div>
                              </div>
                              <div className="col-lg-8 col-md-8">
                                <div className="teacher_content_box">
                                  <div className="teacher_name">
                                    <div className="t_name_left">
                                      <h3>
                                        {teachers.first_name +
                                          " " +
                                          teachers.last_name}
                                      </h3>
                                      <ul>
                                        <li>
                                          <img
                                            src="images/trust_icon.png"
                                            alt=""
                                          />
                                        </li>
                                        &nbsp;
                                        <li className="star_rating">
                                          <i
                                            className="text-warning fa fa-star"
                                            aria-hidden="true"
                                          />

                                        </li>
                                        &nbsp;
                                        <li className="review">
                                          {teachers.ratting}
                                          <span className="txt_color_gray">
                                            <h3>5.0</h3>
                                          </span>
                                        </li>
                                        {/* <li><img src="images/trust_icon.jpg" alt="" /></li> */}
                                      </ul>
                                    </div>
                                    <div className="t_name_right">
                                      <ul>
                                        <li>
                                          {teachers.favourite_teacher ===
                                            null ? (
                                            <i
                                              className="fa fa-heart-o"
                                              aria-hidden="true"
                                              onClick={favouriteTeacher}
                                            />
                                          ) : (
                                            <i
                                              className="fa fa-heart"
                                              aria-hidden="true"
                                              style={{ color: "red" }}
                                              onClick={favouriteTeacher}
                                            />
                                          )}
                                        </li>
                                        <li>
                                          <Link
                                            className="book_trial_btn"
                                            to={`/tutor-details?d=${teachers.id}`}
                                          >
                                            Book Trial
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="teacher_feature">
                                    <ul>
                                      <li>
                                        <span style={{ color: "#0e245a" }}>
                                          Country
                                        </span>
                                        {teachers.country}
                                      </li>
                                      <li>
                                        <span>Language</span>
                                        {teachers.language}
                                      </li>
                                      <li>
                                        <span>Subject</span>
                                        {teachers.subject}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="t_short_desc">
                                    {/* <p>{teachers.about}</p> */}
                                    <Markup content={teachers.about} />
                                  </div>
                                  <div className="t_more">
                                    <Link
                                      to={`/tutor-details?d=${teachers.id}`}
                                    >
                                      Read More
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 md_res_mar_top_30">
                  <div className="tutor_listing_right sidebar_stcky">
                    {/* <div className="tl_online">
                      <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="check1">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check1"
                            name="vehicle1"
                            defaultValue
                          />
                          Online Now
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="check2">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="check2"
                            name="vehicle2"
                            defaultValue
                          />
                          Favorites
                        </label>
                      </div>
                    </div> */}
                    <div className="t_profile_box">
                      <div className="t_profile_img">
                        {/* <img src="images/teacher_list_img.jpg" alt="" /> */}

                        <iframe
                          width="100%"
                          height="250"
                          src={`https://www.youtube.com/embed/${rightCard.youtube_id}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>

                      <div className="t_profile_timezone">
                        {/* <p>All times listed are in your local timezone</p> */}
                        <p>
                          {rightCard.first_name === undefined
                            ? ""
                            : rightCard.first_name + " " + rightCard.last_name}
                        </p>

                      </div>

                      <div className="td_schedule comman_box_shadow mb-5">
                        {/* <h2 className="box_subtitle">Scheduler</h2> */}
                        {/* <p>All times listed are in your local timezone</p> */}
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
                            scrollToTime={new Date()}
                            defaultDate={new Date()}
                            onSelectEvent={abc} //{(event) => console.log(event)}
                            // onSelectSlot={handleSelect}
                            style={{ height: 300, width:300 }}
                          />
                        </div>
                      </div>

                      <div className="pro_view_box">
                        <Link to={`/tutor-details?d=${teacher_id}`}>
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorListingSec;
