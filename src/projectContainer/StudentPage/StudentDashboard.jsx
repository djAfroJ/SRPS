import React from "react";
import Navbar from "../../components/Navbar";
import "./Student.css";
import Links from "../../components/Links";
import Footer from "../../components/Footer";

export default function StudentDashboard() {
  return (
    <div>
      <Navbar />
      <div className="student">
        <div className=" student-dashboard">
          <div className="student-det">
            <h1>
              {" "}
              Good Morning,
              <br /> Joel
            </h1>
            <label className="heading"> Your application status:</label>
            <div class="mainDiv">
              <div class="childDiv">
                <span class="text"> 10% </span>
              </div>
            </div>
          </div>
        </div>

        <div className="second-section">
          {/* <div className="select">
            <div className="level">
              <label className="heading">
                Statement of result for <br /> what level?
              </label>
              <br />
              <select className="dropdown">
                <option>Select level</option>
                <option>100 level</option>
                <option>200 level</option>
                <option>300 level</option>
                <option>400 level</option>
              </select>
            </div>
            <div className="semester">
              <label>
                Statement of result <br /> for what semester?
              </label>
              <br />
              <select className="dropdown">
                <option>Select Semester</option>
                <option>First Semester</option>
                <option>Second Semester</option>
              </select>
            </div>
          </div> */}
          <div className="apply">
            <Links
              url="/student-application"
              name="Continue Application "
              style="pay"
            />
            <a className="back" href="/">
              <h4>Log-out</h4>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
