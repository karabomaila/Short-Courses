import { Button } from "@mui/material";
import {useState} from 'react';
import React from "react";

const Action = (prop) => {

    const [colour, setColour] = useState('white');

    const onClick = ()=>{
        setColour('white');
        switch (prop.click){
            case 'ExposeView':
                prop.setView('ExposeView');
                setColour('red');
                break;
            case 'PersonalityTest':
                prop.setView('PersonalityTest');
                setColour('red');
                break;
            default:

        }
    }

    return(
        <Button variant="outlined" 
        style={{color: 'white',
        width: '80%',
        margin: 12,
        borderColor: colour}} 
        onClick = {onClick} 
        >{prop.title}</Button>
    )
}

const ButtonStyle = {
    color: 'white',
    width: '80%',
    margin: 12,
    borderColor: 'white'
}


export default Action;