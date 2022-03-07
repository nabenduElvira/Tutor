import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const OnlineTraining = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
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
    <div>
      <section className="recent_training_sec">
        <div className="container">
          <div className="heading_box text-center">
            <h2>Online Training</h2>
          </div>
          <div className="comman_top">
            <div className="recent_training_area">
              <OwlCarousel
                className="owl-carousel owl-theme owl_box_shadow_only owl_equal_height"
                id="recent_training_slider"
                {...options}
              >
                <div className="item">
                  <div className="rt_box_item">
                    <div className="rt_img">
                      <img src="images/training1.jpg" alt="" />
                    </div>
                    <div className="rt_content text-center">
                      <h3>Mathematic</h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                      <div className="ot_price">
                        <h5>By Michel Sam</h5>
                        <ul>
                          <li className="old_price">₦ 9.000</li>
                          <li className="new_price">₦ 5.000</li>
                        </ul>
                      </div>
                      <div className="ot_buy_area">
                        <h6>
                          4.5{" "}
                          <i
                            className="fa fa-star"
                            aria-hidden="true"
                            style={{ color: "#fbe545" }}
                          />
                        </h6>
                        <Link className="ot_buy_btn" to="/">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="rt_box_item">
                    <div className="rt_img">
                      <img src="images/training2.jpg" alt="" />
                    </div>
                    <div className="rt_content text-center">
                      <h3>Mathematic</h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                      <div className="ot_price">
                        <h5>By Michel Sam</h5>
                        <ul>
                          <li className="old_price">₦ 9.000</li>
                          <li className="new_price">₦ 5.000</li>
                        </ul>
                      </div>
                      <div className="ot_buy_area">
                        <h6>
                          4.5{" "}
                          <i
                            className="fa fa-star"
                            aria-hidden="true"
                            style={{ color: "#fbe545" }}
                          />
                        </h6>
                        <Link className="ot_buy_btn" to="/">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="rt_box_item">
                    <div className="rt_img">
                      <img src="images/training3.jpg" alt="" />
                    </div>
                    <div className="rt_content text-center">
                      <h3>Mathematic</h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                      <div className="ot_price">
                        <h5>By Michel Sam</h5>
                        <ul>
                          <li className="old_price">₦ 9.000</li>
                          <li className="new_price">₦ 5.000</li>
                        </ul>
                      </div>
                      <div className="ot_buy_area">
                        <h6>
                          4.5{" "}
                          <i
                            className="fa fa-star"
                            aria-hidden="true"
                            style={{ color: "#fbe545" }}
                          />
                        </h6>
                        <Link className="ot_buy_btn" to="/">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="rt_box_item">
                    <div className="rt_img">
                      <img src="images/training2.jpg" alt="" />
                    </div>
                    <div className="rt_content text-center">
                      <h3>Mathematic</h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                      <div className="ot_price">
                        <h5>By Michel Sam</h5>
                        <ul>
                          <li className="old_price">₦ 9.000</li>
                          <li className="new_price">₦ 5.000</li>
                        </ul>
                      </div>
                      <div className="ot_buy_area">
                        <h6>
                          4.5{" "}
                          <i
                            className="fa fa-star"
                            aria-hidden="true"
                            style={{ color: "#fbe545" }}
                          />
                        </h6>
                        <Link className="ot_buy_btn" to="/">
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineTraining;
