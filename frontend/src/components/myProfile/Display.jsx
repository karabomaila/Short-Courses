import ExposeView from "./ExposeView.jsx";
import React from "react";

const Display = (props) => {
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
}

export default Display;