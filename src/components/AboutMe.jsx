import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px 0px 0px 100px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const TitleContainer = styled.div``;
const Title = styled.h1`
  font-weight: 400;
`;
const DescriptionContainer = styled.div``;
const Info = styled.div`
  padding-right: 100px;
`;
const Description = styled.p`
  font-size: 1.2rem;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  border-radius: 5%;
  max-height: 75%;
`;

const AboutMe = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <TitleContainer>
            <Title>About Me</Title>
          </TitleContainer>
          <DescriptionContainer>
            <Description>
              Previously a mechanical engineer now turned to software, I have
              developed a passion for coding. I love being challenged and being
              able to utilize problem solving skills. Already having one year of
              experience as a Software Developer, I hope to continue this path
              and the pursuit of knowledge in code.
            </Description>
          </DescriptionContainer>
        </Info>
        <ImageContainer>
          <Image src={'myself.jpg'} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default AboutMe;
