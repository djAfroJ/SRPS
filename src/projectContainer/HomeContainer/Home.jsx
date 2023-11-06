import React from "react";
import "./Home.css";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import image3 from "../assets/Screenshot (24).png";

export default function Home() {
  return (
    <div className="Top">
      <div>
        <Navbar />
      </div>
      {/*  home page */}
      <div className="loginSection">
        <Links url="/student-signup" name="Student" style="studentBtn" />
        <Links
          url="/levelCoord-signup"
          name="Level Coordinator"
          style="Lvl-CoordBtn"
        />
        <Links url="/HOD-Signup" name="Head of Department" style="HOD-Btn" />
        <Links
          url="/examofficersignup"
          name="Exam Officer"
          style="ExamOfficer-Btn"
        />
      </div>

      <div className="application-steps">
        <div className="image3">
          <img src={image3} alt="illustrate" className="illustration" />
        </div>
        <div className="application">
          <h3>
            PROCEDURE FOR APPLICATION FOR <br />
            OFFICIAL UNIVERSITY STATEMENT OF RESULT <br />
            (For students)
          </h3>
          <ul>
            <li>Click on button related to your position</li>
            <li>Complete the form</li>
            <li>please correctly fill form </li>
            <li>
              Continue to payment.
              <br />
              (Keep the payment reciept as well as reference number )
            </li>
            <li>
              Payment can be made via online or at a bank
              <br />
              (Students are expected to pay the sum of #500)
            </li>
            <li>
              Applicants are expected to track the status of their application{" "}
              <br />
              via the same portal to confirm completion and mode of access{" "}
            </li>
            <p>
              Student will be notified if the statement of Result is ready !!!
            </p>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
