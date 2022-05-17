import React from 'react'
import InfoCard from './utils/InfoCard';
import analytics from './utils/analytics.png';
import remove from './utils/remove.png';
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
        <div style = {MainStyle}>
            <p style = {TextStyle}>PERSONALITY TEST</p>
            <Quiz modal = {modal} 
            setModal = {setModal}
            questions = {questions}/>
            <PTestForm userID = {props.userID}/>

            <div style = {InfoBar}>
                <InfoCard image = {analytics} title = 'Why We Collect Data?'/>
                <InfoCard image = {remove} title = 'Delete My Data'/>
            </div>

            
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