import React from "react";
import { Link } from "react-router-dom";

const CourseDetailsSec = () => {
  return (
    <div>
      <section className="course_details_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="course_details_area">
                <ul className="list_course_facility">
                  <li>Teaching &amp; Academics</li>
                  <li>Language Learning</li>
                  <li>English Language</li>
                </ul>
                <h3>
                  English Fluency | How to Sound Like a Native English Speaker
                </h3>
                <p>
                  Take your English pronunciation to the next level. Learn how
                  to make your sentences flow like a natural.{" "}
                </p>
                <ul className="list_cd_features">
                  <li>4.7</li>
                  <li className="star_rating">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                  </li>
                  <li>(2,589 ratings) </li>
                  <li>11,802 students</li>
                  <li>
                    Created by :{" "}
                    <span className="txt_color_white">Kawotek Academy</span>
                  </li>
                </ul>
                <ul className="list_cd_update">
                  <li>Last updated 6/2016</li>
                  <li>English</li>
                  <li>English [Auto]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* cd_page_sec */}
      <section className="cd_page_sec bg_color_gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cd_page_left">
                <div className="cd_what_learn comman_box_shadow mb-4">
                  <h2 className="box_subtitle">What You Will Learn</h2>
                  <ul>
                    <li>
                      The ins and outs of HTML5, CSS3, and Modern JavaScript for
                      2021
                    </li>
                    <li>
                      Make REAL web applications using cutting-edge technologies
                    </li>
                    <li>
                      Create responsive, accessible, and beautiful layouts
                    </li>
                    <li>Recognize and prevent common security exploits.</li>
                    <li>
                      Continue to learn and grow as a developer, long after the
                      course ends
                    </li>
                    <li>
                      Create a blog application from scratch using Node,
                      Express, and MongoDB.
                    </li>
                    <li>
                      Create a complicated yelp-like application from scratch
                    </li>
                    <li>
                      Deploy your applications and work with cloud databases
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className="cd_course_desc comman_box_shadow mb-4">
                  <h2 className="box_subtitle">Course Description</h2>
                  <h4>COMPLETELY REDONE WITH OVER 500 BRAND NEW VIDEOS!</h4>
                  <p>
                    Hi! Welcome to the brand new version of The Web Developer
                    Bootcamp, Kawotek most popular web development course. This
                    course was just completely overhauled to prepare students
                    for the 2021 job market, with over 60 hours of brand new
                    content. This is the only course you need to learn web
                    development. There are a lot of options for online developer
                    training, but this course is without a doubt the most
                    comprehensive and effective on the market. Here's why:
                  </p>
                  <ul>
                    <li>
                      {" "}
                      This is the only Udemy course taught by a professional
                      bootcamp instructor with a track record of success.
                    </li>
                    <li>
                      {" "}
                      94% of my in-person bootcamp students go on to get
                      full-time developer jobs. Most of them are complete
                      beginners when I tart working with them.
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className="cd_course_accordian comman_box_shadow mb-4">
                  <h2 className="box_subtitle">Course Content</h2>
                  <div className="d-flex">
                    <p>61 sections • 610 lectures • 63h 21m total length</p>
                    <h5>Expand All Section</h5>
                  </div>
                  <div className="course_accordian_area">
                    <div
                      className="accordion filter_accordion"
                      id="filter_accordion"
                    >
                      <div className="card">
                        <div className="card-header" id="heading1">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapse1"
                            >
                              {" "}
                              <i className="fa fa-angle-down" /> Course
                              Orientation{" "}
                              <span className="ques_views">
                                9 Lecture 30 Min
                              </span>
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse1"
                          className="collapse show"
                          aria-labelledby="heading1"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="course_tab_body">
                              <div className="course_tab_feature">
                                <div className="course_tab_name">
                                  <h6>Welcome to the course</h6>
                                </div>
                                <div className="course_tab_preview">
                                  <ul>
                                    <li>
                                      <h6>Preview</h6>
                                    </li>
                                    <li>03:01</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="course_tab_feature">
                                <div className="course_tab_name">
                                  <h6>Welcome to the course</h6>
                                </div>
                                <div className="course_tab_preview">
                                  <ul>
                                    <li>
                                      <h6>Preview</h6>
                                    </li>
                                    <li>03:01</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="course_tab_feature">
                                <div className="course_tab_name">
                                  <h6>Welcome to the course</h6>
                                </div>
                                <div className="course_tab_preview">
                                  <ul>
                                    <li>
                                      <h6>Preview</h6>
                                    </li>
                                    <li>03:01</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="course_tab_feature">
                                <div className="course_tab_name">
                                  <h6>Welcome to the course</h6>
                                </div>
                                <div className="course_tab_preview">
                                  <ul>
                                    <li>
                                      <h6>Preview</h6>
                                    </li>
                                    <li>03:01</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="card">
                  <div className="card-header" id="heading2">
                    <h2 className="mb-0">
                      <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse2">test <i className="fa fa-angle-down"></i></button>
                    </h2>
                  </div>
                  <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#filter_accordion">
                    <div className="card-body">
                      <div className="filter_collapse_body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="cd_instructor comman_box_shadow mb-4">
                  <h2 className="box_subtitle">Instructor</h2>
                  <div className="cd_instructor_top">
                    <h3>Luke Priddy</h3>
                    <p>Innovative Englosh Course</p>
                    <div className="instructor_short">
                      <div className="media">
                        <div className="media-left">
                          <div className="ins_img">
                            <img
                              className="media-object"
                              src="images/testi_img1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        {/*media-left*/}
                        <div className="media-body">
                          <p>
                            <i className="fa fa-star" aria-hidden="true" /> 4.6
                            Instructor Rating
                          </p>
                          <p>
                            <i
                              className="fa fa-certificate"
                              aria-hidden="true"
                            />{" "}
                            23,675 Reviews
                          </p>
                          <p>
                            <i className="fa fa-user" aria-hidden="true" />{" "}
                            98,654 Students
                          </p>
                          <p>
                            <i
                              className="fa fa-play-circle"
                              aria-hidden="true"
                            />{" "}
                            12 Courses
                          </p>
                        </div>
                        {/*media-body*/}
                      </div>
                    </div>
                    <div className="instructor_full mt-3">
                      <p>Hi, My Name is Luke</p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries
                      </p>
                    </div>
                    <div className="f_showmore">
                      <Link to="/">
                        Shore More{" "}
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="cd_student_feedback comman_box_shadow">
                  <h2 className="box_subtitle">
                    Students Feedback and Reviews
                  </h2>
                  <div className="cd_review_short">
                    <img src="images/rating_img.jpg" alt="" />
                  </div>
                  <div className="review_user_area mt-4">
                    <div className="review_user_box">
                      <div className="media">
                        <div className="media-left">
                          <div className="ins_img">BS</div>
                        </div>
                        <div className="media-body">
                          <h4>Bhupendra Singh</h4>
                          <div className="rating_box">
                            <ul className="list_rating">
                              <li>
                                <b>4.5</b>
                              </li>
                              <li className="star_rating">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>(1100)</li>
                            </ul>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <div className="feedback_helfull">
                            <h6>Was this helfull?</h6>
                            <img src="images/like_img.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review_user_box">
                      <div className="media">
                        <div className="media-left">
                          <div className="ins_img">BS</div>
                        </div>
                        <div className="media-body">
                          <h4>Bhupendra Singh</h4>
                          <div className="rating_box">
                            <ul className="list_rating">
                              <li>
                                <b>4.5</b>
                              </li>
                              <li className="star_rating">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>(1100)</li>
                            </ul>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <div className="feedback_helfull">
                            <h6>Was this helfull?</h6>
                            <img src="images/like_img.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cd_page_right sidebar_stcky">
                <div className="cd_video_overview mb-4">
                  <img
                    src="images/video_overview_img.jpg"
                    className="v_thumb_img"
                    alt=""
                  />
                  {/* <a href="javascript:void(0)" className="wis_playbtn" data-toggle="modal" data-target="#home_modal_video1"><img src="images/yt_play_btn.png" alt="" /></a> */}
                  {/* <a
                    href="javascript:void(0)"
                    className="wis_playbtn videoPop"
                    video-url="https://youtu.be/-MKapbz0GIo"
                  >
                    <img src="images/yt_play_btn.png" alt="" />
                  </a> */}
                </div>
                <div className="cd_buy_box comman_box_shadow ">
                  <div className="cd_top_price">
                    <ul>
                      <li className="li_new_price">₦14.99</li>
                      <li className="li_old_price">19.99</li>
                      <li>25% Off</li>
                    </ul>
                    <p>5 Hours left at this Price</p>
                  </div>
                  <div className="cd_full_button">
                    {/* <Link
                      className="cd_cart_btn"
                      to="/"
                      style={{ color: "#fff" }}
                    >
                      ADD To Cart
                    </Link> */}
                    <Link className="cd_buy_btn" to="/">
                      Buy Now
                    </Link>
                  </div>
                  <div className="cd_video_features">
                    <p>
                      <b>This Courses Include :</b>
                    </p>
                    <ul>
                      <li>
                        <span>
                          <img src="images/play_led.png" alt="" />
                        </span>
                        30 hour on demand videos
                      </li>
                      <li>
                        <span>
                          <img src="images/v_feature_notes.png" alt="" />
                        </span>
                        20 notes and articales
                      </li>
                      <li>
                        <span>
                          <img src="images/v_feature_time.png" alt="" />
                        </span>
                        Full time Access
                      </li>
                      <li>
                        <span>
                          <img src="images/v_feature_mobile.png" alt="" />
                        </span>
                        Acces on mobile &amp; TV
                      </li>
                      <li>
                        <span>
                          <img src="images/v_feature_certificate.png" alt="" />
                        </span>
                        Certicate of complitions.
                      </li>
                    </ul>
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

export default CourseDetailsSec;
