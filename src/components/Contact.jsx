import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
  background-color: #cee5d0;
  display: flex;
  height: 400px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  padding: 40px 0px 40px 200px;
`;

const TitleContainer = styled.div``;
const Title = styled.h1`
  font-weight: 400;
`;

const SocialContainer = styled.div``;
const Social = styled.div``;

const Description = styled.p``;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
`;

const Name = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;
const Email = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;
const Phone = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;
const Message = styled.input`
  width: 100%;
  height: 200px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Let's Connect</Title>
          <Description>
            Feel free to reach out if you're ever interested in a quick chat or
            just to exchange contacts. My socials are found below and as well as
            a contact form
          </Description>
          <SocialContainer>
            <Social>
              <GitHubIcon />
              <LinkedInIcon />
              <EmailIcon />
            </Social>
          </SocialContainer>
        </TitleContainer>
        <ContactInfo>
          <Name placeholder='Name'></Name>
          <Phone placeholder='Phone'></Phone>
          <Email placeholder='Email'></Email>
          <Message placeholder='Message'></Message>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
