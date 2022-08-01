import React, { useContext } from 'react';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import DefaultEvaluation from '../Evaluation/DefaultEvaluation';
import { useState } from 'react';
import {DndProvider, useDrop} from 'react-dnd';
import { HTML5Backend} from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom';
import CreateNewForm from '../Evaluation/CreateNewForm';
import BasicLoader from '../Loaders/BasicLoader';
import Backdrop from '@mui/material/Backdrop';
import { CourseContext } from '../ContextAPI/CoursaContext';
import axios from 'axios';

const PlusHome = (props)=>{
    
    const navigate = useNavigate();
    const [create, setCreate] = useState(false);

    // getting the data from the user...
    const {courseData, slideData} = useContext(CourseContext);

    const courseID = courseData.courseID;
    const courseName = courseData.name;

    const [loader, setLoader] = useState(false);

    // default evaluation...
    const defaultItems = [
        {type: 'slider', content: 'The slides were well prepared/presented'},
        {type: 'slider', content: 'The course stimulated my interest in the field related to the course'},
        {type: 'slider', content: 'The course had variety of instructional methods to reach the course objective '},
        {type: 'box', content: 'Would you recommend this course to a friend'},
        {type: 'box', content: 'Did you cover all the learning outcomes' },
        {type: 'box', content: 'The course description accurately described the course content'},
        {type: 'type', content: 'Out of 100 how good is this course', array: ['75+', '50 - 74', '0 - 49']},
    ];
    
    const onCreate =()=>{
        setCreate(true);
    }

    const onFinish = async()=>{
        // call the backend to post the data...
        setLoader(true);
        slideData.evaluation = defaultItems;
        await axios.post("/newCourse", {slideData: slideData, courseData: courseData})
        .then((response)=>{
            setLoader(false);
            navigate('/MyCourses');
        })
        .catch((err)=>{
            console.log(err);
        });  
        
    }

    return(
        <DndProvider backend={HTML5Backend}>
        <div data-testid = "++-div" style = {MainStyle}>
            <div style = {NavStyle}>
                <BubbleChartIcon fontSize='large' sx = {{color: 'white'}}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>STUDIO++</p>
            </div>

            {create ? 
             <p style = {{fontWeight: 'bold'}}>New Evaluation Form</p>
            : 
            <p style = {{fontWeight: 'bold'}}>Default Evaluation Form</p>
            }
            {!create &&
            <DefaultEvaluation courseName = {courseName}/>
            }

            {create &&
                <CreateNewForm setCreate = {setCreate}
                courseID = {courseID}
                courseName = {courseName}
                />
            }
            
            {!create &&
            <Fab data-testid = 'fab-onfinish' variant="extended" style = {FabStyle} onClick = {onFinish}>
                 <DoneIcon sx={{ mr: 1, color: '#007377'}} />
                 Use Default Form
            </Fab>
            }

            {!create &&
            <Fab data-testid = 'fab-oncreate' variant="extended" style = {NFabStyle} onClick = {onCreate}>
                 <AddIcon sx={{ mr: 1, color: '#007377'}} />
                 Create New Form
            </Fab>
            }

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loader}
            >
                <BasicLoader />
            </Backdrop>
        </div>
        </DndProvider>
    );
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
}

const NavStyle = {
    display: 'flex',
    flexDirection: 'row',
    background: '#007377',
    alignItems: 'center',
    marginBottom: 12,
    padding: 3,
    width: '100%'
}

const NFabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 85,
    left: 'auto',
    position: 'fixed',
    backgroundColor: 'white'
  };

const FabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: 'white'
  };

export default PlusHome;