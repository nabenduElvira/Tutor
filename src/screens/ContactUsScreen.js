import React from "react";

const ContactUsScreen = () => {
  return (
    <div>
      <section className="contact_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-8 no-pad">
              {/* <Iframe src="http://plnkr.co/" height="500" width="500"/> */}
              <iframe
                title="uniqueTitle"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.921729500996!2d-71.53948658503548!3d42.47195333602145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3931cd7adec21%3A0x4c097f9232c325a5!2sOld%20Harvard%20Rd%2C%20Boxborough%2C%20MA%2001719%2C%20USA!5e0!3m2!1sen!2sin!4v1635315218490!5m2!1sen!2sin"
                frameBorder={0}
              />
            </div>
            <div className="col-lg-4 col-md-4 no-pad">
              <div className="contact_information_box">
                <h3>Kawotek Academy</h3>
                <div className="info">
                  <ul>
                    <li>
                      <span className="ft_icon2">
                        <i className="fa fa-phone-square" aria-hidden="true" />
                      </span>{" "}
                      000.111.1234
                    </li>
                    <li>
                      <span className="ft_icon2">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      7461 Old Harvard Rd. Middle
                    </li>
                    <li>
                      <span className="ft_icon2">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </span>{" "}
                      info@domain.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="contact_form_area">
            <h3>Get In Touch</h3>
            <form className="contact_form">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group btn_box">
                    <button type="submit" className="btn btn_f_submit">
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsScreen;
