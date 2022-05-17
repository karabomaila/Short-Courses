import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

const EducationView = (props)=>{
    return(
        <div style = {MainStyle}>
            <div style = {{display: 'flex'}}>
                <SchoolIcon sx = {{color: '#daa520'}}/>
            </div>
            <div style = {TextStyle}>
                <p style = {{fontWeight: 'bold', margin: 0, fontSize: 15, fontFamily: 'monospace'}}>{props.school.name}</p>
                <p style = {{margin: 0, fontSize: 15}}>{props.school.qualification}</p>
                <p style = {{margin: 0, fontSize: 12}}>{props.school.years}</p>
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

export default EducationView;