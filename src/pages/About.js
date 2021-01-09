import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-2.jpg';


const About = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title='Beautiful views' desc='Never seen before' />
      About
    </>
  );
};

export default About;