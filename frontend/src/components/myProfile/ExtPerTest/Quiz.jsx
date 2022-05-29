import React from 'react';
import Event from './Event';

const Quiz = (props)=>{
    return(
        <div style = {MainStyle}>
            <p style = {{fontWeight:"bold", color:'white', alignSelf: 'center'}}>Tests</p>
            <p style = {{color:'white', alignSelf: 'center'}}>Please take the tests to improve your experience across the app.</p>
            <div style = {{display: 'flex'}}>
                <Event title = "Personality Test" buttonStyle = {EventStyle}/>
                <Event title = "Test2" buttonStyle = {EventStyle}/>
                <Event title = "Test3" buttonStyle = {EventStyle}/>
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
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center'
}


export default Quiz