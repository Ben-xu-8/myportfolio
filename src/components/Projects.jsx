import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
  margin: 0px 0px 30px 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 0px 100px;
`;

const Intro = styled.span``;

const Title = styled.h1`
  font-weight: 400;
`;
const Project = styled.div``;
const ProjectItem = styled.div``;
const ProjectImg = styled.img``;
const ProjectTitle = styled.div``;

const Projects = () => {
  useEffect(() => {
    AOS.init({
      delay: 1000,
      duration: 1500,
      once: false,
      mirror: true,
      easing: 'ease',
    });
  });
  return (
    <Container id='projects'>
      <Wrapper data-aos='zoom-in' data-aos-mirror='true' data-aos-once='false'>
        <Title>Projects</Title>
        <Intro>Click on the Image to Learn More!</Intro>
        <Project
          data-aos='zoom-in'
          data-aos-mirror='true'
          data-aos-once='false'
        >
          <ProjectItem>
            <ProjectImg></ProjectImg>
            <ProjectTitle></ProjectTitle>
          </ProjectItem>
          <ProjectItem>
            <ProjectImg></ProjectImg>
            <ProjectTitle></ProjectTitle>
          </ProjectItem>
          <ProjectItem>
            <ProjectImg></ProjectImg>
            <ProjectTitle></ProjectTitle>
          </ProjectItem>
          <ProjectItem>
            <ProjectImg></ProjectImg>
            <ProjectTitle></ProjectTitle>
          </ProjectItem>
        </Project>
      </Wrapper>
    </Container>
  );
};

export default Projects;
