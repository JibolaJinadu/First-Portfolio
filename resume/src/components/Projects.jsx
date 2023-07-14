
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "project1.jpg",
      link: "https://project1.com"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      image: "project2.jpg",
      link: "https://project2.com"
    },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Recent Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;