import { TextField } from '@mui/material';
import React from 'react';


const EvaluationFeedback=(props)=>{

    return(
        <div style = {MainStyle}>
            <p style = {TextStyle}>Describe how you feel about the course</p>
            <TextField 
            multiline
            label ='Feedback'
            rows={10}
            />
        </div>
    );
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15
}

const TextStyle ={
    marginTop: 11,
    marginBottom: 11,
   

}

export default EvaluationFeedback;