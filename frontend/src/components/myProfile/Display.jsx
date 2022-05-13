import ExposeView from "./ExposeView.jsx";
import React from "react";
import PersonalityTest from "./PersonalityTest.jsx";

const Display = (props) => {
    if(props.view === 'ExposeView'){
        return(
        <div data-testid = 'display-div' style={{display: 'flex', flexDirection: 'column'}}>
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
            <div style={{display: 'flex', flexDirection: 'column'}}>
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

export default Display;