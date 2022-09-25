import React from 'react';
import styled from 'styled-components';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Navigationbar from '../components/Navigationbar';
import Projects from '../components/Projects';

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Home = () => {
  return (
    <Container>
      <Navigationbar />
      <Introduction />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
