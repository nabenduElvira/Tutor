import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel"; //ReactOwlCarousel

const TestimonialsSec = () => {
  return (
    <div>
      <section className="testimonials_sec bg_color_light_gray">
        <div className="container">
          <div className="heading_box text-center">
            <h2>
              <span>What Students Say</span>
            </h2>
          </div>
          <div className="comman_top">
            <div className="testimonial_area">
              <OwlCarousel
                items={1}
                loop={true}
                dots={false}
                // autoplay={true}
                nav={true}
                className="owl-carousel owl-theme"
                id="testimonal_slider"
              >
                <div className="item">
                  <div className="client_content text-center">
                    <div className="testi_img">
                      <img src="images/testi_img1.jpg" alt="" />
                    </div>
                    <p>
                      I have come to courses for two summers to study English. I
                      have attended private classes with Marie Claire. The time
                      has been invaluable, positive, fun and very educational.
                      Marie Claire is creative, so I plan to return to my
                      studies at Lingivca next summer if not before.
                    </p>
                    <h4>Julia Mann</h4>
                    <div className="test_rating">
                      <h5>
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="client_content text-center">
                    <div className="testi_img">
                      <img src="images/testi_img1.jpg" alt="" />
                    </div>
                    <p>
                      I have come to courses for two summers to study English. I
                      have attended private classes with Marie Claire. The time
                      has been invaluable, positive, fun and very educational.
                      Marie Claire is creative, so I plan to return to my
                      studies at Lingivca next summer if not before.
                    </p>
                    <h4>Julia Mann</h4>
                    <div className="test_rating">
                      <h5>
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </h5>
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

export default TestimonialsSec;
