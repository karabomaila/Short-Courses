import { Button } from '@mui/material';
import React from 'react';
import GetInfo from '../AboutCourse/GetInfo';
import { useNavigate } from 'react-router-dom';


const Actions = (props)=>{
    const navigate = useNavigate();
    
    const onClick = ()=>{
        switch (props.click){
            case 'view':
                navigate(`/CreateCourse/${props.name}`, {
                    state: {
                      student: false,
                      user: props.user,
                      crs_id: props.crs_id,
                    },
                  });
            
            case 'info':
                let getInfo = new GetInfo(props.info, props.crs_id);
                props.setDataObject(getInfo.PullData());
                props.setOpenAbout(true);
            
            case 'edit':
                // console.log(props)
                navigate('/CreateCourse',{ state: { user: props.user,courseInfo:props } });
            case 'learn':
                navigate('/Hub');
            default:
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