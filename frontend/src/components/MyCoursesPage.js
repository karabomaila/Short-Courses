import { Container, Row,Col } from "react-bootstrap";
import CardViewList from "./CardViewList";
import Course from "./EnrolledCourse";
import EnrolledNav from "./EnrolledNav";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MyCoursesList from "./CoursesUI/MyCoursesList";
import EnrolledAppBar from "./EnrolledAppBar";
import CreateCourse from "./CreateCourse";
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

    const handleClose = () => setShow(false);
    const handleShow = () => {
        navigate('/CreateCourse',{ state: { user: state.user } });
    }

    return(

        <div style = {{display: 'flex'}}>
        <div style = {{display: 'flex', marginBottom: 12}}>
        <EnrolledAppBar title="My Courses" modal={true} user={state.user} />
        </div>
        <div style = {listStyle}>
            <MyCoursesList user={state.user}/>
            
        </div>

        <Fab color="primary" aria-label="add" style={fabStyle} onClick={handleShow}>
                <AddIcon />
            </Fab>
        
        </div>
        
    );
}

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 12,
    justifyContent: 'center'
}


export default MyCourses;
