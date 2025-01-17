import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    { name: "ReactJS", percentage: 75 },
    { name: "HTML5", percentage: 95 },
    { name: "Bootstrap", percentage: 97 },
    { name: "CSS3", percentage: 90 },
    { name: "JavaScript", percentage: 80 },
    { name: "Core Java", percentage: 65 },
    { name: "SQL", percentage: 65 },
    { name: "NodeJS", percentage: 60 },
  ];

  
  const renderStars = (percentage) => {
    const totalStars = 5;
    const filledStars = Math.round((percentage / 100) * totalStars);
    const emptyStars = totalStars - filledStars;

    return (
      <>
        {"★".repeat(filledStars)}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

 
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };


  const skillRows = chunkArray(skillsData, 3);

  return (
    <div id="skills" className="skills-section">
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-container">
        {skillRows.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((skill, index) => (
              <div key={index} className="skill-item">
                <p className="skill-name">{skill.name}</p>
                <div className="skill-stars">
                  {renderStars(skill.percentage)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
