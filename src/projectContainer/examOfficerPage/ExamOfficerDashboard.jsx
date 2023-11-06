import React from 'react'
import Navbar from "../../components/Navbar";
import Links from "../../components/Links";
import Footer from "../../components/Footer";

function ExamOfficerDashboard() {
  return (
    <div>
      <div className="Top">
        <Navbar />
      </div>
      <div className="section2">
        <div className="viewport">
          {/* <!-- Sidebar --> */}
          <div className="sidebar">
            <header>
              <a href="#">Exam Officer </a>
            </header>
            <ul className="nav">
              <li><Links url="/examOfficer-dashboard" name="Dashboard" style="action" /></li>
              <li><Links url="/checkApplicants" name="Check Applicants" style="action" /></li>
              <li><Links url="/level-coordinator" name="Log-out" style="action" /></li>
            </ul>
          </div>
        </div>
        <div className="dashboard">
          <div className="details">
            <h1>
              {" "}
              Good Morning,
              Mr./Mrs. .........
            </h1>
           
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ExamOfficerDashboard
