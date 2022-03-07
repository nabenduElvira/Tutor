import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const DeactivateScreen = () => {
  const DeactivateAccount = async () => {
    swal({
      title: "Are you sure?",
      text: "Deleted Accounts Cannot be Reactivated.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        console.log("deleted");
        const getStudent_id = await axios.get(
          `https://kawotekbackend.elvirainfotech.org/students/user/${
            JSON.parse(localStorage.getItem("userInfo")).id
          }`
        );
        // console.log(getStudent_id.data.sid);
        const res = await axios.delete(
          `https://kawotekbackend.elvirainfotech.org/students/${getStudent_id.data.sid}`
        );
        console.log(res);
        localStorage.clear();
        window.location.href = "/";
      }
    });
  };
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
                        <Link to="/deactivate">
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
                  <h2>Deactivate Account</h2>
                  <div className="photo-part">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center">
                        <img src="images/error.png" alt="" />
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-12">
                        <div className="but-area">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={DeactivateAccount}
                          >
                            Deactivate Account
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

export default DeactivateScreen;
