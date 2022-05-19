import React from 'react';
import { useState } from 'react';
import {db} from '../../firebase-config';
import {doc, getDoc} from 'firebase/firestore';
import { useEffect } from 'react';
import Event from './Event';

const Quiz = (props)=>{
    const userID = props.userID;
    const Questions = props.questions;
    const [currAnswers, setCurrAnswers] = useState([]);
    const [index, setIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
    const [test, setTest] = useState([]);
    const MAX_QS = Questions.length;
    const MAX_TEST = test.length;

    useEffect(() => {
        const getTest = async () =>{
            const testRef = doc(db, "About", props.userID);
            const testData = await getDoc(testRef);
            let fields = testData._document.data.value.mapValue.fields;
            setTest(fields.test.arrayValue.values);
        }
        
        getTest();
       
    }, [])

    if(props.modal === 'main'){
    return(
        <div style = {MainStyle}>
            <p style = {{fontWeight: 'bold', color: 'white', alignSelf: 'center'}}>Personality Test</p>
            <p style = {{color: 'white', alignSelf: 'center'}}>Help us know more about you by taking the peronality test quiz.</p>
            <div style = {EventStyle}>
                <Event title = 'Take Quiz' 
                click = 'quiz' 
                setModal = {props.setModal}/>
                <Event title = 'View Prev' 
                click = 'view' 
                setModal = {props.setModal}/>
            </div>
        </div>
    )
    }else if(props.modal === 'quiz'){
        return(
            <div style = {MainStyle}>
                <p style = {{color: 'white', fontWeight: 'bold'}}>Question {index + 1} of {MAX_QS}</p>
                <div style = {QStyle}>
                    <p>{Questions[index].stringValue}</p>
                </div>
    
                <div style = {EventStyle}>
                    <Event title = 'Yes' 
                    click = 'yes' 
                    size = {MAX_QS}
                    userID = {userID}
                    question = {Questions[index].stringValue}
                    answer = {currAnswers}
                    setAnswer= {setCurrAnswers}
                    setModal = {props.setModal}
                    setIndex = {setIndex} 
                    index = {index}/>
                    <Event title = 'Not Sure' 
                    click = 'nsure' 
                    size = {MAX_QS}
                    userID = {userID}
                    question = {Questions[index].stringValue}
                    answer = {currAnswers}
                    setAnswer= {setCurrAnswers}
                    setModal = {props.setModal}
                    setIndex = {setIndex} 
                    index = {index}/>
                    <Event title = 'No' 
                    click = 'no' 
                    size = {MAX_QS}
                    userID = {userID}
                    question = {Questions[index].stringValue}
                    answer = {currAnswers}
                    setAnswer= {setCurrAnswers}
                    setModal = {props.setModal}
                    setIndex = {setIndex} 
                    index = {index}/>
                </div>
            </div>
        )
    }else if(props.modal === 'view'){
        return(
            <div style = {MainStyle}>
                <div style = {AStyle}>
                    <p>Q: {test[nextIndex].mapValue.fields.Q.stringValue}</p>
                    <p>A: {test[nextIndex].mapValue.fields.A.stringValue}</p>
                </div>
                <div style = {EventStyle}>
                    <Event title = 'Done' 
                        click = 'main' 
                        setNextIndex = {setNextIndex}
                        setModal = {props.setModal}/>
                     <Event title = 'Next'
                        nextIndex = {nextIndex}
                        setNextIndex = {setNextIndex}
                        len = {MAX_TEST}
                        click = 'next' 
                        setModal = {props.setModal}/>
                </div>
            </div>
        )
    }
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 22,
    width: '90%',
    minWidth: '90%',
    padding: 12,
    borderRadius: 9,
    background: '#003b5c',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const EventStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center'
}

const QStyle = {
    display: 'flex',
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#daa520',
    height: '150px',
    minHeight: '150px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    color: 'white',
    fontWeight: 'bold'

}

const AStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#daa520',
    height: '150px',
    minHeight: '150px',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 12,
    color: 'white',
    fontWeight: 'bold'

}

export default Quiz