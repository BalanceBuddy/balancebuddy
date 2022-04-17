import React from 'react';
import styled from 'styled-components';

const BigButton = styled.button`
  background-color: #62bdca;
  justify-content: center;
  height: 40px;
  width: 100%;
  border: 0px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;

  :hover {
    opacity: 70%;
  }
`;

function SignupButton({ children }) {
  return <BigButton>{children}</BigButton>;
}

export default SignupButton;
