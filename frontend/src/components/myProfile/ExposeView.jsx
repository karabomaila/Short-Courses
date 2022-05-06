import { TextField } from '@mui/material';
import CommentHelper from './utils/CommentHelper';
import CourseHelper from './utils/CourseHelper';
import {useState} from 'react';
import { db } from '../firebase-config.jsx';
import {doc, setDoc} from 'firebase/firestore';
import React from "react";
import FilterCourses from './utils/FilterCourses';
import FilterComments from './utils/FilterComments';

const ExposeView = (props) =>{
    
    //let FilterCourses = require('./utils/FilterCourses');
    let filter = new FilterCourses();
    filter.Filter(props.courses, props.userID);
    let myCourses = filter.getMyCourses();
    
    //let FilterComments = require('./utils/FilterComments');
    let comms = new FilterComments(props.comments, props.userID);
    let myComments = comms.getMyComments();

    const updateBio = async () =>{
        let ref = doc(db, 'About', props.userID);
        setDoc(ref, {bio: props.bio}, {merge: true});
    }

    const onChange = event => {
        props.setBio(event.target.value);
        // update the database...
        updateBio();
    }
   
    return(
        <div style = {ExposeViewStyle}>
            <p style = {TextStyle}>Expose View</p>
            <div style = {BioDiv}>
            <TextField 
            label="Biography" 
            multiline fullWidth 
            value = {props.bio} 
            onChange = {onChange}/>
            </div>
            <div style = {SubTitleStyle}>
                <p style = {TextStyle}>Completed Courses</p>
            </div>
            <div style = {CompCoursesStyle}>
            {myCourses.map((item, index) => 
                <CourseHelper 
                key = {index} 
                course = {item} 
                />)}
                
            </div>
            <div style = {SubTitleStyle}>
                <p style = {TextStyle}>Pushed Comments</p>
            </div>
            
            <div style = {CommentsStyle}>
            {myComments.map((item, index) => 
                <CommentHelper 
                key = {index} 
                comment = {item} 
                />)}
            </div>
                    
        </div>
    )
}

const SubTitleStyle = {
    width: '85%', 
}

const ExposeViewStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#edf4f5',
    height: '100vh',
}

const BioDiv = {
    width: '85%', 
    margin: 20
}

const CompCoursesStyle = {
    width: '85%', 
    //borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    overflowY: 'scroll', 
    flexWrap: 'wrap'
    //borderStyle: 'solid',
    //borderColor: 'gray'
    //overflow: 'hidden'
}

const CommentsStyle = {
    width: '85%', 
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    //borderStyle: 'solid',
    overflowX: 'scroll'
    //flexWrap: 'wrap'
   
    
}

const TextStyle = {
    alignSelf: 'center', 
    fontWeight: 'bold'
}



export default ExposeView;