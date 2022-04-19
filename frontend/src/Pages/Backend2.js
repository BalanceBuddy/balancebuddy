import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTaskDetails } from '../Actions/taskActions';
import {
  listUserCurrentTask,
  userGenerateNewCurrentTask,
} from '../Actions/userActions';

import DefaultContainer from '../Components/DefaultContainer';
import CircularProgress from '@mui/material/CircularProgress';

function Backend2() {
  const userId = '625cffbd40f58c0702a35dfc';
  const dispatch = useDispatch();

  // const taskDetails = useSelector((state) => state.taskDetails);
  // const { loading, error, task } = taskDetails;

  const currentTask = useSelector((state) => state.userCurrentTask);
  const { loading, error, task } = currentTask;

  useEffect(() => {
    dispatch(listUserCurrentTask(userId));
  }, [dispatch]);

  //generate new task on button click
  function newTask(e) {
    dispatch(userGenerateNewCurrentTask(userId));
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
            <a href={rsrc.url} target='_blank' rel='noreferrer'>
              <h3 key={rsrc._id}>{rsrc.description}</h3>
            </a>
          ))}
        </div>
      )}

      <button onClick={newTask}>new task</button>
    </DefaultContainer>
  );
}

export default Backend2;
