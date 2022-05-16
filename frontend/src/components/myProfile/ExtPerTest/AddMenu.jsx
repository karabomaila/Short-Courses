import React from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const AddMenu = ()=>{
    return(
        <div style = {AddStyle}>
            <div>
                <AddCircleRoundedIcon sx = {{color: 'black'}}/>
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