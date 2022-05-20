import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddMenu from './AddMenu';
import ViewSkills from './ViewSkills';
import { useState } from 'react';
import { db } from '../../firebase-config';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';

const Skills = (props)=>{
    const [newSkill, setNewSkill] = useState('');
    let data = props.data;

    const upload = async (newData) =>{

        let ref = doc(db, 'About', props.userID);
        await setDoc(ref, {skills: arrayUnion(newData)}, {merge: true});
    }


    const change = ()=>{
        props.setVisible(false);

        if(newSkill != ''){
            upload(newSkill);
            setNewSkill("");
        }
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
                value={newSkill}
                onChange = {event => setNewSkill(event.target.value)}
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