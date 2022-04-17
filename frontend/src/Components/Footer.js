import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  /* background-color: lightGrey; */
  padding: 20px 0;
`;
function Footer() {
  return (
    <StyledFooter>
      <p>© BalanceBuddy 2022</p>
    </StyledFooter>
  );
}

export default Footer;
