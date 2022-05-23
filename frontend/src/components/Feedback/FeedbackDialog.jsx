import {Button,Dialog, DialogTitle, DialogContent, DialogActions,DialogContentText} from '@mui/material';
import * as React from 'react';
import RatingPanel from './RatingPanel';
import UploadImagePanel from './UploadImagePanel';
import {useState} from 'react';

// Need to connected to firebase...


const FeedbackDialog = (props)=>{
    const [rate, setRate] = useState(3);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const onClose = ()=>{
        console.log('close dialog');
        console.log(rate)
        props.close(false);
    }

    return(
        <div data-testid = "feed-div">
            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={props.open} onClose={onClose}>
                <DialogTitle>
                    Feedback
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please rate the course and upload an image showing how you feel about the content covered.
                    </DialogContentText>
                    <RatingPanel setRate = {setRate}/>
                    <UploadImagePanel/>
                </DialogContent>
                <DialogActions>
                    <Button variant = 'outlined' onClick = {onClose}>DONE</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FeedbackDialog;