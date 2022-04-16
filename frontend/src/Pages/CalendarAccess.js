import React from 'react';
import styled from 'styled-components';
import Side from '../Components/SignupBar';
import SignupButton from '../Components/SignupButton'

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
          <h2>Calendar Access</h2>
          <p>By connecting your calendar to the system, our algorithm will select the best time of day to give you a task to do based on your current day's availability.</p>
          <p>Which calendar would you like to connect?</p>
          <a href="/calendar-access-accepted"><SignupButton>iCal</SignupButton></a>
          <a href="/calendar-access-accepted"><SignupButton>Google Calendar</SignupButton></a>
          <a href="/calendar-access-accepted"><SignupButton>Outlook</SignupButton></a>
          <a href="/calendar-access-denied"><SignupButton>I don't want to connect my calendar</SignupButton></a>
          <p>(You can also connect your calendar later)</p>
        </Col2>
      </WholeContainer>
    </>
  );
}

export default Signup;
