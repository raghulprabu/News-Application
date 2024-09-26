import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Loading.css"

export default function CircularIndeterminate() {
  return (
    <Box className='loading'>
      <CircularProgress />
    </Box>
  );
}
