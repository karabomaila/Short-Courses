import { Button } from '@mui/material';
import FeedbackDialog from '../Feedback/FeedbackDialog';
import React from 'react';

const Actions = (props)=>{

    const onClick = ()=> {
        if(props.click === 'rate'){
            props.openFeedb(true);
        }
    }

    return(
        <Button variant = 'outlined' style = {Style} onClick = {onClick}>{props.title}</Button>
    )
}

const Style = {
    margin: 12,
    color: 'white',
    borderColor: '#daa520'
}

export default Actions;