import React from 'react';
import styled from 'styled-components';

const StyledMilestone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -40px;
  left: -15px;

  .completed {
    background-color: #62bdca;
  }
`;

const Title = styled.h4`
  color: lightGray;
  width: 100px;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: auto;
  }
`;

function Milestone({ title, complete, img, ...props }) {
  return (
    <StyledMilestone {...props}>
      <Title>{title}</Title>
      {/* <Circle style={{ backgroundColor: complete ? 'pink' : null }}> */}
      <Circle className={complete ? 'completed' : null}>
        <img src={img} />
      </Circle>
    </StyledMilestone>
  );
}

export default Milestone;
