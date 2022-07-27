import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 90px;
  margin: 0px 56px;
`;

const Wrapper = styled.div``;

const Navbar = styled.div`
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
    <Container>
      <Wrapper>
        <Navbar>
          <Left>
            <Logo>
              <Image src={'logo2.png'} />
            </Logo>
          </Left>
          <Right>
            <Nav>
              <NavElement>HOME</NavElement>
              <NavElement>ABOUT</NavElement>
              <NavElement>SKILL</NavElement>
              <NavElement>PROJECTS</NavElement>
              <NavElement>CONTACT</NavElement>
            </Nav>
          </Right>
        </Navbar>
      </Wrapper>
    </Container>
  );
};

export default Navigationbar;
