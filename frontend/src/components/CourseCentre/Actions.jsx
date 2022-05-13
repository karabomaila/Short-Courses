import { Button } from '@mui/material';
import FeedbackDialog from '../Feedback/FeedbackDialog';
import React from 'react';

const Actions = (props)=>{

    const onClick = ()=> {
        switch (props.click){
            case 'rate':
                props.openFeedb(true);
                break;
            case 'about':
                props.openAbout(true);
                break;
            default:
                console.log('non');
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