import React from 'react';
import ScienceIcon from '@mui/icons-material/Science';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import ViewHub from './ViewHub';
import Chapter from './Chapter'
import { useEffect } from 'react';

const Hub = ()=>{
    const {state} = useLocation();
    const [chaptersArray, setChaptersArray] = useState([]);
    const [courseID, setCourseID] = useState("");
    const [courseName, setCourseName] = useState("");
    const [getIndex, setGetIndex] = useState(0);
    const [view, setView] = useState(false);
   

    useEffect(()=>{
        initData();
    }, []);

    const initData =()=>{
        
        setChaptersArray(state.course.content);
        setCourseID(state.course.courseID);
        setCourseName(state.course.courseName);
        console.log(state.course);
    }
    
                
    if(view){
        // pass in props for the chapter wanna view... 
        return(
            <ViewHub setView = {setView} 
            slidesArray = {chaptersArray[getIndex].slides}
            chapterName = {chaptersArray[getIndex].name}
            courseID = {courseID}/>
            );
    }

    return(
        <div data-testid = 'hub-div' style = {MainStyle}>
            <div style = {NavStyle}>
                <ScienceIcon fontSize='large' sx = {{color: 'white'}}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>Learning Hub</p>
            </div>
            <p style ={{color: 'gray', fontWeight: '400', marginBottom: 15, fontSize: 22, marginLeft: 12}} >{courseName}</p>
            <div style = {ShowStyle}>
                {chaptersArray.map((item, index)=>
                    <Chapter 
                        index = {index}
                        key = {index}
                        data = {item}
                        setGetIndex = {setGetIndex}
                        setView = {setView}
                    />
                )}
            </div>

        </div>
    );
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const NavStyle = {
    display: 'flex',
    flexDirection: 'row',
    background: '#007377',
    alignItems: 'center',
    marginBottom: 12,
    padding: 3
}

const ShowStyle ={
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignSelf: 'center'
}

export default Hub;