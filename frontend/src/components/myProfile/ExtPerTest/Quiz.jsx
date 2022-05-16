import React from 'react';
import Event from './Event';

const Quiz = ()=>{
    return(
        <div style = {MainStyle}>
            <p style = {{fontWeight: 'bold', color: 'white', alignSelf: 'center'}}>Personality Test</p>
            <p style = {{color: 'white', alignSelf: 'center'}}>Help us know more about you by taking the peronality test quiz.</p>
            <div style = {EventStyle}>
                <Event title = 'Take Quiz'/>
                <Event title = 'View Prev'/>
            </div>
        </div>
    )
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
}

export default Quiz