import {Typography, Button} from '@mui/material';
import React from "react";

const CommentHelper = (props) =>{
    return(
        <div style = {CommentBodyStyle}>
            <Typography variant="h6" gutterBottom component="div">
                {props.comment.courseName}
            </Typography>
            <div style = {ContentStyle}>
                <Typography variant="body2" gutterBottom>
                    {props.comment.content}
                </Typography>
            </div>
            <div style = {ActionsStyle}>
                <Button variant = 'text' >Like</Button>
                <Button variant = 'text' >ViewCourse</Button>
            </div>
        </div>
    )
}

const CommentBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
    minWidth: '35%',
    height: '30vh',
    background: '#edf4f5',
    margin: 20,
    alignItems: 'center',
    borderStyle: 'solid',
    padding: 12,
    borderColor: '#003b5c',
    borderRadius: 12
}


const ContentStyle = {
    height: '70%',
    minHeight: '70%',
    display: 'flex',
    overflowY: 'scroll',
    padding: 2
}

const ActionsStyle = {
    display: 'flex',
    flexDirection: 'row'
}

export default CommentHelper;