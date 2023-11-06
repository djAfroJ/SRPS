import React from "react";
import Navbar from "../../components/Navbar";
import Links from "../../components/Links";
import './examOfficer'
export default function examOfficer() {
  return (
    <div className="section">
      <div className="Top">
        <Navbar />
      </div>
      <div>
        <form className="login-form">
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="StaffID"
                placeholder="Staff-ID Number"
                autoComplete="nope"
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
              />
            </div>
            <div className="btn-signIn">
              <Links url="/examOfficer-dashboard" name="Sign-in" style="SignIn" />
            </div>
            <a href="/" className="forgot">
              Forgot Your Password?
            </a>
            <h4>
              <a href="/">Go Back</a>
            </h4>
          </div>
        </form>
      </div>
        
    </div>
  );
}
