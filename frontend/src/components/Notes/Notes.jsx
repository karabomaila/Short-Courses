import React from 'react'
import { useState } from 'react';
import { db } from '../firebase-config';
import {getDoc, doc} from 'firebase/firestore';
import { useEffect } from 'react';
import ViewNotes from './ViewNotes';
import ShowNotes from './ShowNotes';

const Notes =(props)=>{
    const [view, setView] = useState(false);
    const [notes, setNotes] = useState([]);
    const [info, setInfo] = useState({});
    let flag = false;

    useEffect(() => {
        
        const getNotes = async ()=>{
            const docRef = doc(db, "Notes", props.userID);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setNotes(docSnap.data().courses);
                flag = true;
            }
        }
        getNotes();
    }, [])

    return(
        <div data-testid = 'nts-div' style = {MainStyle}>
            {!view &&
            <p style = {{color: 'black', fontWeight: 'bold', alignSelf: 'center', margin: 15}}>NOTES</p>
            }
            {!view &&
                <ShowNotes notes = {notes} setView = {setView} setInfo = {setInfo} flag = {flag}/>
            }

            {view &&
            <ViewNotes setView = {setView} info = {info}/>
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