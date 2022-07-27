import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.img`
  height: 50%;
  width: 50%;
`;
const Title = styled.div``;
const Intro = styled.div``;

const Introduction = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={'coffeeplant.jpeg'} />
        </ImageContainer>
        <Title></Title>
        <Intro></Intro>
      </Wrapper>
    </Container>
  );
};

export default Introduction;
