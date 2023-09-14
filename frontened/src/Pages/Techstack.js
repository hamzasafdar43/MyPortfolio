import React from "react";
import "../Styles/techstack.css";
import { techstack } from "../assets/TeckstackApi";
import Fade from "react-reveal/Fade";

function Techstack() {
  return (
    <div id="techstack">
    
        <div>
          <div className="techstack-section">
            <h2 className="text-center tech-heading1">Technologies Stack</h2>
            <hr />
            <p className="text-center p-3">
              👉 including programming Languages, frameworks, databses,
              front-end and back-end tools, and APIs
            </p>
          </div>
          <div className="row">
            {techstack.map((tech) => (
              <div className="col-md-3 col-12">
              <Fade left>
                <div className="card m-2">
                  <div className="card-body">
                    <div className="card-content ">
                      <tech.icon className="tech-icon mr-3" />
                      {tech.name}
                    </div>
                  </div>
                </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>

    </div>
  );
}

export default Techstack;
