import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const CourseAppBar = (props) => {
  
  return (
    <AppBar data-testid = "app-test" position="fixed" style={{backgroundColor: '#003b5c'}}>
      <Container  style={{textAlign: "center",justifyContent: "center"}}>
        
        <Typography variant="h3" style={{padding:'5px'}}>{props.CourseName}</Typography>
      </Container>
    </AppBar>
  );
};
export default CourseAppBar;
