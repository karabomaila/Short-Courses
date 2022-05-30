import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';

const ViewNotes = (props)=>{

    const onBack = ()=>{
        props.setView(false);
    }

    return(
        <div style = {MainStyle}>
            <div style = {ToolsStyle}>
                <div style = {{display: 'flex', marginRight: 7, marginLeft: 5}} onClick = {onBack}>
                    <ArrowBackIcon sx = {{color: 'white'}}/> Back
                </div>
                <div style = {{display: 'flex', marginRight: 5, marginLeft: 7}}>
                    <EditIcon sx = {{color: 'white'}}/> Edit
                </div>
            </div>

            <div style = {DisplayStyle}>
                <p style = {TextStyle}>{props.info.notes}</p>
            </div>
        </div>
    );
}

const MainStyle ={
    display: 'flex',
    flexDirection: 'column',
    background: '#edf4f5',
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    margin: 15
}

const ToolsStyle = {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 7,
    background: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35px',
    boxShadow: ' 0 4px 4px 0 rgba(0, 0, 0, 0.3)',
}

const DisplayStyle = {
    display: 'flex',
    height: '100%',
    width: '90%',
    flexDirection: 'column',
    overflowY: 'scroll',
    padding: 9,
    marginTop: 7,
    borderStyle:'ridge',
    marginLeft: 12,
}

const TextStyle = {
    fontFamily: 'monospace',
    color: 'gray'
}

export default ViewNotes;







