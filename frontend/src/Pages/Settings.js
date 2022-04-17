import * as React from 'react';
import DefaultContainer from '../Components/DefaultContainer';
import Button from '@mui/material/Button';

function Settings() {
  return (
    <DefaultContainer>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <h1>Settings</h1>
    </DefaultContainer>
  );
}

export default Settings;
