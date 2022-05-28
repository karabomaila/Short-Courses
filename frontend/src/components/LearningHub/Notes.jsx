import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const Notes = ()=>{


    return(
        <TextField data-testid = "add-input"
                    label="Notes"
                    multiline
                    fullWidth
                    rows={31}
                    variant="filled"
        />
    );
}

export default Notes;