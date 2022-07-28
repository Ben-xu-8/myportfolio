import React from 'react';
import AboutMe from '../components/AboutMe';
import Banner from '../components/Banner';
import Introduction from '../components/Introduction';
import Navigationbar from '../components/Navigationbar';

const Home = () => {
  return (
    <div>
      <Navigationbar />
      <Introduction />
      <Banner />
      <AboutMe />
    </div>
  );
};

export default Home;
