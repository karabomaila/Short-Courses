import { Button } from "@mui/material";
import React from "react";

const Action = (prop) => {

    const onClick = ()=>{
        switch (prop.click){
            case 'ExposeView':
                prop.setView('ExposeView');
                break;
            case 'Notes':
                prop.setView('Notes');
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
        data-testid={prop.click} 
        >{prop.title}</Button>
    )
}

export default Action;