import React from 'react';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { Button } from '@mui/material';

const PlusHome = ()=>{
    return(
        <div style = {MainStyle}>
            <div style = {NavStyle}>
                <BubbleChartIcon fontSize='large' sx = {{color: 'white'}}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>STUDIO++</p>
            </div>


            <div style = {EvalStyle}>
            <p style = {{fontWeight:"bold", color:'#003b5c', alignSelf: 'center'}}>EVALUATION</p>
            <div style = {{display: 'flex', justifyContent: 'center'}}>
                <Button >Use Default</Button>
                <Button >Create New Form</Button>
            </div>
            
        </div>
        </div>
    );
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const EvalStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: 22,
    width: '70%',
    minWidth: '70%',
    padding: 12,
    borderRadius: 9,
    background: 'white',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}

const NavStyle = {
    display: 'flex',
    flexDirection: 'row',
    background: '#007377',
    alignItems: 'center',
    marginBottom: 12,
    padding: 3,
    width: '100%'
}

export default PlusHome;