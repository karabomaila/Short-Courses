import { Button } from "@mui/material";
import React from "react";

const Event = (props) => {

    const onClick = ()=>{
        if(props.click === 'main'){
            props.setModal('main');
        }else if(props.click === 'quiz'){
            props.setModal('quiz');
        }else if(props.click === 'view'){
            props.setModal('view');
        }else if(props.click === 'yes' || props.click === 'neutral' || props.click === 'no'){
            let int = props.index + 1;
            if(int < props.size){
                props.setIndex(int);
            }else{
                props.setIndex(0);
                props.setModal('main');
            }
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