import React from "react";
import { Link } from "react-router-dom";

const HomeworkScreen = () => {
  return (
    <div>
      <section className="dashboard-nav-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dn-area">
                <ul>
                  <li>
                    <Link to="/dashboard">
                      <span>
                        <img src="images/ic1.png" alt="" />
                      </span>
                      Dashboard
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/lessons">
                      <span>
                        <img src="images/ic2.png" alt="" />
                      </span>
                      Lessons
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/teachers">
                      <span>
                        <img src="images/ic3.png" alt="" />
                      </span>
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link to="/homework" className="active">
                      <span>
                        <img src="images/ic4.png" alt="" />
                      </span>
                      Homework
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cd_page_sec bg_color_gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cd_page_left">
                <div className="dash_left-part mb-4">
                  <h2>No homework found.</h2>
                  {/* <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <select className="form-control form-control">
                        <option>Upcoming</option>
                      </select>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="active-purple-4 mb-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
                {/*  */}
                {/* <div className="cd_course_desc comman_box_shadow mb-4">
                  <div className="l-area">
                    <div className="ico-area">
                      <img src="images/a1.png" alt="" />
                    </div>
                    <h2>
                      Sync your calendar with Verbling to keep track of your
                      homework!
                    </h2>
                    <p>
                      <button type="button" className="btn btn-success ph">
                        Sync calendar
                      </button>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeworkScreen;
