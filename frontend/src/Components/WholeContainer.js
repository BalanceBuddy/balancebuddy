import React from 'react';
import styled from 'styled-components';
import SignupBar from './SignupBar';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
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

const Col2_assessment = styled.div`
  width: 70%;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
`;

function WholeContainer({ children, assessment }) {
  return (
    <StyledContainer>
      <Col1>
        <SignupBar />
      </Col1>

      {/* conditional rendering */}
      {console.log('assessment', assessment)}
      {assessment ? (
        <Col2_assessment>{children}</Col2_assessment>
      ) : (
        <Col2>{children}</Col2>
      )}
    </StyledContainer>
  );
}

export default WholeContainer;
