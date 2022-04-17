import React from 'react';
import WholeContainer from '../../Components/WholeContainer';
import Button from '../../Components/Button';

function Signup() {
  return (
    <>
      <WholeContainer>
        <h2>Access Denied</h2>
        <p>
          No worries, you can always connect your calendar after if you choose.
        </p>
        <a href='/assessment-page1'>
          <Button>Next</Button>
        </a>
      </WholeContainer>
    </>
  );
}

export default Signup;
