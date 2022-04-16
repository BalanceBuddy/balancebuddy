import React from 'react';
import styled from 'styled-components';
import Side from '../Components/SignupBar';

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
  font-size: 20px;

`;

const Button = styled.button`
background-color: #62bdca;
    justify-content: center;
    height: 40px;
    width: 30%;
    border: 0px;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;

    :hover {
        opacity: 70%;
    }
`

function Signup() {

  return (
    <>
      <WholeContainer>
        <Col1><Side/></Col1>
        <Col2>
          <h2>Access Denied</h2>
          <p>No worries, you can always connect your calendar after if you choose.</p>
          <a href="/assessment-page1"><Button>Next</Button></a>
         </Col2>
      </WholeContainer>
    </>
  );
}

export default Signup;
