import React from 'react'
import InfoCard from './utils/InfoCard';
import analytics from './utils/analytics.png';
import remove from './utils/remove.png';


const PersonalityTest = (props)=>{
    return(
        <div style = {MainStyle}>
            <p style = {TextStyle}>PERSONALITY TEST</p>

            <div style = {InfoBar}>
                <InfoCard image = {analytics} title = 'Why We Collect Data?'/>
                <InfoCard image = {remove} title = 'Delete My Data'/>
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
    display: 'flex',
    width: '80%',
    minWidth: '80%',
    //background: 'yellow',
    justifyContent: 'center',

}

const TextStyle = {
    alignSelf: 'center', 
    fontWeight: 'bold'
}

const InfoText = {
    marginLeft: 12,
    marginRight: 12
}

export default PersonalityTest;