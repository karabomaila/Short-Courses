import React from 'react';
import Slider from '@mui/material/Slider';

const EvaluationSlider=(props)=>{

    return(
        <div style = {MainStyle}>
            <p style = {TextStyle}>{props.content}</p>
            <Slider
                defaultValue={30}
                sx = {{color: 'teal', marginBottom: 1}}
                size = 'medium'
            />
        </div>
    );
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column'
}

const TextStyle ={
    marginTop: 11,
    marginBottom: 1

}

export default EvaluationSlider;