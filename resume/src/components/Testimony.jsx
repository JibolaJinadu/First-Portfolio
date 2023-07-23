import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../styling/Testimony.css";

const Testimony = () => {
  return (
    <div className="testimony-container">
      <div className="project-header">
        <div className="project-header-icon"></div>
        <h2 className="underline-transition">Testimonies</h2>
      </div>
      <div className="testimony-card-top">
        <div className="testimony-card">
          <div className="testimony-content">
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
            <h3>Dosu Roseline<span className="twitterhandle">@DosuRoseline</span></h3>
            <p>
                "Jibola brought creativity and efficiency to the table. 
                His contributions were instrumental in delivering a top-
                notch web app."
            </p>
          </div>
        </div>
      </div>

      <div className="testimony-card-bottom">
        <div className="testimony-card">
          <div className="testimony-content">
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
            <h3>Adegoke Deborah<span className="twitterhandle">@AdegokeOyindam9</span></h3>
            <p>
            "Working with Jibson was a pleasure! 
            His code quality and collaboration skills elevated Loanify app project."
            </p>
          </div>
        </div>
        <div className="testimony-card">
          <div className="testimony-content">
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
            <h3>Adeyera Elizabeth<span className="twitterhandle">@Lizzy_ashy</span></h3>
            <p>
            "Highly impressed by Jibola's dedication. 
            Their problem-solving and team spirit made the web app development a success."
            </p>
          </div>
        </div>
      </div>

      <div className="testimony-card-top">
        <div className="testimony-card">
          <div className="testimony-content">
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
            <h3>Dolapo Ojulawo<span className="twitterhandle">@timydada</span></h3>
            <p>
            "A reliable team player, J-boy always delivered on time. Their expertise and positive attitude were invaluable for the web app's success."
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Testimony;
