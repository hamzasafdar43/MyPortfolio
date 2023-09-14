import React, { useState } from "react";
import "../Styles/home.css"; 
import Typewriter from "typewriter-effect";
import About from "./About";
import { ThemeProvider, useTheme } from "../Context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill , BsBellFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Modal } from "antd";
import GetallMessage from "../GetMessage/GetallMessage";
// import Rotate from 'react-reveal/Rotate';


function Home({ toggle }) {
  const [theme, setTheme] = useTheme();
  const [model ,setModel] = useState(false)
  const themeHandler =  () =>{
    setTheme((prevState)=>(prevState === "light" ? "dark" :"light"))
  }
  return (
    <div id="home">
      <div className="theme-btn" onClick={themeHandler} style={{cursor:"pointer"}}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} style={{ color: "#fff" }} />
        ) : (
          <BsFillSunFill size={30} style={{ color: "#fff" }} />
        )}
      </div>
      
      <div className={toggle ? "header-section" : "header-section-active"}>
      <Fade top>
        <h2 className="home-1st-heading">Hi i am !</h2>
        <div className="home-2nd-heading">
          <Typewriter
            options={{
              strings: ["FullStack Developer!", "Mern Stack Developer!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        </Fade>
        <Fade bottom> 
        <div className="home-btn">
         <a href="http://api.whatsapp.com/send?phone=03414443243"
         rel="noReference"
         target="_blank"
         ><button className="hire-btn m-2">Hire me</button></a> 
          <button className="cv-btn">My Resume</button>
          
          <BsBellFill size={30} style={{color:"rgb(207, 215, 62)", cursor:"pointer"}} className="ml-3" onClick={()=>setModel(true)}/>
        
         
              <Modal  title={"All Message"}
              open={model}
              onCancel={() => setModel(false)}
              footer={false}>
              <GetallMessage/>
            </Modal>
           
         
        </div>
        </Fade>
      </div>
     
      <About />
    
    </div>
  );
}

export default Home;
