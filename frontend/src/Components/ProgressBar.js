import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  zIndex: -1,
  height: 15,
  width: 110,
  borderRadius: 10,
  marginLeft: '56px',
  marginTop: '-50px',

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#62bdca' : '#f0544f',
  },
}));

function ProgressBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <br />
        <BorderLinearProgress
          variant='determinate'
          value={0}
          backgroundColor='dark'
        />
      </Box>
    </>
  );
}

export default ProgressBar;
