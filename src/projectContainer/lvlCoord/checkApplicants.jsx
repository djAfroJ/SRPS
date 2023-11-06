// import React from "react";
import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "./LvlCoord.css";
import "./CheckApplication.css"
// import { Chart } from "react-google-charts";

import Links from "../../components/Links";
import Footer from "../../components/Footer";


function checkApplicants() {
  return (
    <div>
      <Navbar />
      <div className="section2">
        <div className="viewport">
          {/* <!-- Sidebar --> */}
          <div className="sidebar">
            <header>
              <a href="#">Level Coordinator</a>
            </header>
            <ul className="nav">
              <li><Links url="/level-coord-dashboard" name="Dashboard" style="action" /></li>
              <li><Links url="/checkApplicants" name="Check Applicants" style="action" /></li>
              <li><Links url="/level-coordinator" name="Log-out" style="action" /></li>
            </ul>
          </div>
        </div>
        <table>
          
        </table>
      </div>       
      <Footer/> 
    </div>
  );
}

export default checkApplicants;
