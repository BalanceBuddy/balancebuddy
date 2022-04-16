import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Slide } from "react-slideshow-image";
import Slideshow from "./Slideshow";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  justify-content: center; // centers rodamap text
`;
// Motivation Board
const slideImages = [
  "../Assets/motivation/puppy.jpeg",
  "../Assets/motivation/love.jpeg",
  "../Assets/motivation/mansion.jpeg",
  "../Assets/motivation/goggins.jpeg",
];

const properties = {};

const Col = styled.div`
  padding-left: 30px;
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
    font-size: 32px;
    margin-bottom: 0px;
  }
  p {
    font-size: 18px;
  }
  .text {
    padding-right: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .above {
    margin-top: 0px;
  }
  .button {
    background-color: #62bdca;
    border: none;

    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.25));
  }

  button {
    background-color: #62bdca;
    font-size: 18px;
    text-align: left;
    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;

    width: 200px;
    height: 42px;
    left: 480px;
    top: 162px;
    margin: 10px;

    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .task-container {
    display: flex;
    flex-direction: row;
  }
  .task-item {
    padding-right: 40px;
    padding-top: 30px;
  }
  .resource-item {
    padding: 40px;
  }

  // slide show
`;

const now = 60;

function DashBoard() {
  return (
    <>
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
              <button type="button" className="button">
                Completed Task
              </button>
              <button type="button" className="button">
                Change Task
              </button>
            </div>
          </div>
          <div className="task-container">
            <div>
              <h2 className="above">Resources</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                viverra lectus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                viverra lectus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                viverra lectus.
              </p>
            </div>
            <div></div>
          </div>
        </Col>

        <Col>
          <h2>Motivation</h2>
          <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row>
        <h1>Roadmap</h1>
      </Row>
    </>
  );
}

export default DashBoard;
