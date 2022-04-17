import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DefaultContainer from '../Components/DefaultContainer';

function Backend() {
  const [task, setTask] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      //   const { user } = await axios.get('/api/tasks/625a6fb7b91e9e6fc15128fd');
      const { data } = await axios.get('/api/tasks/625a6fb7b91e9e6fc15128fd');
      setTask(data);
      const listResources = task.resources.map((rsrc) => (
        <p>{rsrc.description}</p>
      ));
      setResources(task.resources.map((rsrc) => <p>{rsrc}</p>));
    };

    fetchTask();
  }, []);

  //   useEffect(() => {
  //     const listResources = task.resources.map((rsrc) => (
  //       <p>{rsrc.description}</p>
  //     ));
  //     setResources(task.resources.map((rsrc) => <p>{rsrc}</p>));
  //     console.log(resources);
  //   }, [task]);
  // const listResources = (
  //   <div>
  //     {task.resources.map((post) => (
  //       <li key={post.id}>{post.title}</li>
  //     ))}
  //   </div>
  // );

  console.log(resources);
  //   const listResources = task.resources.map((rsrc) => <p>{rsrc.description}</p>);
  return (
    <DefaultContainer>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      {/* <div>{listResources}</div> */}
      {/* {task.resources.map((rsrc) => {
        <p>{rsrc.description}</p>;
      })} */}

      {/* {task.resources.map((rsrc) => {
        return <div>I am one Object in the Array</div>;
      })} */}
    </DefaultContainer>
  );
}

export default Backend;
