
import React from "react";

const Skills = () => {
  const skills = ["HTML5", "CSS3", "JavaScript", "React", "Git", "GitHub", "WordPress", "Responsive Design", "Command Line", "Firebase"];

  return (
    <section>
      <h2>Skills & Tools</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;