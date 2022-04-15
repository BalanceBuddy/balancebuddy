import React from 'react';
import styled from 'styled-components';
import Side from '../Components/SignupBar';
import SignupButton from '../Components/SignupButton'
import Form from '../Components/Form';

const WholeContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
`;

const Col1 = styled.div`
  width: 20%;
`;

const Col2 = styled.div` 
  width: 30%;

  padding-top: 10%;
  padding-left: 25%;
  padding-right: 25%;
`;

const Links = styled.div`
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
`

function Signup() {

  return (
    <>
      <WholeContainer>
        <Col1><Side/></Col1>
        <Col2>
          <h2>Log In</h2>
          <SignupButton>Log in with Google</SignupButton>
          <SignupButton>Log in with Facebook</SignupButton>
          <SignupButton>Log in with Apple</SignupButton>
          <p>OR</p>
          <Form>
            <label for="inputEmailOrUserName">Email/Username</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Email or Username"></input>
            <label for="inputPassword">Password</label>
            <input type="text" class="form-control" id="inputPassword" placeholder="Password"></input>
            </Form>
            <SignupButton>Log In</SignupButton>
            <Links>
              <a href="forgot-password">Forgot password?</a>
              <p>New to BalanceBuddy? <a href="login">Sign Up</a></p>
            </Links>

        </Col2>
      </WholeContainer>
    </>
  );
}

export default Signup;
