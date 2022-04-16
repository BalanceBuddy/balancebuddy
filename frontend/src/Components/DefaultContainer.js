import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const StyledContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
  width: 80%;
  margin: auto;
  max-width: 1200px;
`;

function DefaultContainer({ children }) {
  return (
    <>
      <Header />
      <StyledContainer>{children}</StyledContainer>
      <Footer />
    </>
  );
}

export default DefaultContainer;
