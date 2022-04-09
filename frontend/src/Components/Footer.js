import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: lightGrey;
  padding: 20px 0;
`
function Footer() {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  )
}

export default Footer