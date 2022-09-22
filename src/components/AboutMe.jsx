import React, { useEffect } from 'react';
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

const Top = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
`;

const TitleContainer = styled.div``;
const Title = styled.h1`
  font-weight: 400;
`;
const DescriptionContainer = styled.div``;
const Info = styled.div`
  flex: 1;
  padding-right: 200px;
`;
const Description = styled.p`
  font-size: 1.2rem;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  border-radius: 5%;
  width: 65%;
`;

const Bottom = styled.div``;

const Skill = styled.div``;
const SkillIconsDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const SkillIcon = styled.div`
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
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <Container>
      <Wrapper>
        <Top id='about'>
          <Info data-aos='fade-right'>
            <TitleContainer data-aos='fade-right'>
              <Title>About Me</Title>
            </TitleContainer>
            <DescriptionContainer data-aos='fade-right'>
              <Description>
                Previously a mechanical engineer now turned to software, I have
                developed a passion for coding. I love being challenged and
                being able to utilize problem solving skills. Already having one
                year of experience as a Software Developer, I hope to continue
                this path and the pursuit of knowledge in code.
              </Description>
            </DescriptionContainer>
          </Info>
          <ImageContainer data-aos='fade-left'>
            <Image src={'myself.jpg'} />
          </ImageContainer>
        </Top>
        <Bottom id='skills'>
          <Title data-aos='fade-up'>Skills</Title>
          <Skill data-aos='fade-up'>
            <SkillIconsDescription>
              <SkillIcon>
                <FontAwesomeIcon icon={faHtml5} />
                <IconName>HTML5</IconName>
              </SkillIcon>
              <SkillIcon>
                <FontAwesomeIcon icon={faCss3} />
                <IconName>CSS3</IconName>
              </SkillIcon>
              <SkillIcon>
                <FontAwesomeIcon icon={faSass} />
                <IconName>Sass</IconName>
              </SkillIcon>
              <SkillIcon>
                <FontAwesomeIcon icon={faJs} />
                <IconName>JavaScript</IconName>
              </SkillIcon>
              <SkillIcon>
                <FontAwesomeIcon icon={faReact} />
                <IconName>React</IconName>
              </SkillIcon>
              <SkillIcon>
                <Icon icon='bxl:mongodb' />
                <IconName>MongoDB</IconName>
              </SkillIcon>
              <SkillIcon>
                <Icon icon='teenyicons:firebase-solid' />
                <IconName>Firebase</IconName>
              </SkillIcon>
              <SkillIcon>
                <Icon icon='simple-icons:express' />
                <IconName>Express</IconName>
              </SkillIcon>
              <SkillIcon>
                <Icon icon='akar-icons:node-fill' />
                <IconName>Node</IconName>
              </SkillIcon>
              <SkillIcon>
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
