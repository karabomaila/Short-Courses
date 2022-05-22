import {Button,Dialog, DialogTitle, DialogContent, DialogActions, TextField} from '@mui/material';
import React from 'react';
import {useState, useEffect} from 'react';
import { db } from '../firebase-config';
import { doc, setDoc, arrayUnion} from "firebase/firestore";

const AddComment = (props)=>{

    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');
    const [comment, setComment] = useState('');

    const onUpload = async (global, local)=>{
        const allRef = doc(db, 'CompletedCourses', props.courseID);
        const myRef = doc(db, 'Comments', props.userID);

        await setDoc(allRef, {allComments: arrayUnion(global)}, {merge: true});
        await setDoc(myRef, {comms: arrayUnion(local)}, {merge: true});
    }

    const onClose = ()=>{
        props.close(false);
    }

    const onComment = ()=>{
        if(comment != ''){
            const global = {userName: props.userName, userID: props.userID, comment: comment};
            const local = props.courseName + "+" + props.courseID + "+" + comment;
            onUpload(global, local);
            console.log(comment);
            setComment('');
        }

        props.close(false);
    }

    return(
        <div data-testid = "add-div">
        <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={props.open} onClose={onClose}>
            <DialogTitle>
                Add Comment
            </DialogTitle>
            <DialogContent>
                <TextField data-testid = "add-input"
                    label="New Comment"
                    multiline
                    fullWidth
                    rows={4}
                    value = {comment}
                    onChange = {event => setComment(event.target.value)}
                    variant="filled"
                />
               
            </DialogContent>
            <DialogActions>
                <Button variant = 'outlined' onClick = {onClose}  data-testid = "add-cancel">Cancel</Button>
                <Button variant = 'outlined' onClick = {onComment}  data-testid = "add-comment">Comment</Button>
            </DialogActions>
        </Dialog>
    </div>
    )
}

export default AddComment;