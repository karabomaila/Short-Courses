import AddMenu from './AddMenu';
import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EducationView from './EducationView';
import { useState } from 'react';

const Education = (props)=>{

    const [inst, setInst] = useState('');
    const [qual, setQual] = useState('');
    const [year1, setYear1] = useState('');
    const [year2, setYear2] = useState('');
    const data = [{name: 'Wits', qualification: 'Coms', years: '2020 - 2022'}, {name: 'Dan', qualification: 'NSC', years: '2015 - 2019'}];

    const change = ()=>{
        props.setVisible(false);

        if(inst != '' && qual != '' && year1 != ''){
            // send to database...
            setInst('');
            setQual('');
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
                    <TextField label = 'Institution Name' 
                    value = {inst}
                    onChange = {event => setInst(event.target.value)}
                    variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Qualification Name' 
                value ={qual}
                onChange = {event => setQual(event.target.value)}
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
            click = 'edu'
            type = 'edu'
            data = {data}
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