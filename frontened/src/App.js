import React from "react";
import LayOut from "./Pages/LayOut";
import ScrollToTop from "react-scroll-to-top";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";

import MobileNav from './Components/MobileNav'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'


function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <div>
          <MobileNav/> 
          <Router>
            <Routes>
              <Route  path="/" element={  <LayOut />} />
           
            </Routes>
          </Router>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{ backgroundColor: " rgb(42, 73, 73)", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
