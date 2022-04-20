import React from "react";
import styled from "styled-components";

const circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: #62bdca;
  border-radius: 50%;
  display: inline-block;
  padding: 5px;
  width: 44;
  height: 44;
  border-radius: 44/2;

  .dot {
    height: 500px;
    width: 500px;
    background-color: #62bdca;
    border-radius: 50%;

    padding: 5px;
  }
`;
function Milestone() {
  return (
    <>
      <circle>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </circle>
    </>
  );
}

export default Milestone;
