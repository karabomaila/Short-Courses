import { Button } from '@mui/material';
import React from 'react';

const ActionDel = (props)=>{
    return(
        <Button variant = 'outlined' style = {Style} >{props.title}</Button>
    )
}

const Style = {
    margin: 5,
    color: 'red',
    //background: 'red',
    borderColor: 'red'
}

export default ActionDel;