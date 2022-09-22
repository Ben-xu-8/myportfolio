import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-scroll';

const Container = styled.div`
  background-color: #94b49f;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Logo = styled.div`
  padding-top: 30px;
  padding-left: 10px;
`;

const Image = styled.img`
  width: 20%;
`;

const Left = styled.div`
  display: flex;
`;

const List = styled.div`
  display: flex;
  cursor: pointer;
`;

const ListItem = styled.div`
  padding: 50px 0px 0px 30px;
`;

const SocialContainer = styled.div`
  padding-top: 50px;
  align-items: center;
  justify-content: center;
`;
const Social = styled.div`
  display: flex;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Image src={'logo.png'} />
          </Logo>
          <List>
            <Link to='home' spy={true} smooth={true}>
              <ListItem>Home</ListItem>
            </Link>
            <Link to='about' spy={true} smooth={true}>
              <ListItem>About</ListItem>
            </Link>
            <Link to='skills' spy={true} smooth={true}>
              <ListItem>Skills</ListItem>
            </Link>
            <Link to='projects' spy={true} smooth={true}>
              <ListItem>Projects</ListItem>
            </Link>
            <Link to='contact' spy={true} smooth={true}>
              <ListItem>Contact</ListItem>
            </Link>
          </List>
        </Left>
        <SocialContainer>
          <Social>
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon />
          </Social>
        </SocialContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
