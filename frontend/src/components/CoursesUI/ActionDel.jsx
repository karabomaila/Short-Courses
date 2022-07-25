import { Button } from '@mui/material';
import React from 'react';

const ActionDel = (props)=>{

    const onDelete = ()=>{
        props.setOpenDel(true);
        props.setCourseDelID(props.courseID);
    }

    return(
        <Button 
        onClick={onDelete}
        variant = 'outlined' 
        style = {Style}>{props.title}</Button>
    )
}

const Style = {
    margin: 5,
    color: 'red',
    //background: 'red',
    borderColor: 'red'
}

export default ActionDel;