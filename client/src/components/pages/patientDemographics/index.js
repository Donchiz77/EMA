import React from "react";
import "./style.css";

function PatientDemographic() {
  return (
    <div className="navbar">
      <section className="pd-box">
        <div className="pd-name">
          <div>
            <textarea>Last Name</textarea>
          </div>
          <div>
            <textarea>First Name</textarea>
          </div>
        </div>
        <div>
          <textarea>email@email.com</textarea>
        </div>
        <div>
          <textarea>password</textarea>
          <textarea>repeat password</textarea>
        </div>
        <button>Submit</button>
      </section>
    </div>
  );
}

export default PatientDemographic;
