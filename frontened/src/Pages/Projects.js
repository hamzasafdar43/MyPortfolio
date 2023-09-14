import React from "react";
import '../Styles/project.css'
import Rotate from 'react-reveal/Rotate';


function Projects() {
  return (
    <div id="project">
      <Rotate top left>
      <div className="project-section" >
        <h2 className="text-center tech-heading1">To Recent Project</h2>
        <hr />
        <p className="text-center p-3">
          👉 Here to my top recent three projects in mern stack .  
        </p>
      </div>
    <div className="row ads-card">
 
      <div className="col-md-4">
        <div className="card-rounded">
          <div className="card-imge"> 
            <span className="imge-badge">Full Stack</span>
            <div className="project-img-div">
              <img src="./pic/img2.jpg" alt="project-img-1" className="project-img"/>
              </div>
             <div className="d-flex justify-content-center">
              <span className="badge-domine">React</span>
              <span className="badge-domine">Node</span>
              <span className="badge-domine">Express</span>
              <span className="badge-domine">MongoDB</span>
             </div>
              <div className="card-body">
                <div>
                  <h6 className="text-upercase text-center">Doctor Appointments app full stack</h6>
                </div>
                <div className="view-btn-head">
                  <a href="https://github.com/hamzasafdar43/DoctorAppointment">
                  <button className="view-btn">View</button>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
  
      <div className="col-md-4">
        <div className="card-rounded">
          <div className="card-imge">
            <span className="imge-badge">Full Stack</span>
            <div className="project-img-div">
              <img src="./pic/img3.jpg" alt="project-img-1" className="project-img"/>
              </div>
             <div className="d-flex justify-content-center">
             <span className="badge-domine">React</span>
              <span className="badge-domine">Node</span>
              <span className="badge-domine">Express</span>
              <span className="badge-domine">MongoDB</span>
             </div>
              <div className="card-body">
                <div>
                  <h6 className="text-upercase text-center">GoFood app full stack</h6>
                </div>
                <div className="view-btn-head">
                  <a href="https://github.com/hamzasafdar43/GoFood">
                  <button className="view-btn">View</button>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
     
      <div className="col-md-4">
        <div className="card-rounded">
          <div className="card-imge">
            <span className="imge-badge">Full Stack</span>
            <div className="project-img-div">
              <img src="./pic/img4.jpg" alt="project-img-1" className="project-img"/>
              </div>
             <div className="d-flex justify-content-center">
             <span className="badge-domine">React</span>
              <span className="badge-domine">Node</span>
              <span className="badge-domine">Express</span>
              <span className="badge-domine">MongoDB</span>
             </div>
              <div className="card-body">
                <div>
                  <h6 className="text-upercase text-center">Expense Managment  app </h6>
                </div>
                <div className="view-btn-head">
                  <a href="https://github.com/hamzasafdar43/Expense-Management">
                  <button className="view-btn">View</button>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
     
    </div>
    </Rotate>
    </div>
  );
}

export default Projects;
