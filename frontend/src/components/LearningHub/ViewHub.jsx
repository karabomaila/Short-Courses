import { Button } from '@mui/material';
import React from 'react';
import ScienceIcon from '@mui/icons-material/Science';
import { useState } from 'react';
import Notes from './Notes';
import Slide from './Slide';

const ViewHub = (props)=>{

    // user must be able to switch between slides.... - line 39....
    const [panelButton, setPanelButton] = useState('Navigate');

    const onPanelChange = ()=>{
        if(panelButton == 'Navigate'){
            setPanelButton('Notes');
        }else{
            setPanelButton('Navigate');
        }
       
    }

    return(
        <div style = {MainStyle}>
            <div style = {NavStyle}>
                <ScienceIcon fontSize='large' sx = {{color: 'white'}}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>Learning Hub</p>
                <Button onClick = {()=> props.setView(false)}>Back</Button>
                <Button onClick = {onPanelChange}>{panelButton}</Button>
        
            </div>

            <div style = {Panel}>
                <div style = {LeftPanel}>
                   <Notes/>
                </div>
                <div style = {RightPanel}>
                    <Slide slidesArray = {props.slidesArray[0].content}/>
                </div>
            </div>

            
        </div>
    );
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const NavStyle = {
    display: 'flex',
    flexDirection: 'row',
    background: '#003b5c',
    alignItems: 'center',
    padding: 3
}

const Panel ={
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 15,
    //width: '100%',
    height: '90vh'
}

const RightPanel ={
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    flex: 3.5,
    marginRight: 3,
    padding: 9,
    borderStyle:'ridge',
    marginLeft: 12
}

const LeftPanel ={
    display: 'flex',
    flexDirection: 'column',
    background: '#edf4f5',
    borderRadius: 12,
    flex: 1,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

export default ViewHub;