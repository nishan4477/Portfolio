import React from "react";
import "../services/services.scss";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <Container>
        <Row className="d-flex align-center justify-content-around gap-3" >
          <Col className="service__card" lg="3" sm='3'>
            <article className="service">
            <div className="service__head">
              <h3>UI/UX Designer</h3>
            </div>

            <ul className="service__list ">
              {Array.from({ length: 5 }).map((_, i) => (
                <li className="d-flex gap-2" key={i}>
                  <AiOutlineCheckCircle />
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>
              ))}
            </ul>
            </article>
          </Col>

          <Col className="service__card" lg="3" sm='5'>
            <article className="service text-center">
            <div className="service__head ">
              <h3>WEB DEVELOPMENT</h3>
            </div>

            <ul className="service__list ">
              {Array.from({ length: 9 }).map((_, i) => (
                <li className="d-flex gap-2" key={i}>
                  <AiOutlineCheckCircle />
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>
              ))}
            </ul>
            </article>
          </Col>




          <Col className="service__card" lg="3" sm='3'>
            <article className="service text-center">
            <div className="service__head">
              <h3>CONTENT CREATION</h3>
            </div>

            <ul className="service__list ">
              {Array.from({ length: 7 }).map((_, i) => (
                <li className="d-flex gap-2" key={i}>
                  <AiOutlineCheckCircle />
                  <p>Lorem ipsum dolor sit amet.</p>
                </li>
              ))}
            </ul>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
