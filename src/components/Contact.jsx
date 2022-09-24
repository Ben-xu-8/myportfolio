import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const Container = styled.div`
  background-color: #cee5d0;
  display: flex;
  height: 400px;
`;
const Wrapper = styled(motion.div)`
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

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
`;

// const Message = styled.input`
//   width: 100%;
//   height: 200px;
//   border-radius: 10px;
//   border: none;
//   text-indent: 10px;
//   text-align: left;
// `;

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
  marginTop: '20px',
};

const Contact = () => {
  return (
    <Container>
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
          <form
            name='contact'
            action='/success'
            method='POST'
            data-netlify='true'
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
          {/* <Parse type='hidden' name='form-name' value='contact' />
          <Name placeholder='Name' type='text' name='name' />
          <Phone placeholder='Phone' type='tel' name='phone' />
          <Email placeholder='Email' type='email' name='email' />
          <Message placeholder='Message' type='text' name='message' />
          <Button type='submit'>Submit Form</Button> */}
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
