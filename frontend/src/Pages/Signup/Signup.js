import React from 'react';
import SignupButton from '../../Components/SignupButton';
import Form from '../../Components/Form';
import WholeContainer from '../../Components/WholeContainer';
import Links from '../../Components/Links';

function Signup() {
  return (
    <>
      <WholeContainer>
        <h2>Sign Up</h2>
        <Form>
          <label for='inputName'>Name</label>
          <input
            type='text'
            class='form-control'
            id='inputName'
            placeholder='First Last'
          ></input>
          <label for='inputEmail'>Email</label>
          <input
            type='email'
            class='form-control'
            id='inputEmail'
            placeholder='Email Address'
          ></input>
          <label for='inputUsername'>Username</label>
          <input
            type='text'
            class='form-control'
            id='inputUsername'
            placeholder='Username'
          ></input>
          <label for='inputPassword'>Password</label>
          <input
            type='password'
            class='form-control'
            id='inputPassword'
            placeholder='Password'
          ></input>
          <label for='inputConfirmPassword'>Confirm Password</label>
          <input
            type='password'
            class='form-control'
            id='inputConfirmPassword'
            placeholder='Confirm Password'
          ></input>
        </Form>
        <a href='calendar-access'>
          <SignupButton>Sign Up</SignupButton>
        </a>
        <Links>
          <a href='forgot-password'>Forgot password?</a>
          <p>
            Already have an account? <a href='/login'>Log In</a>
          </p>
        </Links>
      </WholeContainer>
    </>
  );
}

export default Signup;
