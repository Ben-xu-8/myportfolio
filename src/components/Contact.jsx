import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import { mobile } from '../responsive';

const Container = styled.div`
  background-color: #cee5d0;
  display: flex;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 75%;
  padding: 40px 0px 40px 200px;
  ${mobile({
    flexDirection: 'column',
    width: '100%',
    padding: '0px',
  })}
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  })}
`;
const Title = styled.h1`
  font-weight: 400;
`;

const SocialContainer = styled.div`
  cursor: pointer;
`;
const Social = styled.div`
  display: flex;
  margin-top: 20px;
  ${mobile({
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  })}
`;
const SocialIcon = styled.div`
  margin-left: 40px;
`;

const Description = styled.p`
  ${mobile({
    textAlign: 'center',
  })}
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  ${mobile({
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    width: '90%',
  })}
`;

const input = {
  width: '100%',
  marginBottom: '15px',
  borderRadius: '10px',
  border: 'none',
  textIndent: '10px',
};

const message = {
  width: '100%',
  height: '150px',
  borderRadius: '10px',
  border: 'none',
  textIndent: '10px',
};

const button = {
  margin: '20px 0px',
  backgroundColor: ' #3d8361',
  color: 'white',
  borderRadius: '20px',
};

const form = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '90%',
};

const Contact = () => {
  return (
    <Container id='contact'>
      <Wrapper
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <TitleContainer>
          <Title>Let's Connect</Title>
          <Description>
            Feel free to reach out if you're ever interested in a quick chat or
            just to exchange contacts. My socials are found below and as well as
            a contact form
          </Description>
          <SocialContainer>
            <Social>
              <GitHubIcon
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://github.com/Ben-xu-8';
                }}
              />
              <SocialIcon>
                <LinkedInIcon
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      'https://www.linkedin.com/in/benjamin-xu-3820a1164/';
                  }}
                />
              </SocialIcon>
              <SocialIcon>
                <EmailIcon
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:xuben1996@gmail.com';
                  }}
                />
              </SocialIcon>
            </Social>
          </SocialContainer>
        </TitleContainer>
        <ContactInfo>
          <form
            name='contact'
            action='/success'
            method='POST'
            data-netlify='true'
            style={form}
          >
            <input type='hidden' name='form-name' value='contact' />
            <input
              style={input}
              type='text'
              name='name'
              placeholder='Name'
              required
            />
            <input
              style={input}
              type='tel'
              name='phone'
              placeholder='Phone Number'
              required
            />
            <input
              style={input}
              type='email'
              name='email'
              placeholder='Email'
              required
            />
            <input
              style={message}
              type='text'
              name='message'
              placeholder='Message'
              required
            />
            <button style={button} type='submit'>
              Submit
            </button>
          </form>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
