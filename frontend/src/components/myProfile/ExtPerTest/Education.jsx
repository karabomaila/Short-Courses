import AddMenu from './AddMenu';
import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';
import { db } from '../../firebase-config';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';

const Education = (props)=>{

    let data = props.data;
    const [inst, setInst] = useState('');
    const [qual, setQual] = useState('');
    const [year1, setYear1] = useState('');
    const [year2, setYear2] = useState('');
   

    const upload = async (newData)=>{
        let ref = doc(db, 'About', props.userID);
        await setDoc(ref, {education: arrayUnion(newData)}, {merge: true});
    }


    const change = ()=>{
        props.setVisible(false);

        if(inst != '' && qual != '' && year1 != ''){
            upload({institution: inst, qualification: qual, years: year1 + " - " + year2});
            setInst('');
            setQual('');
            setYear1('');
            setYear2('');

        }
    }

    if(props.visible){
        return(
            <div style = {MainStyle} data-testid = "test-edu-div">
                <div style = {ClickStyle}>
                <CheckCircleOutlineIcon data-testid = "test-edu-icon" sx = {{color: 'green'}} onClick = {change}/>
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