import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import Chapter from './Chapter';
import { useEffect } from 'react';

const Chapters = ()=>{
    const {state} = useLocation();
    const [chapters, setChapters] = useState([]);
    const [courseID, setCourseID] = useState("");
    const [courseName, setCourseName] = useState("");
    const [getIndex, setGetIndex] = useState(0);
    const [view, setView] = useState(false);
   

    useEffect(()=>{
        initData();
    }, []);

    const initData =()=>{
        setChapters(state.chapters);
        setCourseID(state.courseID);
        setCourseName(state.courseName);
    }
    
                
    if(view){
        // pass in props for the chapter wanna view... 
        return(
            <>
            </>
            );
    }

    return(
        <div data-testid = 'hub-div' style = {MainStyle}>
            <div style = {NavStyle}>
                <DescriptionIcon fontSize='large' sx = {{color: 'white'}}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>Notes++</p>
            </div>
            <p style ={{color: 'gray', fontWeight: '400', marginBottom: 15, fontSize: 22, marginLeft: 12}} >{courseName}</p>
            <div style = {ShowStyle}>
                {chapters.map((item, index)=>
                    <Chapter 
                        key = {index}
                        chapterName = {item.chapName}
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

export default Chapters;