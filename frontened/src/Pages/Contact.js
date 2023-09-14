import React from "react";
import "../Styles/contact.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate'
import antd, { Form, Input, Table, message } from 'antd'
import TextArea from "antd/es/input/TextArea";
import axios from 'axios'

function Contact() {
  const formHandler = async(value)=>{
   try {
    const res = await axios.post("http://localhost:5000/sendMessage" , value)
    if(res.data.success){
      message.success(res.data.message)
    }
   } catch (error) {
    message.error("something went wrong")
   }
  }
  return (
    <div className="container" id="contact">
      <div className="contact-heading">
        <h2 className="text-center tech-heading1">Contact</h2>
        <hr />
      </div>
      <div className="contact">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 center-line">
          <Flip left>
            <img
              src="./pic/img5.jpg"
              alt="contact-img"
              className="contact-img"
            />
            </Flip>
          </div>

          <div className="col-lg-6 col-md-6 col-12 form-div">
          <Rotate top right>
            <div className="contact-icon">
              <p className="mr-2">Contact with me</p>
              <AiFillLinkedin color="blue" size={36} />
              <AiFillGithub size={36} />
              <BsFacebook color="blue" size={36} />
            </div>
            <div className="or">
              <div className="line" />
              <p>or</p>
              <div className="line" />
           </div>
            <div className="main-form">
        
        <Form onFinish={formHandler}>
          <Form.Item   name="name"  className='m-3'>
            <Input type='text' placeholder='Enter your name' required  className="forms-input" />
          </Form.Item>
          <Form.Item   name="email"  className='m-3'>
            <Input type='email' placeholder='Enter your email' required className="forms-input"   />
          </Form.Item>
          <Form.Item   name="mesg"  className='m-3'>
          <TextArea type='text' placeholder='Enter message'   className="forms-input" />
          </Form.Item>
            <button className="submit-btn form-control">SUBMIT</button>
          </Form>
       
             
                
            </div>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
