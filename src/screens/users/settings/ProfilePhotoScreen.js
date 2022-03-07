import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageUpload from "./ImageUpload";

const ProfilePhotoScreen = () => {
  const [student_details, setStudent_details] = useState([]);

  useEffect(() => {
    const getStudentDetails = async () => {
      const response = await axios.get(
        `https://kawotekbackend.elvirainfotech.org/students/user/${
          JSON.parse(localStorage.getItem("userInfo")).id
        }`
      );
      setStudent_details(response.data);
    };
    getStudentDetails();
  });

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
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cd_page_left">
                <div className="dash_left-part comman_box_shadow mb-4">
                  <h2>
                    Profile Photo
                    <span>Upload a Profile Photo</span>
                  </h2>
                  <div className="photo-part">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center">
                        {student_details.image !== null &&
                        student_details.image !== "" ? (
                          <img
                            src={`https://kawotekbackend.elvirainfotech.org/public/images/uploads/${student_details.image}`}
                            alt=""
                            style={{ height: 120, width: 120 }}
                          />
                        ) : (
                          <img
                            src={`https://ui-avatars.com/api/?name=${student_details.first_name}+${student_details.last_name}`}
                            alt=""
                            style={{ height: 120, width: 120 }}
                          />
                        )}
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-12">
                        <h4>Guidelines</h4>
                        <ul>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            Make a strong first impression with a good profile
                            picture
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-check-circle text-success" />
                            </span>
                            Make sure your picture is clear, professional, and
                            personal
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-times-circle text-danger" />
                            </span>
                            Do not impersonate others
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-12">
                        <div className="but-area">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="tooltip"
                            data-placement="top"
                            // title="Twitter"
                          >
                            {/* Upload a file from your computer */}
                            <ImageUpload />
                          </button>
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

export default ProfilePhotoScreen;
