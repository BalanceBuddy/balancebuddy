import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { listTaskDetails } from '../Actions/taskActions';
import {
  listUserCurrentTask,
  userGenerateNewCurrentTask,
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
  }, [dispatch]);

  //generate new task on button click
  function newTask(e) {
    dispatch(userGenerateNewCurrentTask(userId));
    setTimeout(refreshTask, 500);
  }

  function refreshTask() {
    dispatch(listUserCurrentTask(userId));
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
    </DefaultContainer>
  );
}

export default Backend2;
