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
const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const ProjectItem = styled(motion.div)``;
const ProjectImg = styled.img`
  height: 50%;
  width: 50%;
  border-radius: 20px;
`;
const ProjectTitle = styled.div``;

const Projects = () => {
  return (
    <Container id='projects'>
      <Wrapper>
        <Header
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 1.5,
          }}
        >
          <Title>Projects</Title>
          <Intro>Click on the Image to Learn More!</Intro>
        </Header>
        <Project>
          <ProjectItem
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
            <ProjectImg src='project1.png' />
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
