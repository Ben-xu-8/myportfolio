import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Container = styled.div`
  height: 90px;
  margin: 0px 56px;
`;

const Wrapper = styled.div``;

const Navbar = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.div``;

const Image = styled.img`
  height: 90px;
`;

const Left = styled.div``;
const Right = styled.div``;
const Nav = styled.div`
  display: flex;
`;
const NavElement = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 30px;
`;

// const NavbarToggleIcon = styled.div``;

const Navigationbar = () => {
  return (
    <Container id='home'>
      <Wrapper>
        <Navbar
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
        >
          <Left>
            <Logo>
              <Image src={'logo2.png'} />
            </Logo>
          </Left>
          <Right>
            <Nav>
              <NavElement>HOME</NavElement>
              <Link to='projects' spy={true} smooth={true}>
                <NavElement>PROJECTS</NavElement>
              </Link>
              <Link to='about' spy={true} smooth={true}>
                <NavElement>ABOUT</NavElement>
              </Link>
              <Link to='skills' spy={true} smooth={true}>
                <NavElement>SKILL</NavElement>
              </Link>
              <Link to='contact' spy={true} smooth={true}>
                <NavElement>CONTACT</NavElement>
              </Link>
            </Nav>
          </Right>
        </Navbar>
      </Wrapper>
    </Container>
  );
};

export default Navigationbar;
