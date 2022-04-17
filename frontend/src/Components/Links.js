import React from 'react';
import styled from 'styled-components';

const StyledLinks = styled.div`
  text-align: left;
  font-size: 14px;

  a:link {
    color: #62bdca;
    background-color: transparent;
  }

  a:visited {
    color: #62bdca;
  }

  a:hover {
    font-weight: bold;
  }
`;

function Links({ children }) {
  return <StyledLinks>{children}</StyledLinks>;
}

export default Links;
