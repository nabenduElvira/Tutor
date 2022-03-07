import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const DashboardScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="dashboard-nav-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="dn-area">
                <ul>
                  <li>
                    <Link to="/dashboard" className="active">
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
                  {/* <li>
                    <Link to="/homework">
                      <span>
                        <img src="images/ic4.png" alt="" />
                      </span>
                      Homework
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="course_details_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-2 col-md-12">
                  <div className="pr_area">
                    <img src="images/profile-img.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-10 col-md-12">
                  <div className="pr_area2">
                    <h4>Kawonise</h4>
                    <p>
                      <span>
                        <img src="images/i1.png" alt="" />
                      </span>
                      Nigeria 2:10 PM (GMT+01:00)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <Link to="#" className="add-button">
                + Add Lessions
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="cd_page_sec bg_color_gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cd_page_left">
                <div className="dash_left-part mb-4">
                  <h2>Lessons</h2>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <select className="form-control form-control">
                        <option>Upcoming</option>
                        <option>Past</option>
                      </select>
                    </div>
                    {/* <div className="col-lg-6 col-md-6">
                      <div className="active-purple-4 mb-4">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
                {/*  */}
                <div className="cd_course_desc comman_box_shadow mb-4">
                  <div className="l-area">
                    <div className="ico-area">
                      <img src="images/a1.png" alt="" />
                    </div>
                    <h2>Schedule a Lesson</h2>
                    <p>
                      You have no scheduled lessons. Select a teacher to get
                      started.
                    </p>
                    
                      {/* <button type="button" className="btn btn-success ph">
                        Find a Teacher
                      </button> */}
                      <Link  to="/tutor-list" style={{marginLeft: '300px'}} className="btn btn-success ph">Find a Teacher</Link>
                   
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cd_page_right2">
                <div className="lan-part comman_box_shadow mb-2">
                  <h2 className="subtitle">Lessons Overview</h2>
                  <div className="lan-area2">
                    <ul>
                      <li>
                        <span style={{ color: "#0e245a" }}>0</span>Scheduled
                      </li>
                      <li>
                        <span>0</span>Past
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to="/request-teacher" className="btn btn-success ph" >Request For Teacher</Link>
                <div className="lan-part comman_box_shadow mt-2 mb-2">
                  <h2 className="subtitle">Lesson History</h2>
                  <div>
                    <img
                      src="images/history.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
               {/*  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardScreen;
