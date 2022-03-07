import React from "react";
import { Link } from "react-router-dom";

const LearningCategorySec = () => {
  return (
    <div>
      <section className="learning_category_sec">
        <div className="container-fluid">
          <div className="comman_top-">
            <div className="l_category_area">
              <div className="row">
                <div className="col-lg-4 category_box_main">
                  <div className="category_box cate_large">
                    <div className="category_img">
                      <div className="category_img_inner">
                        <img src="images/cate_english_img.jpg" alt="" />
                      </div>
                    </div>
                    <div className="category_txt">
                      <div className="pool_txt_inner">
                        <h2>English</h2>
                      </div>
                    </div>
                    <div className="cate_features">
                      <ul>
                        <li>0 Tutors</li>
                        <li>0 Courses</li>
                        <li>0 Students</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 category_box_main">
                  <div className="category_box cate_large">
                    <div className="category_img">
                      <div className="category_img_inner">
                        <img src="images/cate_math_img.jpg" alt="" />
                      </div>
                    </div>
                    <div className="category_txt">
                      <div className="pool_txt_inner">
                        <h2>Mathematics</h2>
                      </div>
                    </div>
                    <div className="cate_features">
                      <ul>
                        <li>0 Tutors</li>
                        <li>0 Courses</li>
                        <li>0 Students</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 category_box_main">
                  <div className="category_box cate_large">
                    <div className="category_img">
                      <div className="category_img_inner">
                        <img src="images/cate_physics_img.jpg" alt="" />
                      </div>
                    </div>
                    <div className="category_txt">
                      <div className="pool_txt_inner">
                        <h2>Physics</h2>
                      </div>
                    </div>
                    <div className="cate_features">
                      <ul>
                        <li>0 Tutors</li>
                        <li>0 Courses</li>
                        <li>0 Students</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col category_box_main">
                  <div className="category_box cate_small">
                    <div className="category_img">
                      <div className="category_img_inner">
                        <img src="images/cate_chemistry_img.jpg" alt="" />
                      </div>
                    </div>
                    <div className="category_txt">
                      <div className="pool_txt_inner">
                        <h2>Chemistry</h2>
                      </div>
                    </div>
                    <div className="cate_features">
                      <ul>
                        <li>0 Tutors</li>
                        <li>0 Courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col category_box_main">
                  <div className="category_box cate_small">
                    <div className="category_img">
                      <div className="category_img_inner">
                        <img src="images/cate_biology_img.jpg" alt="" />
                      </div>
                    </div>
                    <div className="category_txt">
                      <div className="pool_txt_inner">
                        <h2>Biology</h2>
                      </div>
                    </div>
                    <div className="cate_features">
                      <ul>
                        <li>0 Tutors</li>
                        <li>0 Courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col category_box_main">
                  <div className="category_box cate_small">
                    <div className="category_img">
                      <div className="category_img_inner">
                        <img src="images/cate_portuguese_img.jpg" alt="" />
                      </div>
                    </div>
                    <div className="category_txt">
                      <div className="pool_txt_inner">
                        <h2>Portuguese</h2>
                      </div>
                    </div>
                    <div className="cate_features">
                      <ul>
                        <li>0 Tutors</li>
                        <li>0 Courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col category_box_main">
                  <div className="category_box cate_small">
                    <div className="category_img">
                      <div className="category_img_inner">
                        <img src="images/cate_conversonal_img.jpg" alt="" />
                      </div>
                    </div>
                    <div className="category_txt">
                      <div className="pool_txt_inner">
                        <h2>Conversonal English</h2>
                      </div>
                    </div>
                    <div className="cate_features">
                      <ul>
                        <li>0 Tutors</li>
                        <li>0 Courses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col category_box_main cate_more_main">
                  <div className="category_box cate_more">
                    <Link to="/course-list">
                      View More <i className="fa fa-plus"></i>{" "}
                    </Link>
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

export default LearningCategorySec;
