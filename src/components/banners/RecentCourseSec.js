import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const RecentCourseSec = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section className="recent_course_sec">
        <div className="container">
          <div className="heading_box text-center">
            <h2>Recent Courses</h2>
          </div>

          <div className="latest_new_area mt-5">
            <OwlCarousel
              className="owl-carousel owl-theme owl_box_shadow_only owl_equal_height"
              id="recent_course_slider"
              {...options}
            >
              <div className="item">
                <div className="rc_box_item">
                  <div className="rc_img">
                    <img src="images/recent_course1.jpg" alt="" />
                  </div>
                  <div className="rc_content text-center">
                    <h3>A Glimpse of Virtual</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </p>
                    <Link className="course_addcart gradient_btn_bg" to="/cart">
                      Add to Cart{" "}
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </Link>
                    <ul>
                      <li>
                        <i
                          className="fa fa-user"
                          aria-hidden="true"
                          style={{ color: "#6a7df1" }}
                        />{" "}
                        1
                      </li>
                      <li>
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#ffcc21" }}
                        />{" "}
                        4.5 Stars
                      </li>
                      <li className="course_price">
                        <i className="fa fa-inr" aria-hidden="true" />
                        20
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="rc_box_item">
                  <div className="rc_img">
                    <img src="images/recent_course2.jpg" alt="" />
                  </div>
                  <div className="rc_content text-center">
                    <h3>A Glimpse of Virtual</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </p>
                    <Link className="course_addcart gradient_btn_bg" to="/cart">
                      Add to Cart{" "}
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </Link>
                    <ul>
                      <li>
                        <i
                          className="fa fa-user"
                          aria-hidden="true"
                          style={{ color: "#6a7df1" }}
                        />{" "}
                        1
                      </li>
                      <li>
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#ffcc21" }}
                        />{" "}
                        4.5 Stars
                      </li>
                      <li className="course_price">
                        <i className="fa fa-inr" aria-hidden="true" />
                        20
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="rc_box_item">
                  <div className="rc_img">
                    <img src="images/recent_course3.jpg" alt="" />
                  </div>
                  <div className="rc_content text-center">
                    <h3>A Glimpse of Virtual</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </p>
                    <Link className="course_addcart gradient_btn_bg" to="/cart">
                      Add to Cart{" "}
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </Link>
                    <ul>
                      <li>
                        <i
                          className="fa fa-user"
                          aria-hidden="true"
                          style={{ color: "#6a7df1" }}
                        />{" "}
                        1
                      </li>
                      <li>
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#ffcc21" }}
                        />{" "}
                        4.5 Stars
                      </li>
                      <li className="course_price">
                        <i className="fa fa-inr" aria-hidden="true" />
                        20
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="rc_box_item">
                  <div className="rc_img">
                    <img src="images/recent_course2.jpg" alt="" />
                  </div>
                  <div className="rc_content text-center">
                    <h3>A Glimpse of Virtual</h3>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </p>
                    <Link className="course_addcart gradient_btn_bg" to="/cart">
                      Add to Cart{" "}
                      <i className="fa fa-shopping-cart" aria-hidden="true" />
                    </Link>
                    <ul>
                      <li>
                        <i
                          className="fa fa-user"
                          aria-hidden="true"
                          style={{ color: "#6a7df1" }}
                        />{" "}
                        1
                      </li>
                      <li>
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#ffcc21" }}
                        />{" "}
                        4.5 Stars
                      </li>
                      <li className="course_price">
                        <i className="fa fa-inr" aria-hidden="true" />
                        20
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentCourseSec;
