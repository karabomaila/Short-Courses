import { Button } from '@mui/material';
import React from 'react';

const Actions = (props)=>{
    return(
        <Button variant = 'outlined' style = {Style} >{props.title}</Button>
    )
}

const Style = {
    margin: 12,
    color: 'white',
    borderColor: '#daa520'
}

export default Actions;