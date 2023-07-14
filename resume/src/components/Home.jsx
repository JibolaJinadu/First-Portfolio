
import React from "react";
import "../styling/Home.css";
import AnimatedText from "./AnimatedText";
import myself from "../styling/Jibson.jpg"
import { Link } from "react-router-dom";
import About from "./About";


const Home = () => {
  return (
    <>
    <section className="home-container">
        <div className="home-main">
            <div className="home-1">
                <p className="home-1-item salutation">Hi there,</p>
                <h1 className="home-1-item name">I'm Jibola Jinadu</h1>
                <AnimatedText/>      
                <p className="home-1-item passion">"My passion is crafting captivating websites that leave a lasting impression, with a focus on user-centric design, seamless functionality, and accessible experiences."</p>
            </div>
            <div className="home-2">
                <img className="profile-picture" src={myself} style={{width:"160px", height:"160px"}} alt="mypix" />
                <p ><Link to="/about" className="know-more-link">More about me</Link></p>
            </div>
        </div>
    </section>
    <About/>
    </>
  );
};


export default Home;