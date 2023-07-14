import { Link } from "react-router-dom";
import React from "react";
import "../styling/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-main" >
        <div className="about-1">
          <div className="about-header">
            <div className="about-header-icon"></div>
            <h1>About</h1>
          </div>
          <div>
            <h3 className="about-headings">My Objectives</h3>
            <p className="about-paragraph">To leverage my diverse background in administration and my passion for technology, I am seeking opportunities to contribute my strong problem-solving skills and strategic thinking to a dynamic organization in the tech industry. I aim to continuously learn and grow, collaborating with a talented team to create innovative solutions that drive positive change and make a lasting impact.</p>
          </div>

          <div>
            <h3 className="about-headings">My Journey</h3>
            <p className="about-paragraph">With a background in administration and over 10 years of experience in the banking sector, 
              I have embarked on an exciting transition to the tech space. My diverse expertise in strategic thinking, 
              attention to detail, and effective communication from my previous career seamlessly integrates into my new tech career.</p>
            <p>Driven by curiosity, I pursued self-study in programming before joining the esteemed Stutern cohort. I bring a fresh perspective and strong problem-solving skills to the table. 
              Combining my administrative background with newfound technical abilities, I am confident in making a valuable contribution to any organization.</p>
            <p>Let's collaborate to build innovative solutions that make a meaningful impact in the world of technology.</p>
          </div>
        </div>
        <div className="about-2">
          <div>
            <h3 className="about-details">More Details</h3>
            <ul className="about-ul">
              <li className="about-2-li"><span className="about-2-li-header">Academic Qualifications:</span>
                <ul>
                  <li>Master of Public Administration</li>
                  <li>BSc.Public Administration</li>
                  <li>OND Business Administration</li>
                </ul>
              </li>
              <li className="about-2-li"><span className="about-2-li-header">Hobbies: </span>
                <ul>
                  <li>Continuous Learning</li>
                  <li>Music</li>
                  <li>Football</li>
                  <li>Networking & Community Involvement</li>
                </ul>
              </li>
              <li className="about-2-li"><span className="about-2-li-header">Telephone Number:</span>
                <ul>
                  <li>(+234)8180302629</li>
                  <li>(+234)9022204232</li>
                </ul>
              </li>
              <li className="about-2-li"><span className="about-2-li-header">Email-Address:</span>
                <ul>
                  Jibolajinadus8@gmail.com
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/skills" className="know-more-link">Skills and Tools</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;