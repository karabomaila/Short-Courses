import AddMenu from './AddMenu';
import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Education = (props)=>{

    const change = ()=>{
        props.setVisible(false);
    }

    if(props.visible){
        return(
            <div style = {MainStyle}>
                <div style = {InputStyle}>
                    <TextField label = 'Institution Name' variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Qualification Name' variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Year Started' variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Year Completed' variant='standard'/>
                </div>
                <div style = {ClickStyle}>
                <CheckCircleOutlineIcon sx = {{color: 'black'}} onClick = {change}/>
                </div>
                
            </div>
        )
    }else{
        return(
            <AddMenu 
            click = 'edu'
            eduVisible = {props.setVisible}/>
        )
    }
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
}

const ClickStyle ={
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
    alignItems: 'center'
}

const InputStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}

export default Education;