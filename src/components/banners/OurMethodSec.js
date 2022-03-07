// import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const OurMethodSec = () => {
  const [headerImage, setHeaderImage] = useState([]);

  const newUrl = () => {
    return window.location.href.toString().split(window.location.host)[1];
  };

  useEffect(() => {
    newUrl();

    const getHeaderImage = async () => {
      if (JSON.parse(localStorage.getItem("userInfo"))) {
        if (JSON.parse(localStorage.getItem("userInfo")).type === 1) {
          const response = await axios.get(
            `https://kawotekbackend.elvirainfotech.org/teachers/user/${
              JSON.parse(localStorage.getItem("userInfo")).id
            }`
          );
          setHeaderImage(response.data);
        } else {
          const response = await axios.get(
            `https://kawotekbackend.elvirainfotech.org/students/user/${
              JSON.parse(localStorage.getItem("userInfo")).id
            }`
          );
          setHeaderImage(response.data);
        }
      }
    };

    getHeaderImage();
  });

  return (
    <div>
      <section className="how_it_work_sec ">
        <div className="container">
          <div className="heading_box text-center">
            <h2>Our Offerings</h2>
          </div>
          <div className="our_method_area mt-5">
            <div className="row">
              <div className="col-lg-10 col-md-12">
                <div className="method_list_area">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
                      <div className="our_method_box text-center border_hover6 bh_comman">
                        <div className="span_border_hover6 bh_comman_inner">
                          <div className="mehod_icon">
                            <img src="images/how_it_work1.png" alt="" />
                          </div>
                          <div className="mehod_content">
                            <h3>Online Tutoring</h3>
                            <ul>
                              <li>
                                <span>
                                  <img src="images/search_icon.png" alt="" />
                                </span>{" "}
                                Search for Tutor
                              </li>
                              <li>
                                <span>
                                  <img src="images/add_icon.png" alt="" />
                                </span>{" "}
                                Book a Tutor
                              </li>
                            </ul>

                            {/* <Link className="sl_btn" to="/tutor-list">
                              Start Tutoring
                            </Link> */}

                            <Link
                              className="sl_btn"
                              to={newUrl}
                              data-toggle="modal"
                              data-target="#loginModal"
                            >
                              Start Tutoring
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
                      <div className="our_method_box text-center border_hover6 bh_comman">
                        <div className="span_border_hover6 bh_comman_inner">
                          <div className="mehod_icon">
                            <img src="images/how_it_work2.png" alt="" />
                          </div>
                          <div className="mehod_content">
                            <h3>Online Courses</h3>
                            <ul>
                              <li>Search for Video Courses</li>
                              <li>
                                <span>
                                  <img src="images/cart_icon.png" alt="" />
                                </span>{" "}
                                Buy Courses
                              </li>
                            </ul>
                            <Link className="sl_btn" to="/course-list">
                              Start Learning
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
                      <div className="our_method_box text-center border_hover6 bh_comman">
                        <div className="span_border_hover6 bh_comman_inner">
                          <div className="mehod_icon">
                            <img src="images/how_it_work3.png" alt="" />
                          </div>
                          <div className="mehod_content">
                            <h3>Online Training/Classes</h3>
                            <ul>
                              <li>
                                <span>
                                  <img src="images/search_icon.png" alt="" />
                                </span>{" "}
                                Search for Classes/Training
                              </li>
                              <li>
                                <span>
                                  <img src="images/cart_icon.png" alt="" />
                                </span>{" "}
                                Book a Seat
                              </li>
                            </ul>
                            <Link className="sl_btn" to="/tutor-list">
                              Start Learning
                            </Link>
                          </div>
                        </div>
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

export default OurMethodSec;
