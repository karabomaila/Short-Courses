import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const EvaluationRadio=(props)=>{

    return(
        <div style = {MainStyle}>
            <p style = {TextStyle}>{props.content}</p>
            <RadioGroup >
                <FormControlLabel value={props.array[0]} control={<Radio sx = {{color: 'teal'}}/>} label={props.array[0]} />
                    <FormControlLabel value={props.array[1]}  control={<Radio sx = {{color: 'teal'}}/>} label={props.array[1]} />
                <FormControlLabel value={props.array[2]} control={<Radio sx = {{color: 'teal'}}/>} label={props.array[2]} />
        </RadioGroup>
        </div>
    );
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column'
}

const TextStyle ={
    marginTop: 11,
    marginBottom: 1,
    fontWeight: 'bold'

}

export default EvaluationRadio;