import React from 'react';
import { useState } from 'react';
import Event from './Event';

const Quiz = (props)=>{

    const Questions = ['q1', 'q2'];
    const [index, setIndex] = useState(0);
    const MAX_QS = Questions.length;

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
                01/99

                <div style = {QStyle}>
                    <p>{Questions[index]}</p>
                </div>
    
                <div style = {EventStyle}>
                    <Event title = 'Yes' 
                    click = 'yes' 
                    size = {MAX_QS}
                    setModal = {props.setModal}
                    setIndex = {setIndex} 
                    index = {index}/>
                    <Event title = 'Neutral' 
                    click = 'neutral' 
                    size = {MAX_QS}
                    setModal = {props.setModal}
                    setIndex = {setIndex} 
                    index = {index}/>
                    <Event title = 'No' 
                    click = 'no' 
                    size = {MAX_QS}
                    setModal = {props.setModal}
                    setIndex = {setIndex} 
                    index = {index}/>
                </div>
            </div>
        )
    }else if(props.modal === 'view'){
        return(
            <div style = {MainStyle}>
                <div style = {QStyle}>
                    Questions here..
                </div>
                <div style = {EventStyle}>
                    <Event title = 'Done' 
                    click = 'main' 
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

export default Quiz