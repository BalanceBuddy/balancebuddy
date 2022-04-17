import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/balancebuddy_logo.svg';

const SideBarContainer = styled.div`
  border-right: 15px solid #f0544f;
  height: 100%;
`;

const SideBar = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  height: 100%;
  color: #f0544f;
  margin-top: 50%;
`;

function SignupBar() {
  return (
    <SideBarContainer>
      <SideBar>
        <Logo>
          <h1>BalanceBuddy</h1>
          <img src={logo} alt='logo' />
        </Logo>
      </SideBar>
    </SideBarContainer>
  );
}

export default SignupBar;
