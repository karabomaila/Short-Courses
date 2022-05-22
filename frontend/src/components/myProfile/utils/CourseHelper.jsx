import NameTag from "./NameTag";
import {useNavigate} from 'react-router-dom';
import React, { Component } from "react";

const CourseHelper = (props) => {
    const navigator = useNavigate();
    let tag = NameTag(props.course.courseName);

    const onClick = () =>{
        navigator('/CourseCentre', 
            {state: {userID: props.userID, userName: props.userName, 
            courseID: props.course.courseID, courseName: props.course.courseName}});
        console.log(props.course.courseID);
    }
    return(
        <div style = {OuterBox} onClick = {onClick}>
            <div style = {InnerBox}>
                <h1 style = {{color: '#edf4f5'}}>{tag}</h1>
            </div>
            <div style = {InnerInnerBox}>
                <p style = {{alignSelf: 'center', fontWeight: 'bold'}}>{props.course.courseName}</p>
            </div>
            
        </div>
    )
}

const OuterBox = {
    margin: 12,
    width: '20%',
    height: '150px',
    borderRadius: 5,
    display: 'flex',
    background: '#edf4f5',
    borderStyle: 'groove',
    flexDirection: 'column',
    minWidth: '20%',
    alignItems: 'center',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const InnerBox = {
    display: 'flex',
    width: '100%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#003b5c'
}

const InnerInnerBox = {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    height: '40%',
    background: '#edf4f5'
}

export default CourseHelper;