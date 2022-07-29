import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
  background-color: #94b49f;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Logo = styled.div``;

const Image = styled.img`
  padding-left: 130px;
  display: flex;
  width: 30%;
`;

const Title = styled.div``;

const List = styled.div`
  display: flex;
`;

const ListItem = styled.div`
  padding: 30px 0px 0px 30px;
`;

const SocialContainer = styled.div`
  /* padding: 30px 0px 0px 100px; */
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
          <Title>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Skills</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Contact</ListItem>
            </List>
          </Title>
          <SocialContainer>
            <Title>Socials</Title>
            <Social>
              <GitHubIcon />
              <LinkedInIcon />
              <EmailIcon />
            </Social>
          </SocialContainer>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Footer;
