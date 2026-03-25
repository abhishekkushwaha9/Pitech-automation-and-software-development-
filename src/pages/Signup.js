import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      {/* ===== LEFT CARD: COMPANY INFO ===== */}
      <div className="signup-info-card">
        <h1 className="signup-company-name">
          Pitech Automation & Software Solutions
        </h1>
        <p className="signup-description">
          Pitech Automation & Software Solutions Pvt. Ltd. is a leading company providing innovative software solutions and industrial automation systems. We help businesses streamline operations, improve efficiency, and drive growth with cutting-edge technology.
        </p>
        <ul className="signup-list">
          <li>Industrial Automation</li>
          <li>Software Development</li>
          <li>IIOT Solutions</li>
          <li>Custom Software for Manufacturing</li>
        </ul>
      </div>

      {/* ===== RIGHT CARD: SIGNUP FORM ===== */}
      <div className="signup-form-card">
        <h2 className="signup-title">
          Create Account
        </h2>
        <p className="signup-subtitle">
          Join us and get access to our software solutions.
        </p>

        <Input label="Full Name" placeholder="Enter your full name" />
        <Input label="Email Address" placeholder="Enter your email" />
        <Input label="Phone Number" placeholder="Enter phone number" />
        <Input label="Company Name" placeholder="Company / Organization" />
        <Input label="Password" type="password" placeholder="Create password" />
        <Input label="Confirm Password" type="password" placeholder="Confirm password" />

        <button className="signup-button">
          Sign Up 🚀
        </button>

        <p className="signup-footer">
          Already have an account?{" "}
          <span
            className="signup-login-link"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

/* ===== INPUT COMPONENT ===== */
function Input({ label, type = "text", placeholder }) {
  return (
    <div className="signup-input-group">
      <label className="signup-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="signup-input"
      />
    </div>
  );
}
