import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WholeContainer from '../../Components/WholeContainer';
import CircularProgress from '@mui/material/CircularProgress';

function Signup() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  useEffect(() => {
    setTimeout(routeChange, 2000);
  }, []);

  return (
    <>
      <WholeContainer>
        <h2>Account setup complete.</h2>
        <CircularProgress />
        <p>Loading dashboard...</p>
      </WholeContainer>
    </>
  );
}

export default Signup;
