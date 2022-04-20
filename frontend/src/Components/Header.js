import React from "react";
import styled from "styled-components";
import logo from "../Assets/balancebuddy_logo.svg";
import profilePicture from "../Assets/profile-picture.png";

const NavBarContainer = styled.div`
  background-color: lightGrey;
`;

const NavBar = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 150px;
  padding: 5px;
`;

const Logo = styled.div`
  display: flex;

  & img {
    text-align: center;
    height: 30px;
    margin-right: 20px;
  }
  h1 {
    margin-top: 5px;
  }
`;

const ProfilePicture = styled.img`
  background-color: red;
  border-radius: 100%;
  border: 3px solid white;
  width: 30px;
  height: 30px;
`;

function Header() {
  return (
    <NavBarContainer>
      <NavBar>
        <Logo>
          <img src={logo} alt="logo" />
          <h1>BalanceBuddy</h1>
        </Logo>
        <ProfilePicture src={profilePicture} alt="profile-picture" />
      </NavBar>
    </NavBarContainer>
  );
}

export default Header;
