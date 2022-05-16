import { Button } from "@mui/material";
import React from "react";

const Event = (props) => {

    return(
        <Button variant="outlined" style={ButtonStyle}>{props.title}</Button>
    )
}

const ButtonStyle = {
    color: 'white',
    width: '80%',
    margin: 12,
    borderColor: '#daa520'
}


export default Event;