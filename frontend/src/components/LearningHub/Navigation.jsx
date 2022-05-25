import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Slideshow from './Slideshow';


const Navigation = (props)=>{
    return(
        <div style = {NavMainStyle}>
            <p style ={{color: '#003b5c', fontWeight: 'bold', margin: 10}}>Navigation</p>
            {props.array.map((item, index)=>
                 <Slideshow 
                 key = {index}
                 slide = {item}
                 setOnDisplay = {props.setOnDisplay}
                 />
            )}
            <Button style = {{margin: 12}}variant='outlined'>Next Chapter</Button>
        </div>
    );
}

const NavMainStyle ={
    display: 'flex',
    flexDirection:'column',

}


export default Navigation;


