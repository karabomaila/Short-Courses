import AddMenu from './AddMenu';
import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WorkView from './WorkView';

const Work = (props)=>{

    const data = [{name: 'Wits MSS', occupation: 'TLA', years: '2022 - 2022'}, {name: 'Wits RL', occupation: 'RM', years: '2021 - 2021'}, {name: 'Entelect', occupation: 'Software Engineer', years: '2023 - '}];

    const change = ()=>{
        props.setVisible(false);
    }

    if(props.visible){
        return(
            <div style = {MainStyle}>
                <div style = {InputStyle}>
                    <TextField label = 'Company Name' variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Occupation' variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Year Started' variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Year Completed' variant='standard'/>
                </div>
                <div style = {ClickStyle}>
                <CheckCircleOutlineIcon sx = {{color: 'green'}} onClick = {change}/>
                </div>
                
            </div>
        )
    }else{
        return(
            <AddMenu 
            click = 'work'
            type = 'work'
            data = {data}
            workVisible = {props.setVisible}/>
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

export default Work;