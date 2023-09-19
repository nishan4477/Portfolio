import React from "react";
import "./contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp}  from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4bsaa4q', 'template_ju69pma', form.current, 'TWyttjOCAQr9wQ2r-')
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <Container>
        <Row className="mt-4 d-flex justify-content-around align-items-center">
          <Col lg="4">
            <Row className="contact__card">
              <h3 className="contact__icon">
                <AiOutlineMail  />
              </h3>
              <h3>Email</h3>
              <h5>nishansakha@gmail.com</h5>
              <a href="mailto:nishansakha@gmail.com" target="_blank">Send a message here.</a>
            </Row>
            <Row className="contact__card">
              {" "}
              <h3  className="contact__icon">
                <BsFacebook/>
              </h3>
              <h3>Messenger</h3>
              <h5>nishansakha</h5>
              <a href="https://m.me/nishan.sakha" target="_blank">Send a message here.</a>
            </Row>
            <Row className="contact__card">
              {" "}
              <h3  className="contact__icon">
                <BsWhatsapp />
              </h3>
              <h3>Whatsapp</h3>
              <h5>+9779843812806</h5>
              <a  href="https://api.whatsapp.com/send?phone+9779843812806" target="_blank">Send a message here.</a>
            </Row>
          </Col>

          <Col  lg="5">
            <form ref={form} onSubmit={sendEmail} className="form" action="">
              <input type="text" name="name" placeholder="Enter your Full name" required />
              <input type="email" name="email" placeholder="Enter your email" required/>
              <textarea name="message" id=""  rows="7"></textarea>
              <button  type="submit" className="btn btn-lg btn-primary py-4 "  >Send Message </button>





            </form>


          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
