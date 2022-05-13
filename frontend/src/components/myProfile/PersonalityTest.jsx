import React from 'react'

const PersonalityTest = (props)=>{
    return(
        <div style = {MainStyle}>
            <p style = {TextStyle} data-testid = 'pers-text1'>PERSONALITY TEST</p>

            <div style = {InfoBar}>

            </div>
        </div>
    )
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#edf4f5',
    height: '100vh',
}

const InfoBar = {

}

const TextStyle = {
    alignSelf: 'center', 
    fontWeight: 'bold'
}

export default PersonalityTest;