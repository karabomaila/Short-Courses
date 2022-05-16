import { Button } from "@mui/material";
import React from "react";

const Event = (props) => {

    const onClick = ()=>{
        switch(props.click){
            case 'main':
                props.setModal('main');
            case 'quiz':
                props.setModal('quiz');

            default:
        }
    }

    return(
        <Button variant="outlined" 
        style={ButtonStyle}
        onClick = {onClick}>{props.title}</Button>
    )
}

const ButtonStyle = {
    color: 'white',
    width: '80%',
    margin: 12,
    borderColor: '#daa520'
}


export default Event;