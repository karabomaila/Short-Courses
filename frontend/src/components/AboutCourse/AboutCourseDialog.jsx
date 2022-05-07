import {Button,Dialog, DialogTitle, DialogContent, DialogActions,DialogContentText} from '@mui/material';
import * as React from 'react';
import {useState, useEffect} from 'react';
import { db } from '../firebase-config.jsx';
import ListOutcomes from './ListOutcomes.jsx';

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
                    <DialogContentText>
                        Duration: {props.data.duration}
                    </DialogContentText>
                    <DialogContentText>
                        Learning Outcomes
                    </DialogContentText>
                       <ListOutcomes array = {props.data.outcomes}/>
                </DialogContent>
                <DialogActions>
                    <Button variant = 'outlined' onClick = {onClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AboutCourseDialog;