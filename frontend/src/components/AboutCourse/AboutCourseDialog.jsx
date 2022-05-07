import {Button,Dialog, DialogTitle, DialogContent, DialogActions,DialogContentText} from '@mui/material';
import * as React from 'react';
import {useState, useEffect} from 'react';
import { db } from '../firebase-config.jsx';

const AboutCourseDialog = (props)=>{
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
   
    const onClose = ()=>{
        //console.log(info);

        props.close(false);
    }

    return(
        <div>
            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={props.open} onClose={onClose}>
                <DialogTitle>
                    {props.courseName}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       {props.data.description}
                    </DialogContentText>
                       Duration: {props.data.duration}
                </DialogContent>
                <DialogActions>
                    <Button variant = 'outlined' onClick = {onClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AboutCourseDialog;