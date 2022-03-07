import React from "react";
import { Link } from "react-router-dom";
// import TestimonialsSec from "../components/TestimonialsSec";

const CourseListingSec = () => {
  const student_courses = [
    {
      id: 1,
      image: "https://ui-avatars.com/api/?name=Alex+Joe",
      course_name: "The Complete Guide to Understanding Complex Numbers",
      teacher_name: "Alex Joe",
      subject: "English",
      lectures: "30",
      ratting: "4.5",
      noOfRatting: "56",
      old_amo: "2999",
      new_amo: "1999",
    },
    {
      id: 2,
      image: "https://ui-avatars.com/api/?name=Subham+Roy",
      course_name: "React Hooks",
      teacher_name: "Subham Roy",
      subject: "ReactJS",
      lectures: "15",
      ratting: "5",
      noOfRatting: "95",
      old_amo: "2500",
      new_amo: "1900",
    },
    {
      id: 3,
      image: "https://ui-avatars.com/api/?name=Abhijit+Saha",
      course_name: "Native Array",
      teacher_name: "Abhijit Saha",
      subject: "React Native",
      lectures: "17",
      ratting: "4.5",
      noOfRatting: "82",
      old_amo: "3500",
      new_amo: "2300",
    },
    {
      id: 4,
      image: "https://ui-avatars.com/api/?name=Evan+Mondal",
      course_name: "React Array",
      teacher_name: "Evan Mondal",
      subject: "ReactJS",
      lectures: "8",
      ratting: "4",
      noOfRatting: "23",
      old_amo: "4000",
      new_amo: "3500",
    },
    {
      id: 5,
      image: "https://ui-avatars.com/api/?name=Raju+Mondal",
      course_name: "Native Hooks",
      teacher_name: "Raju Mondal",
      subject: "React Native",
      lectures: "5",
      ratting: "3.5",
      noOfRatting: "18",
      old_amo: "5000",
      new_amo: "3500",
    },
  ];

  return (
    <div>
      <section className="course_page_sec">
        <div className="container">
          <div className="heading_box">
            <h2>Course Listing</h2>
          </div>
          <div className="comman_top">
            <div className="tutor_listing_area">
              <div className="row">
                <div className="col-lg-3">
                  <div className="filter_vidget_panel">
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
                              Ratings
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
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
                            <div className="filter_collapse_body">
                              <div className="filter_rating_list">
                                <ul>
                                  <li>
                                    <label>
                                      <input type="radio" defaultValue />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star-half-o"
                                        aria-hidden="true"
                                      />
                                      <span className="r_point">
                                        4.5 &amp; up
                                      </span>
                                      <span className="r_count">(205)</span>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input type="radio" defaultValue />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star-half-o"
                                        aria-hidden="true"
                                      />
                                      <span className="r_point">
                                        4.5 &amp; up
                                      </span>
                                      <span className="r_count">(205)</span>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input type="radio" defaultValue />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star-half-o"
                                        aria-hidden="true"
                                      />
                                      <span className="r_point">
                                        4.5 &amp; up
                                      </span>
                                      <span className="r_count">(205)</span>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input type="radio" defaultValue />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star-half-o"
                                        aria-hidden="true"
                                      />
                                      <span className="r_point">
                                        4.5 &amp; up
                                      </span>
                                      <span className="r_count">(205)</span>
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <input type="radio" defaultValue />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      />
                                      <i
                                        className="fa fa-star-half-o"
                                        aria-hidden="true"
                                      />
                                      <span className="r_point">
                                        4.5 &amp; up
                                      </span>
                                      <span className="r_count">(205)</span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading2">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapse2"
                            >
                              Video Duration
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse2"
                          className="collapse"
                          aria-labelledby="heading2"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="filter_collapse_body">
                              <div className="filter_check_box">
                                <ul className="list_checkbox_vidget list-unstyled">
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" />
                                        0-1 Hour (80)
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" />
                                        1-3 Hour (56)
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" />
                                        3-6 Hour (56){" "}
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" />
                                        6-8 Hour (56)
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="f_showmore">
                                <Link to="/">
                                  Shore More
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading3">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapse3"
                            >
                              {" "}
                              Topic{" "}
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse3"
                          className="collapse"
                          aria-labelledby="heading3"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="filter_collapse_body">
                              <div className="filter_collapse_list_box">
                                <ul>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> Web
                                        Development
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> CSS (11)
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> HTML
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> Jquery
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="f_showmore">
                                <Link to="/">
                                  Shore More{" "}
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading4">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapse4"
                            >
                              {" "}
                              Subcategory{" "}
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse4"
                          className="collapse"
                          aria-labelledby="heading4"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="filter_collapse_body">
                              <div className="filter_check_box">
                                <ul className="list_checkbox_vidget list-unstyled">
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" />
                                        Programming Language
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> Web
                                        Development
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> Game
                                        Development
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> App
                                        Development
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" />{" "}
                                        Animation
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="f_showmore">
                                <Link to="/">
                                  Shore More{" "}
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading5">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapse5"
                            >
                              {" "}
                              Level{" "}
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse5"
                          className="collapse"
                          aria-labelledby="heading5"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="filter_collapse_body">
                              <div className="filter_check_box">
                                <ul className="list_checkbox_vidget list-unstyled">
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> Items
                                        List
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> Items
                                        List
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> Items
                                        List
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" defaultValue />
                                        <i className="checkbox_icon" /> Items
                                        List
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="f_showmore">
                                <Link to="/">
                                  Shore More{" "}
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading6">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapse6"
                            >
                              {" "}
                              Language{" "}
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse6"
                          className="collapse"
                          aria-labelledby="heading5"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="filter_collapse_body">
                              <p>Comming soon...</p>
                              <div className="f_showmore">
                                <Link to="/">
                                  Shore More{" "}
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading7">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapse7"
                            >
                              {" "}
                              Price{" "}
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse7"
                          className="collapse"
                          aria-labelledby="heading7"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="filter_collapse_body">
                              <p>Comming soon...</p>
                              <div className="f_showmore">
                                <Link to="/">
                                  Shore More{" "}
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading8">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapse8"
                            >
                              {" "}
                              Features{" "}
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse8"
                          className="collapse"
                          aria-labelledby="heading8"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="filter_collapse_body">
                              <p>Comming soon...</p>
                              <div className="f_showmore">
                                <Link to="/">
                                  Shore More
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading9">
                          <h2 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapse9"
                            >
                              {" "}
                              Price{" "}
                              <i
                                className="fa fa-angle-down"
                                aria-hidden="true"
                              />
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse9"
                          className="collapse"
                          aria-labelledby="heading9"
                          data-parent="#filter_accordion"
                        >
                          <div className="card-body">
                            <div className="filter_collapse_body">
                              <p>Comming soon...</p>
                              <div className="f_showmore">
                                <Link to="/">
                                  Shore More
                                  <i
                                    className="fa fa-angle-down"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 md_res_mar_top_30">
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
                          <div className="row justify-content-end">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="form_sorting">
                                <select className="form-control">
                                  <option>Filter:</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="form_sorting">
                                <select className="form-control">
                                  <option>Most Polular</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                  <option>Item</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tl_listing_area">
                      {student_courses.map((items) => {
                        return (
                          <>
                            <Link to={`/course-details?i=${items.id}`}>
                              <div className="course_list_box" key={items.id}>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4">
                                    <div className="teacher_img">
                                      <img src={items.image} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="course_content_box">
                                      <h3>{items.course_name}</h3>
                                      <h4>({items.subject})</h4>
                                      <p>By : {items.teacher_name}</p>
                                      <p>
                                        Beginers . {items.lectures} . All Levels
                                      </p>
                                      <div className="rating_box">
                                        <ul className="list_rating">
                                          <li>
                                            <b>{items.ratting}</b>
                                          </li>
                                          <li className="star_rating">
                                            <i
                                              className="fa fa-star"
                                              aria-hidden="true"
                                            />
                                            <i
                                              className="fa fa-star"
                                              aria-hidden="true"
                                            />
                                            <i
                                              className="fa fa-star"
                                              aria-hidden="true"
                                            />
                                            <i
                                              className="fa fa-star"
                                              aria-hidden="true"
                                            />
                                            <i
                                              className="fa fa-star"
                                              aria-hidden="true"
                                            />
                                          </li>
                                          <li>({items.noOfRatting})</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2 col-md-2 d-flex align-items-center">
                                    <div className="course_amt_box w-100">
                                      <div className="course_feature">
                                        <p>Featured</p>
                                      </div>
                                      <div className="course_amt">
                                        <ul>
                                          <li className="new_price txt_color_theme">
                                            ₦ {items.new_amo}
                                          </li>
                                          <li className="old_price">
                                            ₦ {items.old_amo}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </>
                        );
                      })}

                      {/* <div className="course_list_box">
                        <div className="row">
                          <div className="col-lg-4 col-md-4">
                            <div className="teacher_img">
                              <img src="images/course_img1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course_content_box">
                              <h3>
                                The Complete Guide to Understanding Complex
                                Numbers
                              </h3>
                              <h4>(English)</h4>
                              <p>By : Ramcy Joe</p>
                              <p>Beginers . 30 lectures . All Levels</p>
                              <div className="rating_box">
                                <ul className="list_rating">
                                  <li>
                                    <b>4.5</b>
                                  </li>
                                  <li className="star_rating">
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                  </li>
                                  <li>(1100)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 d-flex align-items-center">
                            <div className="course_amt_box w-100">
                              <div className="course_feature">
                                <p>Featured</p>
                              </div>
                              <div className="course_amt">
                                <ul>
                                  <li className="new_price txt_color_theme">
                                    ₦ 4,900{" "}
                                  </li>
                                  <li className="old_price">₦ 8,640</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="course_list_box">
                        <div className="row">
                          <div className="col-lg-4 col-md-4">
                            <div className="teacher_img">
                              <img src="images/course_img1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course_content_box">
                              <h3>
                                The Complete Guide to Understanding Complex
                                Numbers
                              </h3>
                              <h4>(English)</h4>
                              <p>By : Ramcy Joe</p>
                              <p>Beginers . 30 lectures . All Levels</p>
                              <div className="rating_box">
                                <ul className="list_rating">
                                  <li>
                                    <b>4.5</b>
                                  </li>
                                  <li className="star_rating">
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                  </li>
                                  <li>(1100)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 d-flex align-items-center">
                            <div className="course_amt_box w-100">
                              <div className="course_feature">
                                <p>Featured</p>
                              </div>
                              <div className="course_amt">
                                <ul>
                                  <li className="new_price txt_color_theme">
                                    ₦ 4,900{" "}
                                  </li>
                                  <li className="old_price">₦ 8,640</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="course_list_box">
                        <div className="row">
                          <div className="col-lg-4 col-md-4">
                            <div className="teacher_img">
                              <img src="images/course_img1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="course_content_box">
                              <h3>
                                The Complete Guide to Understanding Complex
                                Numbers
                              </h3>
                              <h4>(English)</h4>
                              <p>By : Ramcy Joe</p>
                              <p>Beginers . 30 lectures . All Levels</p>
                              <div className="rating_box">
                                <ul className="list_rating">
                                  <li>
                                    <b>4.5</b>
                                  </li>
                                  <li className="star_rating">
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />

                                    <i
                                      className="fa fa-star"
                                      aria-hidden="true"
                                    />
                                  </li>
                                  <li>(1100)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 d-flex align-items-center">
                            <div className="course_amt_box w-100">
                              <div className="course_feature">
                                <p>Featured</p>
                              </div>
                              <div className="course_amt">
                                <ul>
                                  <li className="new_price txt_color_theme">
                                    ₦ 4,900{" "}
                                  </li>
                                  <li className="old_price">₦ 8,640</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <TestimonialsSec /> */}
    </div>
  );
};

export default CourseListingSec;
