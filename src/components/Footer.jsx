import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-scroll';
import { mobile } from '../responsive';

const Container = styled.div`
  background-color: #94b49f;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;

const Logo = styled.div`
  padding-top: 30px;
  padding-left: 10px;
  ${mobile({
    padding: '0px',
    display: 'none',
  })}
`;

const Image = styled.img`
  width: 20%;
`;

const Left = styled.div`
  display: flex;
  ${mobile({
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;

const List = styled.div`
  display: flex;
  cursor: pointer;
  ${mobile({
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    width: '10px',
  })}
`;

const ListItem = styled.div`
  padding: 50px 0px 0px 30px;
  ${mobile({
    padding: '10px 0px 10px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;

const SocialContainer = styled.div`
  padding-top: 50px;
  align-items: center;
  justify-content: center;
  ${mobile({
    padding: '0px',
  })}
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
            <GitHubIcon
              onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/Ben-xu-8');
              }}
            />
            <LinkedInIcon
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  'https://www.linkedin.com/in/benjamin-xu-3820a1164/'
                );
              }}
            />
            <EmailIcon
              onClick={(e) => {
                e.preventDefault();
                window.open('mailto:xuben1996@gmail.com');
              }}
            />
          </Social>
        </SocialContainer>
      </Wrapper>
    </Container>
  );
};

export default Footer;
