import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Learn = styled.span``;

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <Learn> Learn More </Learn>
        <KeyboardArrowDownIcon />
      </Wrapper>
    </Container>
  );
};

export default Banner;
