import { Button } from '@mui/material';
import React from 'react';

const ViewHub = ()=>{
    return(
        <div style = {MainStyle}>
            <div style = {NavStyle}>
                <Button >Back</Button>
                <Button >Navigate</Button>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>Slide/Chapter Name</p>
            </div>
            
        </div>
    );
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const NavStyle = {
    display: 'flex',
    flexDirection: 'row',
    background: '#003b5c',
    alignItems: 'center',
    padding: 3
}

export default ViewHub;