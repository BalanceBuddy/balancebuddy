import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Col = styled.div`
  width: 45%;
  border-radius: 10px;
  border: 2px solid black;
`;

function DashBoard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <h2>title</h2>
          <p>description lorem ipsum</p>
        </Col>

        <Col>
          <h2>Motivation</h2>
          <p>lorem ipsum</p>
        </Col>
      </Row>
    </>
  );
}

export default DashBoard;
