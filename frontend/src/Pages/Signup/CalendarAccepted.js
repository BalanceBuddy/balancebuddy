import React from 'react';
import WholeContainer from '../../Components/WholeContainer';
import Button from '../../Components/Button';

function Signup() {
  return (
    <>
      <WholeContainer>
        <h2>Access Granted</h2>
        <p>Successfully connected your calendar!</p>
        <a href='/assessment-page1'>
          <Button>Next</Button>
        </a>
      </WholeContainer>
    </>
  );
}

export default Signup;
