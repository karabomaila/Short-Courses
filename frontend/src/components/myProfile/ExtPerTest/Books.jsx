import AddMenu from './AddMenu';
import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DisplayBooks from './DisplayBooks';

const Books = (props)=>{

    const change = ()=>{
        props.setVisible(false);
    }

    if(props.visible){
        return(
            <div style = {MainStyle}>
                <div style = {InputStyle}>
                <TextField width = '30%' label = 'Book Title' variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Book Author' variant='standard'/>
                </div>
                <div style = {ClickStyle}>
                <CheckCircleOutlineIcon sx = {{color: 'black'}} onClick = {change}/>
                </div>
            </div>
        )
    }else{
        return(
            <AddMenu 
            click = 'books'
            display = {DisplayBooks}
            booksVisible = {props.setVisible}/>
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

export default Books;