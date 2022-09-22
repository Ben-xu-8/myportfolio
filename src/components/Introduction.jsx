import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  height: max-content;
`;
const Image = styled.img`
  max-height: 80%;
  width: 95%;
`;

const Top = styled.div`
  display: flex;
`;
const Bottom = styled.div``;

const Description = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 0px 0px 50px;
`;

const Title = styled.h1`
  font-family: Inconsolata;
  font-size: 4.5rem;
  font-weight: 300;
  margin: 0px;
  padding: 0px;
`;
const Intro = styled.h2`
  font-size: 1.2rem;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Learn = styled.span`
  cursor: pointer;
`;

const ArrowImage = styled.img`
  cursor: pointer;
  width: 70px;
  height: 70px;
`;

const Introduction = () => {
  useEffect(() => {
    AOS.init({ delay: 500, once: false, mirror: true, easing: 'ease' });
  });
  return (
    <Container>
      <Wrapper
        data-aos='fade-up'
        data-aos-duration='2000'
        data-aos-mirror='true'
        data-aos-once='false'
      >
        <Top
          data-aos='fade-up'
          data-aos-duration='2000'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <ImageContainer
            data-aos='fade-up'
            data-aos-duration='2000'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <Image src={'coffeeplant.jpeg'} />
          </ImageContainer>
          <Description
            data-aos='fade-up'
            data-aos-duration='2000'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <Title>I'm Ben.</Title>
            <Intro>A SOFTWARE ENGINEER.</Intro>
          </Description>
        </Top>
        <Bottom>
          <Banner>
            <Link to='projects' spy={true} smooth={true}>
              <Learn> Learn More </Learn>
            </Link>
            <Link to='projects' spy={true} smooth={true}>
              <ArrowImage src={'down-arrow.gif'} />
            </Link>
          </Banner>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Introduction;
