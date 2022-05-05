import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import React from "react";

const Action = (prop) => {

    const nav = useNavigate();
    const onClick = ()=>{
        nav(prop.p);
    }

    return(
        <Button variant="outlined" style={ButtonStyle} onClick = {onClick}>{prop.title}</Button>
    )
}

const ButtonStyle = {
    color: 'white',
    width: '80%',
    margin: 12,
    borderColor: 'white'
}


export default Action;