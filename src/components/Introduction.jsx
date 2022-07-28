import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  max-height: 87%;
`;

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

const Introduction = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={'coffeeplant.jpeg'} />
        </ImageContainer>
        <Description>
          <Title>I'm Ben.</Title>
          <Intro>A SOFTWARE ENGINEER.</Intro>
        </Description>
      </Wrapper>
    </Container>
  );
};

export default Introduction;
