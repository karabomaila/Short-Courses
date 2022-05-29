import { TextField } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const Notes = (props)=>{

    const onClose =()=>{
        props.setShowNotes(false);
    }

    return(
        <div style = {NotesMainStyle} data-testid = 'notes-div'>
             <div style = {nav}>
                <KeyboardArrowDownIcon sx = {{color: 'white', marginLeft: 2}} onClick = {onClose} data-testid = 'notes-icon'/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 11}}>Notes</p>
            </div>
            <TextField data-testid = "add-input"
                label="Notes"
                multiline
                fullWidth
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