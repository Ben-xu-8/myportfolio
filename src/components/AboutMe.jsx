import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

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
  align-items: center;
  justify-content: space-evenly;
`;
const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
`;
const IconName = styled.span`
  font-size: 20px;
`;

const AboutMe = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Info>
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
            <Image src={'myself.jpg'} />
          </ImageContainer>
        </Top>
        <Bottom>
          <Title>Skills</Title>
          <Skill>
            <SkillIconsDescription>
              <SkillIcon>
                <FontAwesomeIcon icon={faReact} />
                <IconName>React</IconName>
              </SkillIcon>
              <SkillIcon>
                <FontAwesomeIcon icon={faHtml5} />
                <IconName>HTML5</IconName>
              </SkillIcon>
              <SkillIcon>
                <FontAwesomeIcon icon={faCss3} />
                <IconName>CSS3</IconName>
              </SkillIcon>
              <SkillIcon>
                <FontAwesomeIcon icon={faJs} />
                <IconName>JavaScript</IconName>
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
