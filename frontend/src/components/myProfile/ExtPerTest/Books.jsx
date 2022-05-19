import AddMenu from './AddMenu';
import React from 'react';
import { TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DisplayBooks from './DisplayBooks';
import { useState } from 'react';
import { db } from '../../firebase-config';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';

const Books = (props)=>{

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const data = [{title: 'Book1', author: 'Author1'}, {title: 'Book2', author: 'Author2'}];

    const upload = async (newData)=>{
        let ref = doc(db, 'About', props.userID);
        await setDoc(ref, {books: arrayUnion(newData)}, {merge: true});
    }

    const change = ()=>{
        props.setVisible(false);

        if(author != '' && title != ''){
            upload({title: title, author: author});
            setTitle('');
            setAuthor('');
        }
    }


    if(props.visible){
        return(
            <div style = {MainStyle}>
                <div style = {ClickStyle}>
                <CheckCircleOutlineIcon sx = {{color: 'green'}} onClick = {change}/>
                </div>
                <div style = {InputStyle}>
                <TextField width = '30%' 
                label = 'Book Title' 
                value={title}
                onChange = {event => setTitle(event.target.value)}
                variant='standard'/>
                </div>
                <div style = {InputStyle}>
                <TextField label = 'Book Author' 
                 value={author}
                 onChange = {event => setAuthor(event.target.value)}
                variant='standard'/>
                </div>
                
            </div>
        )
    }else{
        return(
            <AddMenu 
            click = 'books'
            type = 'books'
            data = {data}
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