import React from "react";
import styled from "styled-components";

import DefaultContainer from "../Components/DefaultContainer";

import CarouselSlide from "../Components/CarouselSlide"
import ProgressBar from "../Components/ProgressBar";
import Button from "../Components/Button";


const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  justify-content: center; // centers rodamap text
`;

const Col = styled.div`
  padding-left: 30px;
  padding-right: 20px;
  text-align: left;
  // width: 45%;
  border-radius: 5px;
  border: 1.5px solid black;
  border-color: #f0544f;
  margin: 0px 10px 10px;
  width: 1390px;
  /* height: 400px; */

  h1 {
    text-align: center;
  }

  h2 {
    font-size: 26px;
    margin-bottom: 0px;
  }


  .text {
    padding-right: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .above {
    margin-top: 0px;
  }


  button {
    width: 144px;
    height: 42px;
    margin: 8px;
    font-size: 16px;
  }

  .task-container {
    display: flex;
    flex-direction: row;
  }
  .task-item {
   // padding-right: 20px;
    padding-top: 30px;
  }
`;

function DashBoard() {
  return (
    <DefaultContainer>
      {/* <h1>Dashboard</h1> */}
      <Row>
        <Col>
          <div className="task-container">
            <div>
              <h2>Current Task</h2>
              <p className="text">
                Update resume so that all recent experiences have been added.
                Ensure that descriptions include key action words and can be
                quantifiable.
              </p>
            </div>

            <div className="task-item">
              <Button>Task Completed</Button>
              <Button>Change Task</Button>
            </div>
          </div>
          <div className="task-container">
            <div>
              <h2 className="above">Resources</h2>
              <div>
                <p>
                  <a href="https://www.w3schools.com/">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam viverra lectus.
                  </a>
                </p>
                <p>
                  <a href="https://www.w3schools.com/">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam viverra lectus.
                  </a>
                </p>
                <p>
                  <a href="https://www.w3schools.com/">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam viverra lectus.
                  </a>
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </Col>

        <Col>
          <h2>Motivation</h2>
          <div>
            <CarouselSlide
              content={{ backgroundColor: "#ff7c7c", title: "Slide 1" }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <div>
          <h1>Roadmap</h1>
          <ProgressBar />
        </div>
      </Row>
    </DefaultContainer>
  );
}

export default DashBoard;
