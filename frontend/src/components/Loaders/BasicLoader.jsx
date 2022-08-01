import * as React from 'react';
import Stack from '@mui/material/Stack';
import createTheme from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

export default function BasicLoader() {
  return (
    <div style = {{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Stack sx={{ color: '#007377' }} spacing={2} direction="row">
        <CircularProgress size = {100} color="inherit" />
        </Stack>
    </div>
   
  );
}