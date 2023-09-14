import React from "react";
import "../Styles/workexp.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

import {MdOutlineFastfood} from 'react-icons/md'
import {BsFillCalculatorFill} from 'react-icons/bs'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {BiSolidUser} from 'react-icons/bi'
 
function WorkExp() {
  return (
    <div className="workexp-background" id="workexp">
      <div className="workexp">
        <h2 className="text-center tech-heading1">my work experience</h2>
        <hr />
        <p className="text-center p-3">
          👉 Here to my work experience in mern stack React Node Express Mongodb
        
        </p>
      </div>
      <div className="workexp-vertical">
      <VerticalTimeline lineColor="rgb(70, 88, 88)" >
        

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2023 - present "
            iconStyle={{ background: "rgb(70, 88, 88)", color: "#fff" }}
            icon={<BiSolidUser />}
          >
            <h3 className="vertical-timeline-element-title">DOCTOR APPOINTMENTS APP</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              MERN STACK REACT NODE EXPRESS MONGODB,
            </h4>
            <p>
            This project is complete in 30/6/2023. this project book doctor appointments.
             add functionality to fetch all user all doctor and complete authentication.
            </p>
          </VerticalTimelineElement>
            
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2022 - 2023 "
            iconStyle={{ background: "rgb(70, 88, 88)", color: "#fff" }}
            icon={<MdOutlineFastfood/>}
          >
            <h3 className="vertical-timeline-element-title">GOFOOD DELIVERY APP</h3>
            <h4 className="vertical-timeline-element-subtitle">
              MERN STACK REACT NODE EXPRESS MONGODB,
            </h4>
            <p>
            This project is Gofood Delivery app. add some functionality add to cart and 
            handle all cart items edit delete update, and store order in mongodb and fetch
            fetch order in backend to frontened, and this app complete authenication.....
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
           className="vertical-timeline-element--work "
           contentStyle={{ background: "#fff", color: "black" }}
           contentArrowStyle={{ borderRight: "7px solid  #fff" }}
           date="2022 - 2023 "
           iconStyle={{ background: "rgb(70, 88, 88)", color: "#fff" }}
            icon={<RiMoneyDollarCircleFill/>}
          >
            <h3 className="vertical-timeline-element-title">EXPENSE MANAGEMENTS </h3>
            <h4 className="vertical-timeline-element-subtitle">
              MERN STACK REACT NODE EXPRESS MONGODB,
            </h4>
            <p>
           This project expense managements. to store icome and expense with catagory base
           where to money use and where to come that to show a page to all catagory all incom+
           expense amount and fetch incom percentage , expense percentage,
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid #fff " }}
            date="2023 - present  "
            iconStyle={{ background: "rgb(70, 88, 88)", color: "#fff" }}
            icon={<BsFillCalculatorFill/>}
          >
            <h3 className="vertical-timeline-element-title">CALCULATOR</h3>
            <h4 className="vertical-timeline-element-subtitle">
             REACT JS
            </h4>
            <p>
            Create a calculator through react- js
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>



      </div>
    </div>
  );
}

export default WorkExp;
