import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "VMO2 –Cognizant | E-commerce Platform",
      description:
        "I've crafted intuitive user interfaces for both admin and customer sections using React.js, while designing dynamic product and feature pages with HTML5 and CSS3. I streamlined the product creation process, improving efficiency in sales management. Additionally, I developed custom Drupal modules to enhance website functionality and user experience, and optimized performance by integrating lazy loading in product pages",
      technologies: [
        "React",
        "CSS",
        "JavaScript",
        "HTML5",
        "JIRA",
        "DRUPAL",
        "NODEJS",
      ],
      // link: "https://myportfolio.com",
    },
    {
      name: "Telefonica - Cognizant | E-commerce Platform ",
      description:
        "I've designed intuitive user interfaces for both admin and customer sections using React.js, and built dynamic product and feature pages with HTML5 and CSS3. By streamlining the product creation process, I enhanced sales management efficiency. I also developed custom Drupal modules to elevate functionality and user experience, and optimized performance with lazy loading in product pages.",
      technologies: [
        "CSS",
        "JavaScript",
        "HTML5",
        "JIRA",
        "DRUPAL",
        "NODEJS",
        "Bootstrap",
        "JENKINS",
      ],
      // link: "https://myportfolio.com",
    },
  ];

  return (
    <div id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            {/* <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
