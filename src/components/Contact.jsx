import React, { useEffect } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
const Social = styled.div`
  display: flex;
  margin-top: 20px;
`;
const SocialIcon = styled.div`
  margin-left: 40px;
`;

const Description = styled.p``;

const ContactInfo = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
`;

const Name = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  text-indent: 10px;
`;
const Email = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  text-indent: 10px;
`;
const Phone = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  text-indent: 10px;
`;
const Message = styled.input`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border: none;
  text-indent: 10px;
  text-align: left;
`;

const Button = styled.button`
  margin-top: 20px;
`;

const Contact = () => {
  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 1500,
      once: false,
      mirror: true,
      easing: 'ease',
    });
  });
  return (
    <Container>
      <Wrapper
        data-aos='zoom-in'
        data-aos-duration='2000'
        data-aos-mirror='true'
        data-aos-once='false'
      >
        <TitleContainer>
          <Title>Let's Connect</Title>
          <Description id='contact'>
            Feel free to reach out if you're ever interested in a quick chat or
            just to exchange contacts. My socials are found below and as well as
            a contact form
          </Description>
          <SocialContainer>
            <Social>
              <GitHubIcon />
              <SocialIcon>
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon>
                <EmailIcon />
              </SocialIcon>
            </Social>
          </SocialContainer>
        </TitleContainer>
        <ContactInfo>
          <Name placeholder='Name'></Name>
          <Phone placeholder='Phone'></Phone>
          <Email placeholder='Email'></Email>
          <Message placeholder='Message'></Message>
          <Button type='submit'>Submit Form</Button>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
