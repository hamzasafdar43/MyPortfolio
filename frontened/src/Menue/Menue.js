import React from "react";
import "../Menue/menue.css";
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
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
function Menue({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <Zoom top>
            <div className="navebar-img">
              <img src="./pic/img1.webp" alt="profile-img" />
            </div>
          </Zoom>

          <div>
            <Fade left>
              <div className="nav-link">
                <Link to="home" spy={true} smooth={true} offset={50}>
                  <div className="icons-sidebar-section d-flex">
                    <div>
                      <FcHome className="ml-4 mr-2" />
                    </div>
                    <div className="d-inline mt-1 heading"> Home</div>
                  </div>
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={50}>
                  <div className="icons-sidebar-section d-flex">
                    <div>
                      <FcAbout className="ml-4 mr-2" />
                    </div>
                    <div className="d-inline mt-1 heading">About </div>
                  </div>
                </Link>
              </div>

              <div className="nav-link">
                <Link to="education" spy={true} smooth={true} offset={50}>
                  <div className="icons-sidebar-section d-flex">
                    <div>
                      <FcReading className="ml-4 mr-2" />
                    </div>
                    <div className="d-inline mt-1 heading"> Education</div>
                  </div>
                </Link>
              </div>

              <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={50}>
                  <div className="icons-sidebar-section d-flex">
                    <div>
                      <FcBiotech className="ml-4 mr-2" />
                    </div>
                    <div className="d-inline mt-1 heading"> Tech Stack</div>
                  </div>
                </Link>
              </div>

              <div className="nav-link">
                <Link to="project" spy={true} smooth={true} offset={50}>
                  <div className="icons-sidebar-section d-flex">
                    <div>
                      <FcVideoProjector className="ml-4 mr-2" />
                    </div>
                    <div className="d-inline mt-1 heading">Project</div>
                  </div>
                </Link>
              </div>

              <div className="nav-link">
                <Link to="workexp" spy={true} smooth={true} offset={50}>
                  <div className="icons-sidebar-section d-flex">
                    <div>
                      <FcWorkflow className="ml-4 mr-2" />
                    </div>
                    <div className="d-inline mt-1 heading">
                      {" "}
                      Work Experience
                    </div>
                  </div>
                </Link>
              </div>

              <div className="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={50}>
                  <div className="icons-sidebar-section d-flex">
                    <div>
                      <FcCallback className="ml-4 mr-2" />
                    </div>
                    <div className="d-inline mt-1 heading">Contact</div>
                  </div>
                </Link>
              </div>
            </Fade>
          </div>
        </>
      ) : (
        <div>
          <Fade left>
            <div className="nav-link">
              <Link to="home" spy={true} smooth={true} offset={50}>
                <div className="icons-sidebar-section ">
                  <div>
                    <FcHome
                      className="ml-4 mr-2"
                      title="home"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="about" spy={true} smooth={true} offset={50}>
                <div className="icons-sidebar-section ">
                  <div>
                    <FcAbout
                      className="ml-4 mr-2"
                      title="about"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="education" spy={true} smooth={true} offset={50}>
                <div className="icons-sidebar-section ">
                  <div>
                    <FcReading
                      className="ml-4 mr-2"
                      title="education"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="techstack" spy={true} smooth={true} offset={50}>
                <div className="icons-sidebar-section ">
                  <div>
                    <FcBiotech
                      className="ml-4 mr-2"
                      title="techstack"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="project" spy={true} smooth={true} offset={50}>
                <div className="icons-sidebar-section ">
                  <div>
                    <FcVideoProjector
                      className="ml-4 mr-2"
                      title="projects"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="workexp" spy={true} smooth={true} offset={50}>
                <div className="icons-sidebar-section ">
                  <div>
                    <FcWorkflow
                      className="ml-4 mr-2"
                      title="experience"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </Link>
            </div>

            <div className="nav-link">
              <Link to="contact" spy={true} smooth={true} offset={50}>
                <div className="icons-sidebar-section ">
                  <div>
                    <FcCallback
                      className="ml-4 mr-2"
                      title="Contact"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
}

export default Menue;
