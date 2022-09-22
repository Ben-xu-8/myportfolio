import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Learn = styled.span``;

const Image = styled.img`
  width: 70px;
  height: 70px;
`;

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <Container>
      <Wrapper>
        <Learn data-aos='fade-up'> Learn More </Learn>
        <Image src={'down-arrow.gif'} />
      </Wrapper>
    </Container>
  );
};

export default Banner;
