import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddMenu from './AddMenu';
import ViewSkills from './ViewSkills';

const Skills = (props)=>{

    const data = ['Programming', 'Problem Solving', 'Computer Science', 'University', 'Witwatersrand', 'Machine Learning', 'Google']

    const change = ()=>{
        props.setVisible(false);
    }

    if(props.visible){
        return(
            <div style = {MainStyle}>
                 <div style = {ClickStyle}>
                <CheckCircleOutlineIcon sx = {{color: 'green'}} onClick = {change}/>
                </div>
                <div style = {InputStyle}>
                <TextField
                label="Add Interests or Skills" 
                variant="outlined"/>
                </div>
               
            </div>
        )
    }else{
        return(
            <AddMenu 
            click = 'skills'
            type = 'skills'
            data = {data}
            skillVisible = {props.setVisible}/>
        )
    }

    
}

const MainStyle= {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
}

const InputStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}

const ClickStyle ={
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
    alignItems: 'center'
}

export default Skills;