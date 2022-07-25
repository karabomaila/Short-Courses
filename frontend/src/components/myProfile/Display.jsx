import ExposeView from "./ExposeView.jsx";
import React from "react";
import Notes from "../Notes/Notes.jsx";

const Display = (props) => {
    if(props.view === 'ExposeView'){
        return(
            <div data-testid = 'display-expo' style={MainStyle}>
                <ExposeView 
                userID = {props.userID}
                userName = {props.userName}
                courses = {props.courses} 
                comments = {props.comments}
                bio = {props.bio}
                />
            </div>
            );
    }else if(props.view === 'Notes'){
        return(
            <div data-testid = 'display-notes' style={MainStyle}>
                <Notes userID = {props.userID}/>
            </div>
        );
    }
        

    
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    minHeight: '100vh'
}

export default Display;