import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    designation: "",
    phone: "",
    email: "",
    subject: "Automation Solution",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevent double submission
    setIsLoading(true);
    console.log("Submitting form data:", formData);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "";
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      if (response.ok) {
        console.log("Form successfully submitted to backend!");
        setSubmitted(true);
        timerRef.current = setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            company: "",
            designation: "",
            phone: "",
            email: "",
            subject: "Automation Solution",
            message: "",
          });
          setSubmitted(false);
        }, 5000);
      } else {
        console.error("Backend returned an error. Status:", response.status);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form at frontend:", error);
      alert("An error occurred while sending the message. Ensure the backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg" style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.85), rgba(37, 99, 235, 0.75)), url('/images/1759499868874.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div className="contact-hero-content">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="contact-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>Contact Us</span>
            </nav>

            {/* Hero Text */}
            <h1 className="contact-hero-title">
              Get in <span>Touch</span>
            </h1>
            <p className="contact-hero-subtitle" style={{ color: "white" }}>
              Ready to transform your manufacturing? Let's discuss your automation and Industry 4.0 requirements.
            </p>
          </div>
        </div>
        <div className="contact-hero-wave">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. Our team will contact you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send us a Message</h2>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="designation">Designation *</label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                        placeholder="Production Manager"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="Automation Solution">Automation Solution</option>
                      <option value="IIoT Platform">IIoT Platform</option>
                      <option value="Robotics">Robotics</option>
                      <option value="Products">Products</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your manufacturing requirements..."
                      rows="6"
                    />
                  </div>

                  <button type="submit" className="form-submit-btn" disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}>
                    {isLoading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Info Cards */}
            <div className="contact-info-wrapper">
              <h2>Contact Information</h2>

              <div className="info-card">
                <div className="info-card-icon">📍</div>
                <div className="info-card-content">
                  <h4>Address</h4>
                  <p> Plot No. 111, Sector 8, IMT Manesar, Gurugram, Haryana 122051 </p>
                  <p className="info-card-meta">India</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">📞</div>
                <div className="info-card-content">
                  <h4>Phone</h4>
                  <p>+91 77373 74330</p>
                  <p className="info-card-meta">Available Mon-Sat</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">✉️</div>
                <div className="info-card-content">
                  <h4>Email</h4>
                  <p>info@pitechautomation.com</p>
                  <p className="info-card-meta">We respond within 24 hours</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">🕐</div>
                <div className="info-card-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday</p>
                  <p className="info-card-meta">9:30 AM - 6:30 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4446414384347!2d76.89558417562436!3d28.375635275805955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3f529dbc74a7%3A0x914b967dade9c05b!2sPi%20Tech%20Automation%20and%20Software%20solution%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1772869895846!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          title="Pi Tech Automation and Software solution Pvt Ltd"
        ></iframe>
      </section>
    </div>
  );
}
