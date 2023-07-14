import React, { useEffect, useState } from "react";
import "../styling/AnimatedText.css";

const AnimatedText = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="animated-text-container">
      <h2 className={`animated-text ${showText ? "show" : ""}`}>
        <span className="initial-letter">A</span> Front-End Developer
      </h2>
    </div>
  );
};

export default AnimatedText;