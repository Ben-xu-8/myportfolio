import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  margin: 0px 0px 30px 100px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 100px;
`;

const Intro = styled.span``;

const Title = styled.h1`
  font-weight: 400;
`;
const Header = styled(motion.div)``;
const Project = styled.div``;
const ProjectItem = styled.div``;
const ProjectImg = styled.img``;
const ProjectTitle = styled.div``;

const Projects = () => {
  return (
    <Container id='projects'>
      <Wrapper>
        <Header
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 1.5,
          }}
        >
          <Title>Projects</Title>
          <Intro>Click on the Image to Learn More!</Intro>
        </Header>
        <Project>
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
