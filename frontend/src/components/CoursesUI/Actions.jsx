import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Actions = (props)=>{
    const navigate = useNavigate();
    

    const onClick = ()=>{
        if(props.click == 'view'){
            navigate(`/CreateCourse/${props.name}`, {
                state: {
                  student: false,
                  user: props.user,
                  crs_id: props.crs_id,
                },
              });
        }
    }

    return(
        <Button variant = 'outlined' style = {Style} onClick = {onClick}>{props.title}</Button>
    )
}

const Style = {
    margin: 5,
    color: '#003b5c',
    borderColor: '#daa520'
}

export default Actions;