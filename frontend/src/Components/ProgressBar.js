import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  zIndex: -1,
  height: 15,
  width: '100%',
  borderRadius: 10,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#62bdca' : '#f0544f',
  },
}));

function ProgressBar({ value, width, ...props }) {
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: width || '100px',
        }}
        {...props}
      >
        <br />
        <BorderLinearProgress
          variant='determinate'
          value={value}
          backgroundColor='dark'
        />
      </Box>
    </>
  );
}

export default ProgressBar;
