import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddMenu from './AddMenu';
import ViewSkills from './ViewSkills';

const Skills = (props)=>{

    const change = ()=>{
        props.setVisible(false);
    }

    if(props.visible){
        return(
            <div style = {MainStyle}>
                <div style = {InputStyle}>
                <TextField
                label="Add Interests or Skills" 
                variant="outlined"/>
                </div>
                <div style = {ClickStyle}>
                <CheckCircleOutlineIcon sx = {{color: 'black'}} onClick = {change}/>
                </div>
    
               
            </div>
        )
    }else{
        return(
            <AddMenu 
            click = 'skills'
            display = {ViewSkills}
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