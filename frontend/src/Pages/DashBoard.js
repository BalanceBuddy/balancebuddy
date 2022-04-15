import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Col = styled.div`
  text-align: left;
  width: 45%;
  border-radius: 2px;
  border: 1.5px solid black;
  p,
  h2 {
    padding-left: 5%;
  }
`;

function DashBoard() {
<<<<<<< Updated upstream
=======
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get("/api/tasks/1");
      setTask(data);
    };

    fetchTask();
  }, []);

>>>>>>> Stashed changes
  return (
    <>
      <h1>Dashboard</h1>
      <Row>
        <Col>
<<<<<<< Updated upstream
          <h2>title</h2>
          <p>description lorem ipsum</p>
=======
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <h2>Resources</h2>
          <p>{task.description}</p>
          <p>{task.description}</p>
          <p>{task.description}</p>
          <p>{task.description}</p>
>>>>>>> Stashed changes
        </Col>

        <Col>
          <h2>Motivation</h2>
          <p>lorem ipsum</p>
        </Col>
      </Row>
      <Row>
        <h1>Roadmap</h1>
      </Row>
    </>
  );
}

export default DashBoard;
