// import React from "react";
import "../StudentPage/StudentSignup.css";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function HODsignup() {
  const [errors, setErrors] = useState({
    firstnameError: "",
    lastnameError: "",
    middlenameError: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
    staffIDError: "",
  });
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    username: "",
    email: "",
    password: "",
    staffID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation errors when the user starts typing
    setErrors({ ...errors, [`${name}Error`]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Basic validation checks
    if (!formData.firstname) {
      validationErrors.firstnameError = "First Name is required";
    }

    if (!formData.lastname) {
      validationErrors.lastnameError = "Last Name is required";
    }

    if (!formData.username) {
      validationErrors.usernameError = "Username is required";
    }

    if (!formData.email) {
      validationErrors.emailError = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/i.test(formData.email)) {
      validationErrors.emailError = "Email is invalid";
    }

    if (!formData.password) {
      validationErrors.passwordError = "Password is required";
    }

    if (!formData.staffID) {
      validationErrors.staffIDError = "Staff-ID is required";
    }

    // Update the state with validation errors
    setErrors(validationErrors);

    // Check if there are any validation errors before proceeding
    if (Object.keys(validationErrors).length === 0) {
      // If no validation errors, you can submit the form or perform further actions
      console.log(formData);
      alert("Sign-Up Successful");
    }
  };
  return (
    <>
      <Navbar />

      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          <div>{errors.firstnameError}</div>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
          <div>{errors.lastnameError}</div>
          <input
            type="text"
            name="middlename"
            placeholder="Middle Name"
            value={formData.middlename}
            onChange={handleChange}
          />
          <div>{errors.middlenameError}</div>
          <input
            type="text"
            name="staffID"
            placeholder="Staff-ID Number"
            value={formData.staffID}
            onChange={handleChange}
          />
          <div>{errors.staffIDError}</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <div>{errors.usernameError}</div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <div>{errors.emailError}</div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div>{errors.passwordError}</div>

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/level-coordinator">Login</Link>
        </p>
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
export default HODsignup;
