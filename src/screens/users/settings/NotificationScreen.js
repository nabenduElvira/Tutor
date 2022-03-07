import React from "react";
import { Link } from "react-router-dom";

const NotificationScreen = () => {
  return (
    <div>
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
                      {/* <li>
                        <Link to="/notification">
                          <span>
                            <img src="images/s5.png" alt="" />
                          </span>
                          Notifications
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link to="/payment">
                          <span>
                            <img src="images/s6.png" alt="" />
                          </span>
                          Payments
                        </Link>
                      </li> */}
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
                {/* <div className="lan-part comman_box_shadow mb-4">
                  <h2 className="subtitle">Lesson History</h2>
                  <div className>
                    <img
                      src="images/history.jpg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cd_page_left">
                <div className="dash_left-part comman_box_shadow mb-4">
                  <h2>Notifications</h2>
                  <div className="photo-part">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-12">
                        <ul>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            Promotions
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            News + updates
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            Lesson updates
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            Reminder emails - 5 minutes before lesson
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            Reminder emails - 30 minutes before lesson
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            Reminder emails - 24 hours before lesson
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            Desktop Notifications <em>Grant permission</em>
                          </li>
                        </ul>
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

export default NotificationScreen;
