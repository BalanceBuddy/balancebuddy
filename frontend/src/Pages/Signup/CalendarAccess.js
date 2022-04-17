import React from 'react';
import SignupButton from '../../Components/SignupButton';
import WholeContainer from '../../Components/WholeContainer';

function Signup() {
  return (
    <>
      <WholeContainer>
        <h2>Calendar Access</h2>
        <p>
          By connecting your calendar to the system, our algorithm will select
          the best time of day to give you a task to do based on your current
          day's availability.
        </p>
        <p>Which calendar would you like to connect?</p>
        <a href='/calendar-access-accepted'>
          <SignupButton>iCal</SignupButton>
        </a>
        <a href='/calendar-access-accepted'>
          <SignupButton>Google Calendar</SignupButton>
        </a>
        <a href='/calendar-access-accepted'>
          <SignupButton>Outlook</SignupButton>
        </a>
        <a href='/calendar-access-denied'>
          <SignupButton>I don't want to connect my calendar</SignupButton>
        </a>
        <p>(You can also connect your calendar later)</p>
      </WholeContainer>
    </>
  );
}

export default Signup;
