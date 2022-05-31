import React from 'react';
import Checkbox from '@mui/material/Checkbox';


const EvaluationCheckbox=(props)=>{
    return(
        <div style = {MainStyle}>
            <p style = {TextStyle}>{props.content}</p>
            <Checkbox sx = {{color: "teal"}} />
        </div>
    );
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'row'
}

const TextStyle ={
    marginTop: 11,
    marginBottom: 1

}


export default EvaluationCheckbox;