import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Slide } from "react-slideshow-image";
import motivate1 from "../Assets/motivation/puppy.jpeg";
import motivate2 from "../Assets/motivation/love.jpeg";
import motivate3 from "../Assets/motivation/mansion.jpeg";
import motivate4 from "../Assets/motivation/goggins.jpeg";

// Motivation Board
const slideImages = [
  "../Assets/motivation/puppy.jpeg",
  "../Assets/motivation/love.jpeg",
  "../Assets/motivation/mansion.jpeg",
  "../Assets/motivation/goggins.jpeg",
];

const properties = {};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...properties}>
        <div className="each-slide">
          <div>
            <img src={motivate1} alt="motivate1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={motivate2} alt="motivate2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={motivate3} alt="motivate3" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={motivate4} alt="motivate4" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
