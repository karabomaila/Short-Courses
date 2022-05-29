import { TextField } from '@mui/material';
import { db } from '../firebase-config.jsx';
import {doc, setDoc, getDoc} from 'firebase/firestore';
import React from "react";
import PTestForm from './ExtPerTest/PTestForm';
import {useState} from 'react';
import Quiz from './ExtPerTest/Quiz';
import { useEffect } from 'react';


const ExposeView = (props) =>{

    const [questions, setQuestions] = useState([]);
    const [modal, setModal] = useState('main');

    useEffect(() => {
        const getQuestions = async ()=>{
           let ref = doc(db, 'GlobalData', 'Quiz');
           const temp = await getDoc(ref);
           setQuestions(temp._document.data.value.mapValue.fields.Questions.arrayValue.values);
        }
        getQuestions();
    }, [])

    
    const updateBio = async () =>{
        let ref = doc(db, 'About', props.userID);
        setDoc(ref, {bio: props.bio}, {merge: true});
    }

    const onChange = event => {
        props.setBio(event.target.value);
        updateBio();
    }
   
    return(
        <div style = {ExposeViewStyle}>
            <p style = {TextStyle} data-testid = 'exp-text1'>EXPOSE-VIEW</p>
            <div style = {BioDiv}>
            <TextField 
            label="Biography" 
            multiline fullWidth 
            value = {props.bio}
            inputProps={{ "data-testid": "exp-test-bio" }}
            onChange = {onChange}/>
            </div>
           
            <Quiz modal = {modal} 
            setModal = {setModal}
            userID = {props.userID}
            questions = {questions}/>
            <PTestForm userID = {props.userID}/>
        </div>
    )
}


const ExposeViewStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#edf4f5',
    height: '100vh',
    overflowY: 'scroll'
}

const BioDiv = {
    width: '90%', 
    margin: 20
}

const TextStyle = {
    marginTop: 15,
    alignSelf: 'center', 
    fontWeight: 'bold'
}



export default ExposeView;