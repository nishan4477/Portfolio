import React, { useState, useEffect } from 'react';
import './header.scss';
import { Container } from 'react-bootstrap';
import CTA from './CTA';
import me from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  const [name, setName] = useState('');
  const fullName = "Nishan Sakha";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setName(fullName.slice(0, index));
        index++;
       
      } else {
        index = 1
      }
    }, 400); // Adjust the interval as needed
  }, []);

  return (
    <header>
      <Container className='container'>
        <h5>Hello I'm</h5>
        <h1 >{name}</h1>
        <h5>Front End Developer</h5>
        <CTA />
        <HeaderSocial />
        <a className='scroll__down' href="#contact">Scroll down</a>
        <div className="me">
          <img className='w-100' height='100%' src={me} alt="" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
