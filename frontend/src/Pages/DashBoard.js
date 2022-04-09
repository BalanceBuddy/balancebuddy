import React from 'react'
import styled from 'styled-components'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between
`

const Col = styled.div `
  width: 45%;
  border-radius: 10px;
  border: 2px solid black;
`

/* const TaskDiv = styled.div`
  background-color: green;
  width: 45%;
`

const MotivationDiv = styled.div`
  background-color: blue;
  width: 45%;
` */

function DashBoard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <h2>Task</h2>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
        </Col>

        <Col>
          <h2>Motivation</h2>
          <p>lorem ipsum</p>
        </Col>

      </Row>

    </>
  )
}

export default DashBoard;