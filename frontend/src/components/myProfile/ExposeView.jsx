import { TextField } from '@mui/material';
import React from "react";
import PTestForm from './ExtPerTest/PTestForm';
import {useState} from 'react';
import Quiz from './ExtPerTest/Quiz';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../ContextAPI/UserDataContext';


const ExposeView = (props) =>{

    const {user} = useContext(UserDataContext);
    const [bio, setBio] = useState(props.bio);
    const [modal, setModal] = useState('main');

    const onChange = async(event) => {
        const text = event.target.value;
        setBio(text);
        axios.post("/updateBio", {userID: user.userID, newBio: text})
        .then(()=> {})
        .catch((err)=>{console.log(err)});
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