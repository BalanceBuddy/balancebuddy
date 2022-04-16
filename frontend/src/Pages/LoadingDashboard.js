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

  padding-top: 20%;
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
          <h2>Account setup complete.</h2>
          <p>Loading dashboard...</p>
        </Col2>
      </WholeContainer>
    </>
  );
}

export default Signup;
