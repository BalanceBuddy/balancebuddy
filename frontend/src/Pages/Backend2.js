import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  listUserDetails,
  listUserCurrentTask,
  userGenerateNewCurrentTask,
  userCompletedCurrentTask,
} from '../Actions/userActions';

import DefaultContainer from '../Components/DefaultContainer';
import CircularProgress from '@mui/material/CircularProgress';

function Backend2() {
  const userId = '625f9eed1318421b3105b2af';
  const dispatch = useDispatch();

  var thisState = useSelector((state) => state);
  var currentTask = thisState.userCurrentTask;
  var { loading, error, task } = currentTask;

  useEffect(() => {
    dispatch(listUserCurrentTask(userId));
    dispatch(listUserDetails(userId));
  }, [dispatch]);

  //button functions
  function newTask(e) {
    dispatch(userGenerateNewCurrentTask(userId));
    setTimeout(refreshTask, 500);
  }

  function taskCompleted(e) {
    dispatch(userCompletedCurrentTask(userId));
    setTimeout(refreshTask, 500);
    setTimeout(setProgressBars, 500);
  }

  function test(e) {
    dispatch(listUserDetails(userId));
    // const userData = thisState.userDetails;
    // var { user } = userData;
    console.log(thisState);
  }

  function refreshTask() {
    dispatch(listUserCurrentTask(userId));
  }

  function setProgressBars() {
    console.log('progress bar should refresh');
    //fetch the user's roadmap data
    const userData = thisState.userDetails;
    const { roadmap } = userData;

    //map through all levels, and check how completed they are
    roadmap.map((level) => ({}));
  }

  return (
    <DefaultContainer>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <h3>{task._id}</h3>
          {task.resources.map((rsrc) => (
            <a key={rsrc._id} href={rsrc.url} target='_blank' rel='noreferrer'>
              <h3>{rsrc.description}</h3>
            </a>
          ))}
        </div>
      )}

      <button onClick={newTask}>new task</button>
      <button onClick={taskCompleted}>task completed</button>
      <button onClick={test}>TEST</button>
    </DefaultContainer>
  );
}

export default Backend2;
