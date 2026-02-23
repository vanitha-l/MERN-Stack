import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [showDescription, setShowDescription] = useState(false);

  const projects = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio built using React and Vite."
    },
    {
      name: "Todo App",
      description: "Task management app using React Hooks."
    },
    {
      name: "Weather App",
      description: "Weather forecasting app using API integration."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>

            {showDescription && <p>{project.description}</p>}

            <button onClick={() => setShowDescription(!showDescription)}>
              {showDescription ? "Show Less" : "Show More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;