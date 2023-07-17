import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "../styling/About.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

const resumeLink = "https://drive.google.com/file/d/15uszZPAzs9ribDe878QQuSFs19xVLl9g/view?usp=drive_link";

  return (
    <section className="about-container">
      <div className="about-main">
        <div className="about-1">
          <div className="about-header">
            <div className="about-header-icon"></div>
            <h1 className="underline-transition">About Me</h1>
          </div>
          <div>
            <h3 className="about-headings">My Objectives</h3>
            <p className="about-paragraph">
              To leverage my diverse background in administration and my passion
              for technology, I am seeking opportunities to contribute my strong
              problem-solving skills and strategic thinking to a dynamic
              organization in the tech space. I aim to continuously learn and
              grow, collaborating with a talented team to create innovative
              solutions that drive positive change and make a lasting impact.
            </p>
          </div>

          <div>
            <h3 className="about-headings">My Journey</h3>
            <p className="about-paragraph">
              With a background in administration and over 10 years of
              experience in the banking sector, I have embarked on an exciting
              transition to the tech space. My diverse expertise in strategic
              thinking, attention to detail, and effective communication from my
              previous career seamlessly integrates into my new tech career.
            </p>
            {showMore ? (
              <>
                <p>
                  Driven by curiosity, I pursued self-study in programming
                  before joining the esteemed Stutern cohort. I bring a fresh
                  perspective and strong problem-solving skills to the table.
                  Combining my administrative background with newfound technical
                  abilities, I am confident in making a valuable contribution to
                  any organization.
                </p>
                <p>
                  Let's collaborate to build innovative solutions that make a
                  meaningful impact in the world of technology.
                </p>
              </>
            ) : null}
            <button className="readmore-bttn" onClick={toggleShowMore}>
              {showMore ? "Show less....." : "Show more....."}
            </button>
            <p>Kindly <a href={resumeLink} target="_blank" rel="noopener noreferrer" download="resume.pdf">download my Resume</a> for extended profile.</p> 
          </div>
        </div>
        <div className="about-2">
          <div>
            <h3 className="about-details">More Details</h3>
            <ul className="about-ul">
              <li className="about-2-li">
                <span className="about-2-li-header">
                  Academic qualifications:
                </span>
                <ul>
                  <li>Stutern Graduate Accelerator </li>
                  <li>Master of Public Administration</li>
                  <li>BSc.Public Administration</li>
                  <li>OND Business Administration</li>
                </ul>
              </li>
              <li className="about-2-li">
                <span className="about-2-li-header">Interests: </span>
                <ul>
                  <li>Sports & Fitness</li>
                  <li>Music & Comedy</li>
                  <li>Technology & Continuous Learning</li>
                  <li>Networking & Community Involvement</li>
                </ul>
              </li>
              <li className="about-2-li">
                <span className="about-2-li-header">Telephone number:</span>
                <ul>
                  <li>(+234)8180302629</li>
                  <li>(+234)9022204232</li>
                </ul>
              </li>
              <li className="about-2-li">
                <span className="about-2-li-header">Email-address:</span>
                <ul>Jibolajinadus8@gmail.com</ul>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/skills" className="know-more-link">
              Skills and Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;