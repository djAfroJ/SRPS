import React from "react";
import "./Student.css";
import Navbar from "../../components/Navbar";
// import "../HomeContainer/Home";
import Links from "../../components/Links";
import Footer from "../../components/Footer";

function StudentApplication() {
  return (
    <div>
      <div className="Top">
        <Navbar />
        {/* <div className="payment-btn">
          <Links url="/student-dashboard" name="Go Back" style="payment" />
        </div> */}
      </div>
      <form className="Application-form">
        <h1> Application Form</h1>
        <div className="content">
          <div className="input-field">
            <input
              type="FirstName"
              placeholder="First Name"
              autocomplete="on"
            />
            <input type="lastName" placeholder="Last Name" autocomplete="on" />
            <input
              type="MatricNumber"
              placeholder="Matric Number"
              autocomplete="on"
            />
            <input type="Email" placeholder="Email Address" autocomplete="on" />
            <input type="tel" placeholder="(+234)_______" autocomplete="on" />

            <input
              type="date"
              // placeholder="Date of Birth"
              autocomplete="nope"
            />

            <div class="form-group">
              <label class="col-md-4 control-label">Department</label>
              <div class="col-md-4 selectContainer">
                <div class="input-field">
                  <select name="department" class="form-control selectpicker">
                    <option value="">Select your Department</option>
                    <option>Department of Computer Science</option>
                    <option>Department of Mathematics</option>
                    <option>Department of Statitics</option>
                    <option>Department of Physics</option>
                    <option>Department of Chemistry</option>
                    <option>Department of Industrial chemistry</option>
                    <option>Department of Biochemistry chemistry</option>
                    <option>Department of Biology</option>
                    <option>Department of Micro-biology</option>
                    <option>Department of Geography</option>
                    <option>Department of Accounting</option>
                    <option>Department of Economics</option>
                    <option>Department of International relations</option>
                    <option>Department of Political Science</option>
                    <option>Department of theatre-Art</option>
                    <option>Department of English</option>
                    <option>Department of Islamic Studies</option>
                    <option>Department of Christian Religious Studies</option>
                    <option>Department of Fine & Applied Arts</option>
                    <option>Department of Drama</option>
                    <option>Department of Mass Communication</option>
                    <option>College of Medicine</option>
                    <option>College of Parmacuetical Studies</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="select">
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
            </div>
          </div>
          <div className="payment-btn">
            <Links
              url="/student-letter"
              name="Proceed to write Letter"
              style="StudentLetter"
            />
          </div>
          <input type="submit" />
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default StudentApplication;
