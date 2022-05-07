import {Button,Dialog, DialogTitle, DialogContent, DialogActions,DialogContentText} from '@mui/material';
import * as React from 'react';
import {useState} from 'react';

const AboutCourseDialog = (props)=>{
    const [rate, setRate] = useState(3);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const onClose = ()=>{
        console.log('close dialog');
       
        props.close(false);
    }

    return(
        <div>
            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={props.open} onClose={onClose}>
                <DialogTitle>
                    JSON
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       This will teach all the JSON objects and all the good stuff
                    </DialogContentText>
                   <ul>
                       <li>What is JSON</li>
                       <li>JSON fundimentals</li>
                   </ul>
                </DialogContent>
                <DialogActions>
                    <Button variant = 'outlined' onClick = {onClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AboutCourseDialog;