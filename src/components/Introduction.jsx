import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { mobile } from '../responsive';

const Container = styled.div`
  ${mobile({
    marginBottom: '20px',
  })}
`;
const Wrapper = styled.div``;
const ImageContainer = styled(motion.div)`
  height: max-content;
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;
const Image = styled(motion.img)`
  max-height: 80%;
  width: 95%;
  ${mobile({
    width: '100%',
  })}
`;

const Top = styled.div`
  display: flex;
  ${mobile({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  })}
`;
const Bottom = styled.div``;

const Description = styled(motion.span)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0px 0px 0px 50px;
  ${mobile({
    alignItems: 'center',
  })}
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
  ${mobile({
    textAlign: 'center',
  })}
`;
const Banner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Learn = styled.span`
  cursor: pointer;
  margin-bottom: 20px;
`;

const ArrowImage = styled.img`
  cursor: pointer;
  margin: 0;
  padding: 0;
  margin-top: -5px;
  width: 70px;
  height: 70px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Introduction = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <ImageContainer>
            <Image
              src={'coffeeplant.jpeg'}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.5,
              }}
            />
          </ImageContainer>
          <Description
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
            <Right>
              <Title>I'm Ben.</Title>
              <Intro>A SOFTWARE ENGINEER.</Intro>
            </Right>
          </Description>
        </Top>
        <Bottom>
          <Banner
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
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
