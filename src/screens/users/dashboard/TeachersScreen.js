import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel"; //ReactOwlCarousel
import axios from "axios";

const TeachersScreen = () => {
  const [FavouriteData, setFavouriteData] = useState([]);
  const [FavouriteStatus, setFavouriteStatus] = useState("");
  const [CurrentTeacherStatus, setCurrentTeacherStatus] = useState("1");

  const history = useHistory();

  useEffect(() => {
    const GetFavouriteTeachers = async () => {
      const res = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/favourites/user/${
          JSON.parse(localStorage.getItem("userInfo")).id
        }`
      );
      // console.log(res.data.status);
      if (res.data.status === "1") {
        setFavouriteStatus(res.data.status);
        setFavouriteData(res.data.data);
        history.push("/teachers");
      }
    };
    GetFavouriteTeachers();
  }, []);

  const Teachers = [
    {
      id: 0,
      name: "Teacher 1",
    },
    {
      id: 1,
      name: "Teacher 2",
    },
    {
      id: 2,
      name: "Teacher 3",
    },
    {
      id: 3,
      name: "Teacher 4",
    },
    {
      id: 4,
      name: "Teacher 5",
    },
    {
      id: 5,
      name: "Teacher 6",
    },
  ];

  // console.log();

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
                    <Link to="/teachers" className="active">
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
      <section className="cd_page_sec bg_color_gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cd_page_left">
                <div className="dash_left-part mb-4">
                  <h2>Teachers</h2>
                </div>
                <div className="cd_course_desc comman_box_shadow mb-4">
                  {CurrentTeacherStatus === "1" ? (
                    <OwlCarousel
                      items={1}
                      loop={true}
                      dots={false}
                      autoplay={true}
                      nav={true}
                    >
                      {Teachers.map((items) => {
                        return (
                          <div className="item" key={items.id}>
                            <div className="client_content text-center">
                              <div className="testi_img">
                                <img src="images/testi_img1.jpg" alt="" />
                              </div>
                              <p>{items.name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  ) : (
                    <div className="l-area">
                      <div className="ico-area">
                        <img src="images/a3.png" alt="" />
                      </div>
                      <h2>No teachers found</h2>
                      <p>Book teachers to see them here.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cd_page_right2">
                <div className="lan-part comman_box_shadow mb-4">
                  <h2 className="subtitle">Favourite Teachers</h2>
                  {FavouriteStatus === "1" ? (
                    <OwlCarousel
                      items={1}
                      loop={true}
                      dots={false}
                      autoplay={true}
                      nav={true}
                    >
                      {FavouriteData.map((items) => {
                        // console.log(items);
                        return (
                          <div className="item" key={items.id}>
                            <div className="client_content text-center">
                              <div className="testi_img">
                                <img src="images/testi_img1.jpg" alt="" />
                              </div>
                              <p>{items.first_name + " " + items.last_name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  ) : (
                    <div className="lan-area2">
                      <div className="l-area">
                        <div className="ico-area">
                          <img src="images/a3.png" alt="" />
                        </div>
                        <h2>No teachers found</h2>
                        <p>Follow teachers to see them here.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachersScreen;
