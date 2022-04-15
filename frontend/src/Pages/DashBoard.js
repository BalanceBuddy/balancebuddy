import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

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

/* const TaskDiv = styled.div`
  background-color: green;
  width: 45%;
`

const MotivationDiv = styled.div`
  background-color: blue;
  width: 45%;
` */

function DashBoard() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get('/api/tasks/1');
      setTask(data);
    };

    fetchTask();
  }, []);

  return (
    <>
      <Header/>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </Col>

        <Col>
          <h2>Motivation</h2>
          <p>lorem ipsum</p>
        </Col>
      </Row>
      <Footer/>
    </>
  );
}

export default DashBoard;
