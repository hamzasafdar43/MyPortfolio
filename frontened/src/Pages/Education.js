import React from "react";
import "../Styles/education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import {SiCoursera} from 'react-icons/si'
import {FaUniversity} from 'react-icons/fa'

function Education() {
  return (
    <div className="education" id="education">
      <div className="education-section">
        <h2 className="text-center tech-heading1">Education</h2>
        <hr />
        <p className="text-center p-3">👉 Here to my Education and courses .</p>
      </div>
      <div className="eduction-all">
        <VerticalTimeline lineColor="rgb(70, 88, 88)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2017 - 2019 "
            iconStyle={{ background: "rgb(70, 88, 88)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">ICS</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              MERIDIAN COLLEGE SARGODHA
            </h4>
            <p>
              Obtined marks 736/1100 and highest marks in Computer Science 68/75
              Total percentage in 66%
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2019 - 2023 "
            iconStyle={{ background: "rgb(70, 88, 88)", color: "#fff" }}
            icon={<FaUniversity />}
          >
            <h3 className="vertical-timeline-element-title">BS-IT</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              FROM VIRTUAL UNIVERSITY 
            </h4>
            <p>
              Ichra Campous Lahore
            </p>
          </VerticalTimelineElement>
            
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2022 - 2023 "
            iconStyle={{ background: "rgb(70, 88, 88)", color: "#fff" }}
            icon={<SiCoursera/>}
          >
            <h3 className="vertical-timeline-element-title">FULL STACK COURSE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              FROM PNY TRANING LAHORE
            </h4>
            <p>
             1 year Course of full stack in mern from pny training lahore arfa karime tower
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
