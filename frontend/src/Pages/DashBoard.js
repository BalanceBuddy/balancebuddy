import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DefaultContainer from "../Components/DefaultContainer";

import ProgressBar from "../Components/ProgressBar";
import Milestone from "../Components/Milestone";

import Button from "../Components/Button";

import CarouselSlide from "../Components/CarouselSlide";

import { slideData } from "../Components/MotivationConstants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slide from "@material-ui/core/Slide";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  justify-content: center; // centers rodamap text

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #2196f3;
    padding: 10px;
  }
  .start {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: inline-block;

    padding: 20px;
    margin-top: 20px;
    margin-right: 80px;
    border-radius: 44/2;
  }

  .circles {
    height: 50px;
    width: 50px;
    background-color: lightgray;
    border-radius: 50%;
    display: inline-block;

    padding: 20px;
    margin-top: 20px;
    margin-right: 80px;
    border-radius: 44/2;
  }
  .miles {
    justify-content: center;
    display: inline-block;
    margin-top: 5px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  justify-content: center;

  height: 150px;
  width: 150px;
  background-color: pink;
  border-color: black;
  border-radius: 5%;
  display: flex;

  text-align: center;
  margin-top: 20px;
  margin-right: 45px;

  ul {
    font-size: 16px;
  }
`;
// fix motivation board
const Even = styled.div`
  padding-top: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === "left" ? <FaChevronLeft /> : <FaChevronRight />;

  return <div onClick={clickFunction}>{icon}</div>;
}

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
    font-size: 24px;
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

// Slides

function DashBoard() {

  const [index, setIndex] = useState(0);
  const content = slideData[index];
  const numSlides = slideData.length;

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };

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
          <h2>Motivation Board</h2>
          <Even>
            <Arrow
              direction="left"
              clickFunction={() => onArrowClick("left")}
            />
            <CarouselSlide content={content} />
            <Arrow
              direction="right"
              clickFunction={() => onArrowClick("right")}
            />
          </Even>
        </Col>
      </Row>
      <Row>
        <div>
          <h1>Roadmap</h1>
          <Milestone />
          <div>
            <span className="start">
              <ProgressBar />
            </span>

            <span className="circles">
              {" "}
              <img
                className="miles"
                alt="resume-milestone"
                src={require("../Assets/milestone-icons/resume.png")}
                height="40px"
                width="40px"
              />
              <ProgressBar />
            </span>
            <span className="circles">
              {" "}
              <img
                className="miles"
                alt="resume-milestone"
                src={require("../Assets/milestone-icons/job-description.png")}
                height="40px"
                width="40px"
              />
              <ProgressBar />
            </span>
            <span className="circles">
              {" "}
              <img
                className="miles"
                alt="resume-milestone"
                src={require("../Assets/milestone-icons/meeting.png")}
                height="40px"
                width="40px"
              />
              <ProgressBar>
                <Box />
              </ProgressBar>
            </span>
            <span className="circles">
              {" "}
              <img
                className="miles"
                alt="resume-milestone"
                src={require("../Assets/milestone-icons/summer.png")}
                height="40px"
                width="40px"
              />
              <ProgressBar />
            </span>
          </div>
          <Row>
            <Box>
              <p>Resume Description</p>
            </Box>
            <Box>
              <p>1st Round of Apps Description</p>
            </Box>
            <Box>
              <p>Interview Description</p>
            </Box>
            <Box>
              <p>Summer Description</p>
            </Box>
          </Row>
        </div>
      </Row>
    </DefaultContainer>
  );
}

export default DashBoard;
