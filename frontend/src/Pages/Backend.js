import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTasks, listTaskDetails } from '../Actions/taskActions';

import DefaultContainer from '../Components/DefaultContainer';
import CircularProgress from '@mui/material/CircularProgress';

function Backend() {
  const dispatch = useDispatch();

  const taskList = useSelector((state) => state.taskList);
  const { loading, error, tasks } = taskList;

  //   const taskDetails = useSelector((state) => state.taskDetails);
  //   const { loading, error, state } = taskDetails;

  useEffect(() => {
    dispatch(listTasks());
    dispatch(listTaskDetails('625a6fb7b91e9e6fc15128fd'));
  }, [dispatch]);

  return (
    <DefaultContainer>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          {tasks.map((task) => (
            <h3>{task.title}</h3>
          ))}
        </div>
      )}

      {/* {loading ? (
        <CircularProgress />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          {/* {task.resources.map((rsrc) => (
            <h3>{rsrc.details}</h3>
          ))}
          <h3>{task.title}</h3>
        </div>
      )} */}

      {/* <h2>{task.title}</h2>
      <p>{task.description}</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {task.resources?.map((rsrc) => (
          <a target='_blank' href={rsrc.url}>
            {rsrc.description}
          </a>
        ))}
      </div> */}
    </DefaultContainer>
  );
}

export default Backend;
