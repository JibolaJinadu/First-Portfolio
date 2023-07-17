import React, { useState } from 'react';
import '../styling/Projects.css';
import Loanify from '../assets/Loanify.img.png';
import Ail from '../assets/Ail.img.png';
import Starwars from '../assets/Starwars.img.png';
import Todo from '../assets/Todo.img.png';
import Instagram from '../assets/Instagram.img.png';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: Loanify,
      link: "https://project-loanify-app.vercel.app/",
      caption: "The Project is the development of Loanify App which is an application for loan risk prediction and management.",
      tools: "Axios, Material-UI, crypto-js, CSS, React-js, React-csv, React-dom, React-toastify, Recharts, Font-awesome etc.",    
    },
    {
      src: Ail,
      link: "https://investment-websitess.vercel.app/",
      caption: "A simple Investment webpage offering comprehensive information and seamless navigation for potential investors.",
      tools: " React-js, React-dom, CSS, google-fonts, etc",       
    },
    {
      src: Starwars,
      link: "https://movie-app-gilt-seven.vercel.app/",
      caption: "A dynamic webpage that fetches Star Wars data from an API and presents it in an engaging and user-friendly manner.",
      tools: "Axios, React-js, React-dom, CSS, google-fonts, etc",      
    },
    {
      src: Todo,
      link: "https://to-do-list-app-jibolajinadu.netlify.app/",
      caption: "A user-friendly and intuitive todo application that allows users to create, manage, and track their tasks efficiently.",
      tools: "HMTL, CSS, JavaScript, google-fonts, Font-awesome, etc",     
    },
    {
      src: Instagram,
      link: "https://jibsonthirdmajorcloning.netlify.app/",
      caption: "A visually stunning static replica of Instagram that captures the essence of the platform's design and layout, showcasing the user interface without functional features.",
      tools: "HTML, CSS, google-fonts, font-awesome",      
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="project-container">
      <div className="project-header">
        <div className="project-header-icon"></div>
        <h2 className="underline-transition">My Works</h2>
      </div>
      <h3 className="project-sub-header">
        Here are some of things I've worked on
      </h3>
      <p className="project-sub-header2">Selected Projects</p>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <>
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <div className="numbertext">
                {index + 1} / {images.length}:
                <a
                  key={index}
                  className="visit-site"
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
              <img src={image.src} alt={`Slide ${index + 1}`} />
            </div>
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <div className='slideshow-content'>
                <div className="text"><span className='text-span'>Description: </span>{image.caption}</div>
                <div className="text"><span className='text-span'>Tools: </span>{image.tools}</div>
              </div>
            </div>
          </>
        ))}

        <a className="prev" onClick={prevSlide}>
          &#10094;
        </a>
        <a className="next" onClick={nextSlide}>
          &#10095;
        </a>
      </div>
    </div>
  );
};

export default Projects;