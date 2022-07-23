import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CourseNav from './CourseNav';

const EnrolledAppBar = (props) => {
  
  return (
    <AppBar style={{display: 'flex', backgroundColor: '#007377',textAlign: 'center'}}>
      <Container  style={{display: 'flex', flexDirection: 'row',textAlign: 'center'}}>
          <CourseNav modal ={props.modal} user={props.user}/>
          <Typography variant="h3" style={{padding:'5px',marginLeft:'200px'}}>{props.title}</Typography>
      </Container>
    </AppBar>
  );
};
export default EnrolledAppBar;
