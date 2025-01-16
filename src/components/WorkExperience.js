import React from 'react';
import './WorkExperience.css'

const WorkExperience = () => {
  const experiences = [
    {
      company: "Cognizant Technology Solutions Corporation",
      role: "Software Engineer",
      duration: "Jan 2021 - Aug 2024 ",
      responsibilities: [
        "Developed and maintained responsive web applications using React and JavaScript.",
        "Collaborated with cross-functional teams to ensure seamless user experiences.",
        "Implemented reusable components and optimized performance.",
        "Facilitated smooth transitions for project updates in production environments",
        
      ],
    }
  ]

  return(
    <div id="work" className="work-experience">
      <h2 className="work-experience-title">COMPANY</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-card">
          <h3 className="company-name">{experience.company}</h3>
          <p className="role-duration">
            {experience.role} | {experience.duration}
          </p>
          <ul className="responsibilities-list">
            {experience.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;