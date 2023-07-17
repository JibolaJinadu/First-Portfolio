import React, { useState } from 'react';
import '../styling/Skills.css';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState('soft');

  const handleToggle = () => {
    setSelectedSkill(selectedSkill === 'soft' ? 'hard' : 'soft');
  };

  return (
    <div className='skills-container'>
      <div className="project-header">
        <div className="project-header-icon"></div>
        <h2 className="underline-transition">Skills & Tools</h2>
      </div>
      <div className='skill-body'>
        <div className="toggle-button-container">
          <div className={`toggle-button ${selectedSkill === 'hard' ? 'active' : ''}`} onClick={handleToggle}>
            <input type="radio" id="soft" className="toggle-radio" checked={selectedSkill === 'soft'} readOnly />
            <input type="radio" id="hard" className="toggle-radio" checked={selectedSkill === 'hard'} readOnly />
            <label htmlFor="soft" className="toggle-label">Soft Skills</label>
            <label htmlFor="hard" className="toggle-label">Hard Skills</label>
            <div className="toggle-slider" />
          </div>

          {selectedSkill === 'soft' && (
            <div className="skill-list">
              <h3 className="skill-list-head">Non-technical Skills:</h3>
              <ul className='skills-ul nontech'>
                <li>Problem-solving</li>
                <li>Decision-making</li>
                <li>Time-management</li>
                <li>Critical thinking</li>
                <li>Good communication</li>
                <li>Attention to detail</li>
                <li>Continuous-learning</li>
                <li>Emotional Intelligence</li>
                <li>Client-focused approach</li>
                <li>Teamwork & collaboration</li>
              </ul>
            </div>
          )}

          {selectedSkill === 'hard' && (
            <div className="skill-list">
              <h3 className="skill-list-head">Technical Skills:</h3>
              <ul className='skills-ul tech'>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>CSS Frameworks</li>
                <li>Responsive Design</li>
                <li>UI/UX Design Principles</li>
                <li>Version Control Systems</li>
                <li>Browser Developer Tools</li>
                <li>Web applications deployment</li>
                <li>Debugging & Troubleshooting</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;