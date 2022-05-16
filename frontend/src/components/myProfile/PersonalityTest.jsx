import React from 'react'
import InfoCard from './utils/InfoCard';
import analytics from './utils/analytics.png';
import remove from './utils/remove.png';
import PTestForm from './ExtPerTest/PTestForm';
import Footer from '../Footer/Footer';
import Quiz from './ExtPerTest/Quiz';


const PersonalityTest = (props)=>{
    return(
        <div style = {MainStyle}>
            <p style = {TextStyle}>PERSONALITY TEST</p>

            <Quiz />
            <PTestForm userID = {props.userID}/>

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
    height: '100vh',
    minHeight: '100vh',
    alignItems: 'center',
    background: '#edf4f5',
    
}

const InfoBar = {
    display: 'flex',
    flexDirection: 'column',
    //width: '80%',
    //minWidth: '80%',
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