import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialPinterestCircular } from "react-icons/ti";
import profileImage from "../assets/images/profile.jpg";
import "./AboutMe.css";
import React, { useState, useEffect } from "react";

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span className="typewriter-text">{displayText}</span>;
};

const AboutMe = () => {
  const passionateText =
    "Passionate software engineer with nearly 3 years of expertise in crafting exceptional web experiences. I specialize in building dynamic, user-centric applications using modern frontend technologies and robust backend solutions. Specialized in ReactJS and modern JavaScript, creating responsive and intuitive user interfaces that deliver exceptional user experiences. I'm dedicated to creating secure, efficient, and innovative solutions that make a real impact. Whether it's developing responsive web applications or implementing automated workflows, I bring a problem-solving mindset and attention to detail to every project.";

  return (
    <div id="about" className="about-me-container">
      <h2 className="heading-container">About Me</h2>
      <div className="about-me-content">
        <div className="text-section">
          <p className="intro">
            Hello! I am Pooja Lohare, a software engineer and frontend
            developer.
          </p>
          <p className="description">
            <TypewriterText text={passionateText} />
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>Phone</h3>
              <p>9325041277</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>lohare.pooja02@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="image-section">
      
      
        <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="social-icons">
            <CiLinkedin className="icon" />
            <FaInstagram className="icon" />
            <RiFacebookCircleLine className="icon" />
            <TiSocialPinterestCircular className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
