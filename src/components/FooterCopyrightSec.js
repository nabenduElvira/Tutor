import React from "react";
import { Link } from "react-router-dom";

const FooterCopyrightSec = () => {
  return (
    <div>
      {/* footer_copyright_sec */}
      <section className="footer_copyright_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="footer_copy">
                <p>Copyright © 2021. Kawotek Academy. </p>
                <ul>
                  <li>
                    <Link to="/terms" style={{ color: "#fff" }}>
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" style={{ color: "#fff" }}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="powered_by">
                <p>Powered By : Elvira Infotech</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterCopyrightSec;
