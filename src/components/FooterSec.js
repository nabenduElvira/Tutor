import React from "react";
import { Link } from "react-router-dom";

const FooterSec = () => {
  return (
    <div>
      {/* footer_sec */}
      <section className="footer_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer_box">
                {/* <h2 className="ft_heading">About</h2> */}
                <div className="ft_contact">
                  <img
                    className="ft_logo"
                    src="images/footer_logo.png"
                    alt=""
                  />
                  <p>
                    Discuss with the tutee the amount of time necessary to
                    complete each part of their task. Discuss with the tutee the
                    amount of time necessary to complete each part of their
                    task.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer_box">
                <h2 className="ft_heading">Useful Links</h2>
                <div className="ft_links">
                  <ul>
                    <li>
                      <Link to="/">Free Consultation</Link>
                    </li>
                    <li>
                      <Link to="/">Visit Us</Link>
                    </li>
                    <li>
                      <Link to="/">Chat with us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer_box">
                <h2 className="ft_heading">Contact</h2>
                <div className="ft_contact">
                  <ul>
                    <li>
                      <span className="ft_icon">
                        <i className="fa fa-phone-square" aria-hidden="true" />
                      </span>{" "}
                      000.111.1234
                    </li>
                    <li>
                      <span className="ft_icon">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      7461 Old Harvard Rd. Middle
                    </li>
                    <li>
                      <span className="ft_icon">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </span>{" "}
                      info@domain.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer_box">
                <h2 className="ft_heading">Follow Us</h2>
                <div className="footer_social">
                  <ul>
                    <li>
                      <Link to="/" target="_blank">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/" target="_blank">
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="/" target="_blank">
                        <i className="fa fa-youtube" aria-hidden="true" />
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="/" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterSec;
