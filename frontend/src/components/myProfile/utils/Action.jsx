import { Button } from "@mui/material";
import React from "react";

const Action = (prop) => {

    const onClick = ()=>{
        switch (prop.click){
            case 'ExposeView':
                prop.setView('ExposeView');
                break;
            case 'PersonalityTest':
                prop.setView('PersonalityTest');
                break;
            default:

        }
    }

    return(
        <Button variant="outlined" 
        style={{color: 'white',
        width: '80%',
        margin: 12,
        borderColor: 'white'}} 
        onClick = {onClick} 
        >{prop.title}</Button>
    )
}

const ButtonStyle = {
    color: 'white',
    width: '80%',
    margin: 12,
    borderColor: 'white'
}


export default Action;