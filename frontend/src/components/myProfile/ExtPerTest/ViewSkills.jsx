import React from 'react';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const ViewSkills = (props)=>{
    return(
        <div style = {MainStyle}>
            <div style = {{display: 'flex'}}>
                <ArchitectureIcon sx = {{color: '#daa520'}}/>
            </div>
            <div style = {TextStyle}>
                <p style = {{margin: 0, fontSize: 15, fontFamily: 'monospace'}}>{props.skill}</p>
            </div>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    marginTop: 12,
    padding: 3,
    borderRadius: 9
    
}

const TextStyle = {
    display: 'flex',
    width: 'fitContent',
    flexDirection: 'column'
}


export default ViewSkills;