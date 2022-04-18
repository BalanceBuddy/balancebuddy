import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTaskDetails } from '../Actions/taskActions';

import DefaultContainer from '../Components/DefaultContainer';
import CircularProgress from '@mui/material/CircularProgress';

function Backend2() {
  const dispatch = useDispatch();

  const taskDetails = useSelector((state) => state.taskDetails);
  const { loading, error, task } = taskDetails;

  useEffect(() => {
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
          {task.resources.map((rsrc) => (
            <a href={rsrc.url} target='_blank'>
              <h3 key={rsrc._id}>{rsrc.description}</h3>
            </a>
          ))}
        </div>
      )}
    </DefaultContainer>
  );
}

export default Backend2;
