import React from "react";

const OnlineFeatureSec = () => {
  return (
    <div>
      <section className="online_feature_sec parallax_effect">
        <div className="container">
          <div className="heading_box text-center">
            <h2 className="txt_color_white">Featured Online Classes</h2>
          </div>
          <div className="comman_top">
            <div className="online_feature_area">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="online_feature_box">
                    <div className="online_feature_img">
                      <img src="images/online_feature1.jpg" alt="" />
                    </div>
                    <div className="online_feature_content text-center">
                      <h3>
                        <span className="txt_color_green">01.</span> Great for
                        High{" "}
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="online_feature_box">
                    <div className="online_feature_img">
                      <img src="images/online_feature2.jpg" alt="" />
                    </div>
                    <div className="online_feature_content text-center">
                      <h3>
                        <span className="txt_color_green">02.</span> Group
                        Training
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="online_feature_box">
                    <div className="online_feature_img">
                      <img src="images/online_feature3.jpg" alt="" />
                    </div>
                    <div className="online_feature_content text-center">
                      <h3>
                        <span className="txt_color_green">03.</span> Better for
                        Group Studies
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
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

export default OnlineFeatureSec;
