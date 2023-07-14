
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-brand">
        <h2 className="logo">Jibola-Jinadu</h2>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
