import ExposeView from "./ExposeView.jsx";
import React from "react";
import PersonalityTest from "./PersonalityTest.jsx";

const Display = (props) => {
    if(props.view === 'ExposeView'){
        return(
        <div data-testid = 'display-div' style={MainStyle}>
            <ExposeView 
            userID = {props.userID}
            courses = {props.courses} 
            comments = {props.comments}
            bio = {props.bio}
            setBio = {props.setBio}
            />
        </div>
        )
    }else if(props.view === 'PersonalityTest'){
        return(
            <div style={MainStyle}>
                <PersonalityTest 
                userID = {props.userID}
                courses = {props.courses} 
                comments = {props.comments}
                bio = {props.bio}
                setBio = {props.setBio}
                />
            </div>
        )
    }
    
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    minHeight: '100vh'
}

export default Display;