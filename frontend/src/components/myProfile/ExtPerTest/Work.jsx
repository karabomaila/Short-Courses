import AddMenu from './AddMenu';
import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WorkView from './WorkView';
import {useState} from 'react';

const Work = (props)=>{
    const [comp, setComp] = useState('');
    const [occu, setOccu] = useState('');
    const [year1, setYear1] = useState('');
    const [year2, setYear2] = useState('');
    const data = [{name: 'Wits MSS', occupation: 'TLA', years: '2022 - 2022'}, {name: 'Wits RL', occupation: 'RM', years: '2021 - 2021'}, {name: 'Entelect', occupation: 'Software Engineer', years: '2023 - '}];

    const change = ()=>{
        props.setVisible(false);

        if(comp != '' && occu != '' && year1 != ''){
            // send to datbase...

            setComp('');
            setOccu('');
            setYear1('');
            setYear2('');
        }
    }

    if(props.visible){
        return(
            <div style = {MainStyle}>
                 <div style = {ClickStyle}>
                <CheckCircleOutlineIcon sx = {{color: 'green'}} onClick = {change}/>
                </div>
                <div style = {InputStyle}>
                    <TextField label = 'Company Name' 
                    value = {comp}
                    onChange = {event => setComp(event.target.value)}
                    variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Occupation' 
                value = {occu}
                onChange = {event => setOccu(event.target.value)}
                variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Year Started' 
                value = {year1}
                onChange = {event => setYear1(event.target.value)}
                variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Year Completed' 
                 value = {year2}
                 onChange = {event => setYear2(event.target.value)}
                variant='standard'/>
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