import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../HomeContainer/Home";
import "./StudentLetter.css";
function StudentLetter() {
  return (
    <>
      <Navbar />
      <div className="Letter">
        {/* {" "}
        <p>
          {" "}
          Full Name <br /> Full Address <br /> Contact Info. <br /> Current Date{" "}
        </p> */}
        <label className="title">
          {" "}
          Write a formal letter stating why you need this document...?
        </label>
        <br />
        <textarea
          className="purpose"
          name="freeform"
          placeholder="Write letter here..."
        ></textarea>
        <input type="submit" />

        <Footer />
      </div>
    </>
  );
}

export default StudentLetter;
