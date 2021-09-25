import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function navbar() {
  return (
    <nav className="topbar navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        brandName
      </Link>
      <div>
        <ul className="navbar-nav">


          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>


          <li className="nav-item">
            <Link
              to="/patientDemographic"
              className={window.location.pathname === "/patientDemographic" ? "nav-link active" : "nav-link"}
            >
              PatientDemogrphic
            </Link>
          </li>


          <li className="nav-item">
            <Link
              to="/patientRecord"
              className={window.location.pathname === "/patientRecord" ? "nav-link active" : "nav-link"}
            >
              patientRecord
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/schedule"
              className={window.location.pathname === "/schedule" ? "nav-link active" : "nav-link"}
            >
              schedule
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
