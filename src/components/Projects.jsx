import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import { mobile } from '../responsive';

const Container = styled.div`
  margin: 0px 0px 30px 100px;
  overflow: hidden;
  ${mobile({
    margin: '30px 0px 0px 0px',
  })};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 100px;
  ${mobile({
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px',
    width: '100%',
  })}
`;

const Intro = styled.span``;

const Title = styled.h1`
  font-weight: 400;
`;
const Header = styled(motion.div)`
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontSize: '14px',
  })}
`;
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
  ${mobile({
    margin: '5px 0px',
    width: '100%',
    height: '100%',
  })}
`;
const ProjectImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;
const ProjectPanel = styled.div`
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
  &:hover {
    opacity: 0.85;
    background-color: gray;
    color: white;
    border-radius: 20px;
  }
`;
const ProjectInfo = styled.div`
  text-align: center;
  width: 450px;
  overflow: hidden;
  ${mobile({
    width: '100%',
  })}
`;
const ProjectIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FontName = styled.div``;
const ProjectTitle = styled.h1``;
const ProjectDesc = styled.span`
  width: 100%;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 200px;
`;
const ProjectButtons = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;
const ProjectLink = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    background-color: #3d8361;
    color: white;
    border-radius: 20px;
  }
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
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
                <ProjectIcon>
                  <Group>
                    <FontAwesomeIcon icon={faReact} />
                    <FontName>React</FontName>
                  </Group>
                  <Group>
                    <FontAwesomeIcon icon={faSass} />
                    <FontName>Sass</FontName>
                  </Group>
                  <Group>
                    <Icon icon='teenyicons:firebase-solid' />
                    <FontName>Firebase</FontName>
                  </Group>
                </ProjectIcon>
                <ProjectButtons>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://connectchat.netlify.app/');
                    }}
                  >
                    View Project
                  </ProjectLink>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://github.com/Ben-xu-8/Message_App');
                    }}
                  >
                    View Github
                  </ProjectLink>
                </ProjectButtons>
              </ProjectInfo>
            </ProjectPanel>
          </ProjectItem>
          <ProjectItem
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
            <ProjectImg src='project2.png' />
            <ProjectPanel>
              <ProjectInfo>
                <ProjectTitle>Poke Mart E-Commerce</ProjectTitle>
                <ProjectDesc>
                  An E-Commerce Website built on React that allows users to
                  browse, create an account, and purchase Pokemon
                </ProjectDesc>
                <ProjectIcon>
                  <Group>
                    <Icon icon='bxl:mongodb' />
                    <FontName>MongoDB</FontName>
                  </Group>
                  <Group>
                    <Icon icon='simple-icons:express' />
                    <FontName>Express</FontName>
                  </Group>
                  <Group>
                    <FontAwesomeIcon icon={faReact} />
                    <FontName>React</FontName>
                  </Group>
                  <Group>
                    <Icon icon='akar-icons:node-fill' />
                    <FontName>Node</FontName>
                  </Group>
                </ProjectIcon>
                <ProjectButtons>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://poke-mart-center.herokuapp.com/');
                    }}
                  >
                    View Project
                  </ProjectLink>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://github.com/Ben-xu-8/poke-mart-mern');
                    }}
                  >
                    View Github
                  </ProjectLink>
                </ProjectButtons>
              </ProjectInfo>
            </ProjectPanel>
          </ProjectItem>
          <ProjectItem
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
                <ProjectIcon>
                  <Group>
                    <FontAwesomeIcon icon={faHtml5} />
                    <FontName>HTML5</FontName>
                  </Group>
                  <Group>
                    <FontAwesomeIcon icon={faCss3} />
                    <FontName>CSS3</FontName>
                  </Group>
                  <Group>
                    <FontAwesomeIcon icon={faJs} />
                    <FontName>Javascript</FontName>
                  </Group>
                </ProjectIcon>
                <ProjectButtons>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://corngame.netlify.app/');
                    }}
                  >
                    View Project
                  </ProjectLink>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://github.com/Ben-xu-8/Corn_Game');
                    }}
                  >
                    View Github
                  </ProjectLink>
                </ProjectButtons>
              </ProjectInfo>
            </ProjectPanel>
          </ProjectItem>
          <ProjectItem
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
            <ProjectImg src='project4.png' />
            <ProjectPanel>
              <ProjectInfo>
                <ProjectTitle>Koffe.</ProjectTitle>
                <ProjectDesc>
                  A cafe based daily organizer where users can add a to do list,
                  add items to the calendar, and listen to music (In Progress)
                </ProjectDesc>
                <ProjectIcon>
                  <Group>
                    <FontAwesomeIcon icon={faReact} />
                    <FontName>React</FontName>
                  </Group>
                  <Group>
                    <FontAwesomeIcon icon={faSass} />
                    <FontName>Sass</FontName>
                  </Group>
                </ProjectIcon>
                <ProjectButtons>
                  <ProjectLink
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   window.open('');
                  // }}
                  >
                    View Project
                  </ProjectLink>
                  <ProjectLink
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        'https://github.com/Ben-xu-8/coffee_shop_mood'
                      );
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
