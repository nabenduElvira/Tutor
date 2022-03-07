import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Header = () => {
  const [teacher_id, setTeacher_id] = useState("");
  const [notification_count, setNotification_count] = useState("");
  const [notification, setNotification] = useState([]);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const TeacherDeactivate = async () => {
    swal({
      title: "Are you sure?",
      text: "Deleted Accounts Cannot be Reactivated.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        // console.log("deleted");
        const getTeacher_id = await axios.get(
          `https://kawotekbackend.elvirainfotech.org/teachers/user/${JSON.parse(localStorage.getItem("userInfo")).id
          }`
        );
        // console.log(getTeacher_id.data.id);
        const res = await axios.delete(
          `https://kawotekbackend.elvirainfotech.org/teachers/${getTeacher_id.data.id}`
        );
        // console.log(res);
        localStorage.clear();
        window.location.href = "/";
      }
    });
  };

  const [headerImage, setHeaderImage] = useState([]);

  useEffect(() => {
    const getTeacher_id = async () => {
      if (JSON.parse(localStorage.getItem("userInfo"))) {
        if (JSON.parse(localStorage.getItem("userInfo")).type === 1) {
          const res = await axios.get(
            `https://kawotekbackend.elvirainfotech.org/teachers/user/${JSON.parse(localStorage.getItem("userInfo")).id
            }`
          );
          // console.log(res.data.id);
          setTeacher_id(res.data.id);
        }
      }
    };
    getTeacher_id();
  }, []);

  const newUrl = () => {
    return window.location.href.toString().split(window.location.host)[1];
  };

  useEffect(() => {
    newUrl();

    const getHeaderImage = async () => {
      if (JSON.parse(localStorage.getItem("userInfo"))) {
        if (JSON.parse(localStorage.getItem("userInfo")).type === 1) {
          const response = await axios.get(
            `https://kawotekbackend.elvirainfotech.org/teachers/user/${JSON.parse(localStorage.getItem("userInfo")).id
            }`
          );
          setHeaderImage(response.data);
        } else {
          const response = await axios.get(
            `https://kawotekbackend.elvirainfotech.org/students/user/${JSON.parse(localStorage.getItem("userInfo")).id
            }`
          );
          setHeaderImage(response.data);
        }
      }
    };

    getHeaderImage();

    const getNotification = () => {
      
        return new Promise((resolve, reject) => {
          if(JSON.parse(localStorage.getItem("userInfo"))){
            fetch('https://kawotekbackend.elvirainfotech.org/notification/user/'+JSON.parse(localStorage.getItem("userInfo")).id, {
            method: 'get',
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
          }
          
        });
      
      
    }
    
    getNotification().then(data => {
      if (data.data) {
        setNotification(data.data.data);
        setNotification_count(data.data.data.length);
      }
    });

  });
  return (
    <div>
      <nav className="nav_sec" id="sticky-wrap">
        <div className="container">
          <div className="nav_inner">
            <div className="logo_area">
              <div className="logo_box">
                <Link to="/">
                  <img src="images/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="nav_area">
              <div className="stellarnav">
                <ul>
                  <li className="li_mobile_only m_login">
                    <Link
                      to={newUrl}
                      data-toggle="modal"
                      data-target="#loginModal"
                    >
                      Login / Signup
                    </Link>
                  </li>
                  {/* <li className="li_mobile_only m_login">
                    <a href>Login / Signup</a>
                  </li> */}

                  {JSON.parse(localStorage.getItem("userInfo")) ? (
                    <>
                      {JSON.parse(localStorage.getItem("userInfo")).type ===
                        1 ? (
                        ""
                      ) : (
                        <li>
                          <Link to="#">Tutoring</Link>
                          <ul>
                            <li>
                              <Link to="/tutor-list">Book A Tutor</Link>
                            </li>
                            <li>
                              <Link to="/request-teacher">Request A Tutor</Link>
                            </li>
                          </ul>
                        </li>
                      )}
                    </>
                  ) : (
                    <li>
                      <Link to="#">Tutoring</Link>
                      <ul>
                        <li>
                          <Link to="/tutor-list">Book A Tutor</Link>
                        </li>
                        <li>
                          <Link to="/tutor-list">Request A Tutor</Link>
                        </li>
                      </ul>
                    </li>
                  )}

                  {JSON.parse(localStorage.getItem("userInfo")) ? (
                    <>
                      {JSON.parse(localStorage.getItem("userInfo")).type ===
                        1 ? (
                        ""
                      ) : (
                        <li>
                          <Link to="/course-list">Courses</Link>
                        </li>
                      )}
                    </>
                  ) : (
                    <li>
                      <Link to="/course-list">Courses</Link>
                    </li>
                  )}

                  {JSON.parse(localStorage.getItem("userInfo")) ? (
                    <>
                      {JSON.parse(localStorage.getItem("userInfo")).type ===
                        1 ? (
                        <li>
                          <Link to="/teacher-classes">Classes</Link>
                        </li>

                      ) : (
                        <li>
                          <Link to="/student-classes">Classes</Link>
                        </li>
                      )}
                    </>
                  ) : (
                    ""
                  )}


                  {JSON.parse(localStorage.getItem("userInfo")) ? (
                    <>
                      {JSON.parse(localStorage.getItem("userInfo")).type ===
                        1 ? (
                        <li>
                          <Link to="/job-lists">JOBS</Link>
                        </li>

                      ) : (
                        <li>
                          <Link to="/student-job-list">JOBS</Link>
                        </li>
                      )}
                    </>
                  ) : (
                    ""
                  )}



                  {JSON.parse(localStorage.getItem("userInfo")) ? (
                    ""
                  ) : (
                    <li>
                      <Link to="/faq">Faq</Link>
                      <ul>
                        <li>
                          <Link to="/knowledge">Knowledge Base</Link>
                        </li>
                        <li>
                          <Link to="/contact-us">Contact Base</Link>
                        </li>
                      </ul>
                    </li>
                  )}
                  {JSON.parse(localStorage.getItem("userInfo")) ? (
                    ""
                  ) : (
                    <li>
                      <Link to="/how-it-works">How It Works</Link>
                    </li>
                  )}
                </ul>
              </div>
              <div className="header_login_area">
                <ul>
                  {localStorage.getItem("userInfo") ? (
                    <>
                      {JSON.parse(localStorage.getItem("userInfo")).type ===
                        0 ? (
                        <>
                          {/* test */}
                          <li className="nav-item dropdown">
                            <a
                              href="true"
                              className="nav-link count-indicator dropdown-toggle"
                              id="notificationDropdown"
                              data-toggle="dropdown"
                            >
                              <i className="fa fa-bell" aria-hidden="true">
                                <span>{notification_count}</span>{" "}
                              </i>
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                              aria-labelledby="notificationDropdown"
                            >
                              <p className="mb-0 font-weight-normal dropdown-header">
                                Notifications
                              </p>
                              <div className="dropdown-item-scroll">
                                {notification.map((items) => {
                                  // console.log(items);
                                  return (
                                    <>
                                      <Link
                                        className="dropdown-item preview-item"
                                        to="#"
                                      >
                                        <div className="preview-thumbnail">
                                          <i
                                            className="fa fa-user-o"
                                            aria-hidden="true"
                                          />
                                        </div>
                                        <div
                                          className="preview-item-content"
                                          style={{ color: "black" }}
                                        >
                                          <h6 className="preview-subject font-weight-normal">
                                            {items.msg.includes("~") ? (
                                              <div key={items.msg}>
                                                <Link
                                                  to={`/video?id=${items.msg.split("~")[1]
                                                    }`}
                                                  style={{ color: "black" }}
                                                >
                                                  Click here to join your class
                                                </Link>
                                              </div>
                                            ) : (
                                              items.msg
                                            )}
                                          </h6>
                                        </div>
                                      </Link>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          </li>
                          {/* test */}
                          <li className="li_user_profile">
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                <span className="user_img">
                                  {/* <img src="images/teacher1.jpg" alt="" /> */}
                                  {headerImage.image !== null &&
                                    headerImage.image !== "" ? (
                                    <img
                                      src={`https://kawotekbackend.elvirainfotech.org/public/images/uploads/${headerImage.image}`}
                                      alt=""
                                    // style={{ height: 120, width: 120 }}
                                    />
                                  ) : (
                                    <img
                                      src={`https://ui-avatars.com/api/?name=${headerImage.first_name}+${headerImage.last_name}`}
                                      alt=""
                                    // style={{ height: 120, width: 120 }}
                                    />
                                  )}
                                </span>
                                <span className="user_name">
                                  {
                                    JSON.parse(localStorage.getItem("userInfo"))
                                      .first_name
                                  }
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link to="/dashboard">
                                      <i
                                        className="fa fa-tachometer"
                                        aria-hidden="true"
                                      ></i>
                                      Dashboard
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/general">
                                      <i
                                        className="fa fa-cog"
                                        aria-hidden="true"
                                      ></i>
                                      Setting
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/payment">
                                      <i
                                        className="fa fa-credit-card"
                                        aria-hidden="true"
                                      ></i>
                                      Payment
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#" onClick={logout}>
                                      <i
                                        className="fa fa-sign-out"
                                        aria-hidden="true"
                                      ></i>
                                      Logout
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
                          {/* test */}
                          <li className="nav-item dropdown">
                            <a
                              href="true"
                              className="nav-link count-indicator dropdown-toggle"
                              id="notificationDropdown"
                              data-toggle="dropdown"
                            >
                              <i className="fa fa-bell" aria-hidden="true">
                                <span>{notification_count}</span>
                              </i>
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                              aria-labelledby="notificationDropdown"
                            >
                              <p className="mb-0 font-weight-normal dropdown-header">
                                Notifications
                              </p>
                              <div className="dropdown-item-scroll">
                                {notification.map((items) => {
                                  // console.log(items);

                                  return (
                                    <>
                                      <Link
                                        className="dropdown-item preview-item"
                                        to="#"
                                      >
                                        <div className="preview-thumbnail">
                                          <i
                                            className="fa fa-user-o"
                                            aria-hidden="true"
                                          />
                                        </div>
                                        <div
                                          className="preview-item-content"
                                          style={{ color: "black" }}
                                        >
                                          <h6 className="preview-subject font-weight-normal">
                                            {items.msg.includes("~") ? (
                                              <div key={items.msg}>
                                                <Link
                                                  to={`/video?id=${items.msg.split("~")[1]
                                                    }`}
                                                  style={{ color: "black" }}
                                                >
                                                  Click here to join your class
                                                </Link>
                                              </div>
                                            ) : (
                                              items.msg
                                            )}
                                          </h6>
                                        </div>
                                      </Link>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          </li>
                          {/* test */}

                          <li className="li_user_profile">
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                <span className="user_img">
                                  {headerImage.image !== null &&
                                    headerImage.image !== "" ? (
                                    <img
                                      src={`https://kawotekbackend.elvirainfotech.org/public/images/uploads/${headerImage.image}`}
                                      alt=""
                                    // style={{ height: 120, width: 120 }}
                                    />
                                  ) : (
                                    <img
                                      src={`https://ui-avatars.com/api/?name=${headerImage.first_name}+${headerImage.last_name}`}
                                      alt=""
                                    // style={{ height: 120, width: 120 }}
                                    />
                                  )}
                                </span>
                                <span className="user_name">
                                  {
                                    JSON.parse(localStorage.getItem("userInfo"))
                                      .first_name
                                  }
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <ul>
                                <li>
                                    <Link to="/private-lessons">
                                      <i
                                        className="fa fa-leanpub"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Private Lessons
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/">
                                      <i
                                        className="fa fa-credit-card"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Payment
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to={`/tutor-details?d=${teacher_id}`}>
                                      <i
                                        className="fa fa-user"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      View Profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/profile">
                                      <i
                                        className="fa fa-pencil-square-o"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Edit Profile
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/scheduler">
                                      <i
                                        className="fa fa-calendar-plus-o"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Class Scheduling
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={newUrl}
                                      onClick={TeacherDeactivate}
                                    >
                                      <i
                                        className="fa fa-ban"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Deactivate Account
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={newUrl} onClick={logout}>
                                      <i
                                        className="fa fa-sign-out"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Logout
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </>
                      )}
                    </>
                  ) : (
                    <li className="h_login_li">
                      <Link
                        to={newUrl}
                        data-toggle="modal"
                        data-target="#loginModal"
                      >
                        Login / Signup
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
