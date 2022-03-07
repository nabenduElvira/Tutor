import React from "react";
import { Link } from "react-router-dom";

const BecomeTutorSec = () => {
  return (
    <div>
      <section className="become_tutor_sec parallax_effect">
        <div className="container">
          <div className="become_tutor_desc">
            <p>
              At Kawotek Academy, you can find students really easily, organise
              your lessons and get paid straight into your account.
            </p>
            <Link to="/">Become a Tutor</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeTutorSec;
