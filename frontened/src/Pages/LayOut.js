import React, { useState } from 'react'
import Home from './Home'
import '../Styles/LayOut.css'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menue from '../Menue/Menue';
;



function LayOut() {
    const [toggle , setToggle] = useState(false)
    const toggleHandler = () =>{
        setToggle(!toggle)
    }
  return (
    <div className='sidebar-section'>
        <div className={toggle ?'sidebar':'sidebar-toggle'}>
            <div className='sidebar-toggle-icon' onClick={toggleHandler}>
           
                <p>
                    {
                        toggle ? <AiOutlineDoubleLeft size={30} />: <AiOutlineDoubleRight size={30} />
                    }
                </p>
              
            </div>
            <Menue toggle={toggle}/>
        </div>
        <div>
            <div>
                <Home toggle={toggle}/>
            </div>
        </div>
    </div>
  )
}

export default LayOut