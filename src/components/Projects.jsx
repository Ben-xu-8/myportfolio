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
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const ProjectItem = styled(motion.div)`
  width: 450px;
  height: 350px;
  position: relative;
  display: flex;
  margin: 20px 20px 0px 0px;
`;
const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;
const ProjectPanel = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.85;
    background-color: gray;
    color: white;
    border-radius: 20px;
  }
`;
const ProjectInfo = styled.div`
  text-align: center;
`;
const ProjectTitle = styled.h1``;
const ProjectDesc = styled.span``;
const ProjectButtons = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
const ProjectLink = styled.button`
  margin: 10px;
  padding: 10px;
`;

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
          <Intro>Hover Over the Images to Learn More About the Projects!</Intro>
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
            <ProjectPanel>
              <ProjectInfo>
                <ProjectTitle>Connect Chat</ProjectTitle>
                <ProjectDesc>
                  A real time React chatting app that uses firebase database to
                  communicate with friends
                </ProjectDesc>
                <ProjectButtons>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://connectchat.netlify.app/';
                    }}
                  >
                    View Project
                  </ProjectLink>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        'https://github.com/Ben-xu-8/Message_App';
                    }}
                  >
                    View Github
                  </ProjectLink>
                </ProjectButtons>
              </ProjectInfo>
            </ProjectPanel>
          </ProjectItem>
          <ProjectItem>
            <ProjectImg src='project2.png' />
            <ProjectPanel>
              <ProjectInfo>
                <ProjectTitle>Poke Mart E-Commerce</ProjectTitle>
                <ProjectDesc>
                  An E-Commerce Website built on React that allows users to
                  browse, create an account, and purchase Pokemon
                </ProjectDesc>
                <ProjectButtons>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        'https://poke-mart-center.herokuapp.com/';
                    }}
                  >
                    View Project
                  </ProjectLink>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        'https://github.com/Ben-xu-8/poke-mart-mern';
                    }}
                  >
                    View Github
                  </ProjectLink>
                </ProjectButtons>
              </ProjectInfo>
            </ProjectPanel>
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
            <ProjectPanel>
              <ProjectInfo>
                <ProjectTitle>Corn Runner</ProjectTitle>
                <ProjectDesc>
                  A javascript minigame application where the user jumps over
                  the chicken as a corn on the cob
                </ProjectDesc>
                <ProjectButtons>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://corngame.netlify.app/';
                    }}
                  >
                    View Project
                  </ProjectLink>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        'https://github.com/Ben-xu-8/Corn_Game';
                    }}
                  >
                    View Github
                  </ProjectLink>
                </ProjectButtons>
              </ProjectInfo>
            </ProjectPanel>
          </ProjectItem>
        </Project>
      </Wrapper>
    </Container>
  );
};

export default Projects;
