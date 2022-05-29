import { Button } from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slideshow from './Slideshow';


const Navigation = (props)=>{

    const onClose = ()=>{
        props.setShowNav(false);
    }
    return(
        <div style = {NavMainStyle} data-testid = 'nav-div'>
            <div style = {nav}>
                <KeyboardArrowDownIcon sx = {{color: 'white', marginLeft: 2}} onClick = {onClose} data-testid = 'nav-icon'/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 11}}>Navigation Pane</p>
            </div>
           
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

const nav = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#007377',
    marginBottom: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
}


export default Navigation;