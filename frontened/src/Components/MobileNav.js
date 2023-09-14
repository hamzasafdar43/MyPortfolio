import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Components/mobilenav.css";
import {
  FcAbout,
  FcBiotech,
  FcCallback,
  FcHome,
  FcPortraitMode,
  FcReading,
  FcVideoProjector,
  FcWorkflow,
} from "react-icons/fc";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

function MobileNav() {
  const [showMenu, setShowMenue] = useState(false);
  const showHandler = () => {
    setShowMenue(!showMenu);
  };

  return (
    <div className="main-nav">
      <div className="mobile-nav">
        <GiHamburgerMenu size={30} onClick={showHandler} />
        <span className="mobile-nav-title">My Portfolio</span>
        {showMenu && (
          <Fade left>
            <div className="menu-icon-mobile-nav">
            <div className="nav-link">
              <Link to="home" spy={true} smooth={true} offset={50}>
                <div
                  className="icons-sidebar-section d-flex"
                  onClick={() => setShowMenue(false)}
                >
                  <div>
                    <FcHome className="ml-4 mr-2" />
                  </div>
                  <div className="d-inline mt-1 heading"> Home</div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="about" spy={true} smooth={true} offset={50}>
                <div
                  className="icons-sidebar-section d-flex"
                  onClick={() => setShowMenue(false)}
                >
                  <div>
                    <FcAbout className="ml-4 mr-2" />
                  </div>
                  <div className="d-inline mt-1 heading">About </div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="education" spy={true} smooth={true} offset={50}>
                <div
                  className="icons-sidebar-section d-flex"
                  onClick={() => setShowMenue(false)}
                >
                  <div>
                    <FcReading className="ml-4 mr-2" />
                  </div>
                  <div className="d-inline mt-1 heading"> Education</div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="techstack" spy={true} smooth={true} offset={50}>
                <div
                  className="icons-sidebar-section d-flex"
                  onClick={() => setShowMenue(false)}
                >
                  <div>
                    <FcBiotech className="ml-4 mr-2" />
                  </div>
                  <div className="d-inline mt-1 heading"> Tech Stack</div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="project" spy={true} smooth={true} offset={50}>
                <div
                  className="icons-sidebar-section d-flex"
                  onClick={() => setShowMenue(false)}
                >
                  <div>
                    <FcVideoProjector className="ml-4 mr-2" />
                  </div>
                  <div className="d-inline mt-1 heading">Project</div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="workexp" spy={true} smooth={true} offset={50}>
                <div
                  className="icons-sidebar-section d-flex"
                  onClick={() => setShowMenue(false)}
                >
                  <div>
                    <FcWorkflow className="ml-4 mr-2" />
                  </div>
                  <div className="d-inline mt-1 heading"> Work Experience</div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="contact" spy={true} smooth={true} offset={50}>
                <div
                  className="icons-sidebar-section d-flex"
                  onClick={() => setShowMenue(false)}
                >
                  <div>
                    <FcCallback className="ml-4 mr-2" />
                  </div>
                  <div className="d-inline mt-1 heading">Contact</div>
                </div>
              </Link>
            </div>
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
}

export default MobileNav;
