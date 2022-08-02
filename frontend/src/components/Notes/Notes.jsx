import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ViewNotes from './ViewNotes';
import ShowNotes from './ShowNotes';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../ContextAPI/UserDataContext';
import BasicLoader from '../Loaders/BasicLoader';

const Notes =(props)=>{
    const [notes, setNotes] = useState([]);
    let flag = false;

    const [loader, setLoader] = useState(true);

    const {user} = useContext(UserDataContext);

    useEffect(()=>{
        getAllNotes();
    }, []);

    const getAllNotes = async()=>{
        await axios.post('getAllNotes', {userID: user.userID})
        .then((response)=>{
            setLoader(false);
            setNotes(response.data);
        })
        .catch((err)=>{console.log(err)});
    }


    return(
        <div data-testid = 'nts-div' style = {MainStyle}>
            <p style = {{color: 'black', fontWeight: 'bold', alignSelf: 'center', margin: 15}}>NOTES</p>
            <ShowNotes notes = {notes} flag = {flag}/>
            {loader ?
                <BasicLoader /> : null
            }
        </div>
    )
}
const MainStyle ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#edf4f5',
    height: '100vh',
    overflowY: 'scroll'
}




export default Notes;