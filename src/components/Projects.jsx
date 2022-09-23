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
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const ProjectItem = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;
const ProjectImg = styled.img`
  border-radius: 20px;
  width: 30%;
  height: 20%;
  margin: 8px;
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
            duration: 1,
          }}
        >
          <Title>Projects</Title>
          <Intro>Click on the Image to Learn More!</Intro>
        </Header>
        <Project>
          <ProjectItem
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
            <ProjectImg src='project1.png' />
            <ProjectTitle></ProjectTitle>
            <ProjectImg src='project2.png' />
            <ProjectTitle></ProjectTitle>
          </ProjectItem>
          <ProjectItem
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
            <ProjectImg src='project3.png' />
            <ProjectTitle></ProjectTitle>
          </ProjectItem>
        </Project>
      </Wrapper>
    </Container>
  );
};

export default Projects;
