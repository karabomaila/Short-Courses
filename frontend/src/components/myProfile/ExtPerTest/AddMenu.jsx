import React from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const AddMenu = (props)=>{

    const change = ()=>{
        if(props.click === 'skills'){
            props.skillVisible(true);
        }else if(props.click === 'books'){
            props.booksVisible(true);
        }else if(props.click === 'edu'){
            props.eduVisible(true);
        }else if(props.click === 'work'){
            props.workVisible(true);
        }
    }

    return(
        <div style = {AddStyle}>
            <div>
                <AddCircleRoundedIcon sx = {{color: 'black'}} onClick = {change}/>
            </div>
        </div>
    )
}

const AddStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
    marginBottom: 15
}

export default AddMenu;