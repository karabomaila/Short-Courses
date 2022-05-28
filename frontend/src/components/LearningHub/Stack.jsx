import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Navigation from './Navigation';
import Notes from './Notes';

const Stack = (props)=>{

    if(props.type === 'Notes'){
        return(<Navigation array = {props.array} setOnDisplay = {props.setOnDisplay}/>);
    }
    return(<Notes />);
}

export default Stack;