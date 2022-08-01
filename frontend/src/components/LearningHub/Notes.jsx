import { TextField } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../ContextAPI/UserDataContext';

const Notes = (props)=>{

    const {user} = useContext(UserDataContext);

    const onClose =()=>{
        props.setShowNotes(false);
    }

    const onSave = ()=>{
        saveNotes();
    }

    const saveNotes = async()=>{
        await axios.post("/saveNotes", {notes: props.myNotes, userID: user.userID, courseID: props.courseID, chapterName: props.chapterName})
        .then((response)=>{})
        .catch((err)=>{console.log(err)})
    }

    return(
        <div style = {NotesMainStyle} data-testid = 'notes-div'>
             <div style = {nav}>
                <KeyboardArrowDownIcon sx = {{color: 'white', marginLeft: 2}} onClick = {onClose} data-testid = 'notes-icon'/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 11}}>Notes</p>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 11, padding: 3, borderRadius: 8, cursor: 'pointer', background: 'white', color: '#daa520'}} onClick = {onSave}>SAVE</p>
            </div>
            <TextField data-testid = "add-input"
                label="Notes"
                multiline
                fullWidth
                value={props.myNotes}
                onChange = {(event)=> props.setMyNotes(event.target.value)}
                rows={29}
                variant="filled"
            />
        </div>
      
    );
}

const NotesMainStyle ={
    display: 'flex',
    flexDirection:'column',

}

const nav = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#007377',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
}

export default Notes;