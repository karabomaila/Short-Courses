import React from 'react'
import PTestForm from './ExtPerTest/PTestForm';
import {db} from '../firebase-config';
import {doc, getDoc} from 'firebase/firestore';
import {useState} from 'react';
import Quiz from './ExtPerTest/Quiz';
import { useEffect } from 'react';


const PersonalityTest = (props)=>{
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

    return(
        <div style = {MainStyle} data-testid = "pers-div">
            <p style = {TextStyle} data-testid = 'pers-head'>PERSONALITY TEST</p>
            <Quiz modal = {modal} 
            setModal = {setModal}
            userID = {props.userID}
            questions = {questions}/>
            <PTestForm userID = {props.userID}/>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    minHeight: '100vh',
    alignItems: 'center',
    background: '#edf4f5',
    overflowY: 'scroll'
    
}

const InfoBar = {
    display: 'flex',
    flexDirection: 'column',
    //width: '80%',
    //minWidth: '80%',
    //background: 'yellow',
    justifyContent: 'center',

}

const TextStyle = {
    alignSelf: 'center', 
    fontWeight: 'bold'
}

const InfoText = {
    marginLeft: 12,
    marginRight: 12
}

export default PersonalityTest;