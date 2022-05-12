import { Button } from '@mui/material';
import React from 'react';

const Actions = (props)=>{
    return(
        <Button variant = 'outlined' style = {Style} >{props.title}</Button>
    )
}

const Style = {
    margin: 5,
    color: '#003b5c',
    borderColor: '#daa520'
}

export default Actions;