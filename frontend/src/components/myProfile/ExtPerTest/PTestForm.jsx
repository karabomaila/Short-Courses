import React from 'react';

const PTestForm = (props)=>{
    return(
        <div style = {MainStyle}>
            <p style = {{margin: 12, alignSelf: 'center'}}>Data belonging to {props.userID}</p>

            <h6 style = {H6Style}>Gender</h6>
            <h6 style = {H6Style}>Birthday</h6>
            <h6 style = {H6Style}>Interests and Skills</h6>
            <h6 style = {H6Style}>Favourite Books Read</h6>
            <h6 style = {H6Style}>Education</h6>
            <h6 style = {H6Style}>Work</h6>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    //alignItems: 'center',
    marginTop: 22,
    width: '90%',
    minWidth: '90%',
    borderRadius: 9,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const H6Style = {
    fontWeight: 'bold',
    marginLeft: 15
}

export default PTestForm;