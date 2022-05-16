import React from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const AddMenu = (props)=>{

    const change = ()=>{
        props.skillVisible(true);
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