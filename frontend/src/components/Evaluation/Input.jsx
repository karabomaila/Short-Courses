import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';


const Input = (props)=>{

    

    if(props.type === 'radio'){
        return(
            <div style = {MainStyle}>
                    <TextField multiline 
                    rows={3} 
                    onChange = {event => props.setState(event.target.value)}
                    label = 'Statement/Question' 
                    value={props.state}
                    sx = {{marginBottom: 3}}/>
                    <TextField label = 'Option 1'
                    value={props.option1} 
                    onChange = {event => props.setOption1(event.target.value)}
                    sx = {{marginBottom: 3}}/>
                    <TextField label = 'Option 2'
                    value={props.option2} 
                    onChange = {event => props.setOption2(event.target.value)}
                    sx = {{marginBottom: 3}}/>
                    <TextField label = 'Option 3'
                    value={props.option3}
                    onChange = {event => props.setOption3(event.target.value)}/>
            </div>
        );
    }
    return(
        <div style = {MainStyle}>
             <TextField multiline 
             value={props.state}
             rows={3} 
             onChange = {event => props.setState(event.target.value)}
             label = 'Statement/Question'/>
        </div>
    )
    
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column',
    margin: 12,
    justifyContent: 'space-evenly'
}

export default Input;