import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/balancebuddy_logo.svg';
import profilePicture from '../Assets/profile-picture.png';

const NavBarContainer = styled.div`
  background-color: lightGrey;
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 150px;
  padding 0px 0;
`

const Logo = styled.div`
  display: flex;

  & img{
    margin-right: 20px;
  }
`

const ProfilePicture = styled.img`
  background-color: red;
  border-radius: 100%;
  border: 3px solid white;
  width: 50px;
  height: 50px;

`

function Header() {
  return (
    <NavBarContainer>
      <NavBar>
        <Logo>
          <img src={logo} alt="logo"/>
          <h1>BalanceBuddy</h1>
        </Logo>
        <ProfilePicture src={profilePicture} alt="profile-picture"/>
      </NavBar>
    </NavBarContainer>
  )
}

export default Header