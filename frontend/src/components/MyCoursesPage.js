import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MyCoursesList from "./CoursesUI/MyCoursesList";
import EnrolledAppBar from "./EnrolledAppBar";

import {useLocation,useNavigate } from 'react-router-dom';
import React from "react";


const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: '#d9c93b'
  };



function MyCourses(){

    const [show, setShow] = useState(false);
    const {state} = useLocation();
    console.log(state);
    const navigate = useNavigate();

    // <EnrolledAppBar title="My Courses" modal={true} user={state.user} />
    
    const handleShow = () => {
        navigate('/CreateCourse',{ state: { user: state.user } });
    }

    return(
        <div style = {{display: 'flex', flexDirection: 'column'}}>
        <EnrolledAppBar title="My Courses" modal={true} user={state.user} />
        <MyCoursesList user={state.user}/>
        <Fab color="primary" aria-label="add" style={fabStyle} onClick={handleShow}>
                <AddIcon />
            </Fab>
        
        </div>
        
    );
}

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 50,
    justifyContent: 'center'
}


export default MyCourses;
