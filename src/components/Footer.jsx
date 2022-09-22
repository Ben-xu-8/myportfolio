import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Skills</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
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
