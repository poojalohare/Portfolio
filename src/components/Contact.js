import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialPinterestCircular } from "react-icons/ti";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="contact" className="contact-section">
      <h2 className="contact-title">CONTACT ME</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-content">
            <div className="info-header">
              <h3>Pooja Lohare</h3>
              <p className="designation">Software Engineer</p>
            </div>

            <div className="info-item">
              <h4 className="info-header">Phone</h4>
              <p>9325041277</p>
            </div>

            <div className="info-item">
              <h4 className="info-header">Email</h4>
              <p>lohare.pooja02@gmail.com</p>
            </div>

            <div className="social-contact-icons">
              <CiLinkedin className="icon-contact" />
              <FaInstagram className="icon-contact" />
              <RiFacebookCircleLine className="icon-contact" />
              <TiSocialPinterestCircular className="icon-contact" />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="copyright-text">
          © Copyright {new Date().getFullYear()} Pooja Lohare.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
