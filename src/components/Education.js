import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      id: 1,
      period: "2016 - 2020",
      degree: "Bachelor of Computer Science",
      university: "BAMU University",
      location: "MIT Aurangabad, Maharashtra",
      description:
        "Gained a strong foundation in computer science concepts, including programming, data structures, algorithms, and database management. Completed coursework in software engineering, web development, artificial intelligence, and computer networks. Worked on hands-on projects, developing web applications and automating workflows. Participated in technical seminars and hackathons, sharpening problem-solving and teamwork skills.",
    },
    {
      id: 2,
      period: "2016",
      degree: "Higher Secondary Certificate",
      university: "MSBSHSE",
      location: "Aurangabad, Maharashtra",
      description:
        "Completed coursework in science, including mathematics, physics, and chemistry, building a strong foundation for technical education. Gained analytical and problem-solving skills through practical lab work and theoretical studies. Achieved a solid academic performance, preparing for further studies in computer science and technology.",
    },
    {
      id: 3,
      period: "2014",
      degree: "Secondary School Certificate",
      university: "MSBSHSE",
      location: "Aurangabad, Maharashtra",
      description:
        "Acquired a well-rounded education covering core subjects such as mathematics, science, and social studies, building a strong academic foundation. Demonstrated consistent academic excellence and an enthusiasm for learning. Engaged in co-curricular activities like science exhibitions, sports events, and cultural programs, enhancing creativity and collaboration skills.",
    },
  ];

  return (
    <div id="education" className="education-section">
      <h2 className="education-title">EDUCATION</h2>
      <div className="timeline-container">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-item">
            <div className="timeline-marker"></div>
            <div className="education-content">
              <span className="period">{edu.period}</span>
              <h3 className="degree">{edu.degree}</h3>
              <h4 className="university">{edu.university}</h4>
              <p className="location">{edu.location}</p>
              <p className="edudescription">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
