import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Links from "../../components/Links";
function HOD() {
  return (
    <>
      <div className="section">
        <Navbar />
        <form className="login-form">
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="matricNumber"
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
              <Links url="/hod-dashboard" name="Sign-in" style="SignIn" />
            </div>
            <a href="/" className="forgot">
              Forgot Your Password?
            </a>
            <h4>
              <a href="/">Go Back</a>
            </h4>
          </div>
        </form>
       
        <Footer />
      </div>
    </>
  );
}

export default HOD;
