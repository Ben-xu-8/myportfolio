import React from 'react';
import AboutMe from '../components/AboutMe';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Navigationbar from '../components/Navigationbar';

const Home = () => {
  return (
    <div>
      <Navigationbar />
      <Introduction />
      <Banner />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
