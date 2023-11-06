import React from "react";
import image3 from "./projectContainer/assets/Screenshot (23).png";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="container">
      <img src={image3} alt="illustrate" className="illustration"></img>
      <div className="btns">
        <button className="btn1">Log-In</button>
        <button className="btn2">Sign-Up</button>
      </div>
    </div>
  );
}

export default SignUp;
