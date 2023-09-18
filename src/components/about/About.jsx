
import React from 'react'
import "./about.scss"
import { Col, Container, Row } from 'react-bootstrap'
import IMG from '../../assets/aboutimg.jpg'
import {SiJsonwebtokens} from 'react-icons/si'


const About = () => {
  return (
<section id='about' >
  <h5>Get To Know</h5>
  <h2>About Me</h2>

  <Container className='pt-3'> 
  <Row>
    <Col lg='5' sm='5' xs='5'>
      <div className="about__img">
      <img className=' border rounded' src={IMG} alt="" />


      </div>
     

    
    </Col>

    <Col lg='7'>
    <Row className='gap-5'>
      <Col className='about__card text-center ' lg='3'>
      <h2 className='mb-3'><SiJsonwebtokens/></h2>
      <h3>Experience</h3>
      <p>1+ year</p>
        
      </Col>
      <Col className='about__card text-center' lg='3'>
      <h2 className='mb-3'><SiJsonwebtokens/></h2>
      <h3>Client</h3>
      <p>10+</p>
        
      </Col>
      <Col className='about__card text-center' lg='3'>
      <h2 className='mb-3'><SiJsonwebtokens/></h2>
      <h3>Project</h3>
      <p>50+</p>
        
      </Col>


    </Row>
    <Row>
      <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga atque assumenda excepturi quo provident modi quia suscipit iusto, eius fugit eaque doloribus minima dolorum aperiam, enim saepe laboriosam voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate odio sit ab beatae fugit, rem quasi possimus, et tempora officiis ipsum maiores incidunt! Odit optio iure quo alias non.</p>
    </Row>
    </Col>



  </Row>


    
  </Container>

</section>
  )
}

export default About