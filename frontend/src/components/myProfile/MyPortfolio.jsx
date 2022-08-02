import Menu from './Menu.jsx';
import Display from './Display.jsx';
import {useState, useEffect} from 'react';
import { db } from '../firebase-config.jsx';
import React from "react";
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../ContextAPI/UserDataContext.js';

const MyPortfolio = () =>{

    const {user} = useContext(UserDataContext);
    const [view, setView] = useState('ExposeView');
    const [profile, setProfile] = useState({});

    
    return(
        <div data-testid = 'port-div' style = {MyPortfolioStyle}>
           
            <div className='pin' style = {LeftPanelStyle} >
                <Menu 
                myCourses = {profile.created}
                enrolled = {profile.enrolled}
                name = {user.name}
                view = {view}
                setView = {setView}
                />
            </div>
            <div style = {RightPanelStyle}>
                <Display 
                view = {view}
                setView = {setView}
                userID = {profile.userID} 
                userName = {user.name}
                bio = {profile.bio}/>
            </div>
        </div>
    )
}

const MyPortfolioStyle = {
    display: 'flex',
    flexDirection: 'row', 
    background: 'gray', 
    height: '100vh',
    minHeight: '100vh'

}

const LeftPanelStyle = {
    flex: 1,
    display: 'flex',
    background: 'gray',
    height: '100vh',
    minHeight: '100vh'
    //position: 'fixed'
}

const RightPanelStyle = {
    flex: 3.5,
    height: '100vh',
    //minHeight: '100vh',
    background: 'white',
    overflowY: 'scroll'
}
export default MyPortfolio;