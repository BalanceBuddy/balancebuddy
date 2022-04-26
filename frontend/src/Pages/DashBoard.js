import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  listUserCurrentTask,
  userGenerateNewCurrentTask,
  userCompletedCurrentTask,
  listUserDetails,
} from '../Actions/userActions';
import { listLevels } from '../Actions/levelActions';

import DefaultContainer from '../Components/DefaultContainer';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '../Components/Button';
import Roadmap from '../Components/Roadmap';
import CarouselSlide from '../Components/CarouselSlide';
import { slideData } from '../Components/MotivationConstants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

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
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

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
  // frontend and styling

  const [index, setIndex] = useState(0);
  const content = slideData[index];
  const numSlides = slideData.length;

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };

  // retreiving data from database
  const userId = '6267c09216cd5996065d80c4';
  const dispatch = useDispatch();

  var thisState = useSelector((state) => state);
  var currentTask = thisState.userCurrentTask;
  var roadmapData = thisState.userDetails.user.roadmap;
  var levelsData = thisState.levelList.levels;
  var { loading, error, task } = currentTask;

  useEffect(() => {
    dispatch(listUserCurrentTask(userId));
    dispatch(listUserDetails(userId));
    dispatch(listLevels());
  }, [dispatch]);

  //generate new task on button click
  function newTask(e) {
    dispatch(userGenerateNewCurrentTask(userId));
    setTimeout(refreshTask, 800);
  }

  function refreshTask() {
    dispatch(listUserCurrentTask(userId));
  }

  //complete task on button click
  function completeTask(e) {
    dispatch(userCompletedCurrentTask(userId));
    setTimeout(refreshRoadmap, 800);
    setTimeout(refreshTask, 800);
  }

  function refreshRoadmap(e) {
    dispatch(listUserDetails(userId));
  }

  //refresh button
  function refreshAll(e) {
    refreshRoadmap();
    refreshTask();
  }

  return (
    <DefaultContainer>
      <Row>
        <Col>
          <div className='task-container'>
            <div
              style={{
                marginRight: '20px',
              }}
            >
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <h3>{error}</h3>
              ) : (
                <div>
                  <h2>{task.title}</h2>
                  <p className='text'>{task.description}</p>
                </div>
              )}
            </div>

            <div
              className='task-item'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                padding: '0',
              }}
            >
              <IconButton
                style={{ width: 'auto' }}
                onClick={() => {
                  refreshAll();
                }}
              >
                <RefreshIcon></RefreshIcon>
              </IconButton>
              <Button onClick={completeTask}>Task Completed</Button>
              <Button onClick={newTask}>Change Task</Button>
            </div>
          </div>
          <div className='task-container'>
            <div>
              <h2 className='above'>Resources</h2>
              <div>
                {loading ? (
                  <CircularProgress />
                ) : error ? (
                  <h3>{error}</h3>
                ) : (
                  <div>
                    {task.resources.map((rsrc) => (
                      <a
                        key={rsrc._id}
                        href={rsrc.url}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <h3>{rsrc.description}</h3>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div></div>
          </div>
        </Col>

        <Col>
          <h2>Motivation Board</h2>
          <Even>
            <Arrow
              direction='left'
              clickFunction={() => onArrowClick('left')}
            />
            <CarouselSlide content={content} />
            <Arrow
              direction='right'
              clickFunction={() => onArrowClick('right')}
            />
          </Even>
        </Col>
      </Row>

      <h1>Roadmap</h1>
      <Row>
        <Roadmap roadmapData={roadmapData} levelData={levelsData} />
      </Row>
    </DefaultContainer>
  );
}

export default DashBoard;
