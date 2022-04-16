import React from 'react';
import SignupButton from '../Components/SignupButton';
import Form from '../Components/Form';
import Links from '../Components/Links';
import WholeContainer from '../Components/WholeContainer';

function Signup() {
  return (
    <>
      <WholeContainer>
        <h2>Log In</h2>
        <SignupButton>Log in with Google</SignupButton>
        <SignupButton>Log in with Facebook</SignupButton>
        <SignupButton>Log in with Apple</SignupButton>
        <p>OR</p>
        <Form>
          <label for='inputEmailOrUserName'>Email/Username</label>
          <input
            type='email'
            class='form-control'
            id='inputEmail'
            placeholder='Email or Username'
          ></input>
          <label for='inputPassword'>Password</label>
          <input
            type='text'
            class='form-control'
            id='inputPassword'
            placeholder='Password'
          ></input>
        </Form>
        <SignupButton>Log In</SignupButton>
        <Links>
          <a href='forgot-password'>Forgot password?</a>
          <p>
            New to BalanceBuddy? <a href='/signup'>Sign Up</a>
          </p>
        </Links>
      </WholeContainer>
    </>
  );
}

export default Signup;
