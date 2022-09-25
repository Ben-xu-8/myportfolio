import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { mobile } from '../responsive';

const Container = styled.div`
  margin: 0px 0px 30px 100px;
  ${mobile({
    margin: '0px',
    padding: '20px',
  })}
`;
const Wrapper = styled.div`
  margin: 0px 0px 30px 100px;
  display: flex;
  flex-direction: column;
  ${mobile({
    margin: '0px',
  })}
`;

const Top = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  ${mobile({
    flexDirection: 'column',
  })};
`;

const TitleContainer = styled.div``;
const Title = styled(motion.h1)`
  margin: 0;
  padding: 0;
  text-align: left;
  font-weight: 400;
  ${mobile({
    textAlign: 'center',
  })}
`;
const DescriptionContainer = styled.div``;
const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  ${mobile({
    display: 'flex',
    flexDirection: 'column',
    padding: '0px',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;
const Description = styled.p`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;
const Image = styled(motion.img)`
  border-radius: 5%;
  width: 400px;
  height: 350px;
  margin: 0px 75px;
  ${mobile({
    width: '100%',
  })}
`;

const Bottom = styled.div``;

const Skill = styled.div`
  height: max-content;
`;
const SkillIconsDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const SkillIcon = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 29px;
  height: 100px;
  width: 100px;
  padding: 0px 40px;
`;
const IconName = styled.span`
  font-size: 15px;
`;

const AboutMe = () => {
  return (
    <Container>
      <Wrapper>
        <Top id='about'>
          <Info
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
            <TitleContainer>
              <Title>About Me</Title>
            </TitleContainer>
            <DescriptionContainer>
              <Description>
                Previously a mechanical engineer now turned to software, I have
                developed a passion for coding. I love being challenged and
                being able to utilize problem solving skills. Already having one
                year of experience as a Software Developer, I hope to continue
                this path and the pursuit of knowledge in code.
              </Description>
            </DescriptionContainer>
          </Info>
          <ImageContainer>
            <Image
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 1.5,
              }}
              src={'myself.jpg'}
              alt=''
            />
          </ImageContainer>
        </Top>
        <Bottom id='skills'>
          <Title
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 1.5,
            }}
          >
            Skills
          </Title>
          <Skill>
            <SkillIconsDescription>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                }}
              >
                <FontAwesomeIcon icon={faHtml5} />
                <IconName>HTML5</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
              >
                <FontAwesomeIcon icon={faCss3} />
                <IconName>CSS3</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                }}
              >
                <FontAwesomeIcon icon={faSass} />
                <IconName>Sass</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                }}
              >
                <FontAwesomeIcon icon={faJs} />
                <IconName>JavaScript</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                }}
              >
                <FontAwesomeIcon icon={faReact} />
                <IconName>React</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                }}
              >
                <Icon icon='bxl:mongodb' />
                <IconName>MongoDB</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 1.2,
                  duration: 0.5,
                }}
              >
                <Icon icon='teenyicons:firebase-solid' />
                <IconName>Firebase</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 1.4,
                  duration: 0.5,
                }}
              >
                <Icon icon='simple-icons:express' />
                <IconName>Express</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 1.6,
                  duration: 0.5,
                }}
              >
                <Icon icon='akar-icons:node-fill' />
                <IconName>Node</IconName>
              </SkillIcon>
              <SkillIcon
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 1.8,
                  duration: 0.5,
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
                <IconName>GitHub</IconName>
              </SkillIcon>
            </SkillIconsDescription>
          </Skill>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default AboutMe;
