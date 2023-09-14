import React from "react";
import "../Styles/about.css";
import Techstack from './Techstack'
import Projects from "./Projects";
import Education from "./Education";
import WorkExp from "./WorkExp";
import Contact from "./Contact";
import RubberBand from 'react-reveal/RubberBand';
import { Footer } from "antd/es/layout/layout";

 
function About({ toggle }) {
  return (
    <>
      
        <div className="container" id="about">
        <div className="row about-section">
        <RubberBand>
          <div className="col-md-6 col-12">
          <img
                src="./pic/img1.webp"
                alt="profile-img"
                className="about-img"
              />
          </div>
          <div className="col-md-6 col-12">
          <h2 className="about-heading text-center">
                <u>About us</u>
              </h2>
              <div className="about-para">
                Hi! i am Ali Hamza and I am a Full Stack Web Developer. I have
                done different web application projects in my professional
                career, using various frontend and backend frameworks and
                technologies. For frontend, I'm proficient in utilizing modern
                web technologies such as JavaScript, JQuery, Bootstrap, React, I
                specialize in Node with Express/MongoDB, using these robust
                technologies to build scalable and efficient web applications.
                If you need a Full Stack web developer to build modern and
                scalable web applications, I am here to help
              </div>
          </div>
          </RubberBand>
        </div>
        <Education/>
        <Techstack/>
        <Projects/>
        <WorkExp/>
        <Contact/>
        <Footer/>
     
      </div>
     
      
    </>
  );
}

export default About;
