import React from "react";
import "./experience.scss";
import { Col, Container, Row } from "react-bootstrap";
import {GiCheckMark} from 'react-icons/gi'
const Experience = () => {
  return (
    <section id="experience" className="mt-4">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <Container className="pt-3">
        <Row className="d-flex justify-content-between" >
          <Col lg='5' className="ex__card">
          <div className="pb-4 text-center"><h2>Frontend Development</h2></div> 
            <Row>
              <Col>
            
              <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>HTML</h4>
                 <p>Experienced</p>
                </Col>
              </Row>
              
            
              </Col>

              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>CSS</h4>
                 <p>Intermediate</p>
                </Col>
              </Row></Col>
            </Row>
            <Row>
              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>Javascript</h4>
                 <p>Intermediate</p>
                </Col>
              </Row></Col>

              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>Bootstrap</h4>
                 <p>Experienced</p>
                </Col>
              </Row></Col>
            </Row>
            <Row>
              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>Tailwind</h4>
                 <p>Intermediate</p>
                </Col>
              </Row></Col>

              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>React</h4>
                 <p>Experienced</p>
                </Col>
              </Row></Col>
            </Row>
          </Col>

          <Col lg='5' className="ex__card">
          <div className="pb-4 text-center"><h2>Backend Development</h2></div> 
         
          <Row>
              <Col> 
            
               <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>Node JS</h4>
                 <p>Beginner</p>
                </Col>
              </Row></Col>

              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>Mongo DB</h4>
                 <p>None</p>
                </Col>
              </Row></Col>
            </Row>
            <Row>
              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>PHP</h4>
                 <p>Basic</p>
                </Col>
              </Row></Col>

              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>Python</h4>
                 <p>Basic</p>
                </Col>
              </Row></Col>
            </Row>
            <Row>
              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>MYSQL</h4>
                 <p>Basic</p>
                </Col>
              </Row></Col>

              <Col>  <Row>
                <Col><GiCheckMark/></Col>
                <Col><h4>Java</h4>
                 <p>Basic</p>
                </Col>
              </Row></Col>
            </Row>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
