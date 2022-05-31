import React from 'react';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import DefaultEvaluation from '../Evaluation/DefaultEvaluation';

const PlusHome = ()=>{
    return(
        <div style = {MainStyle}>
            <div style = {NavStyle}>
                <BubbleChartIcon fontSize='large' sx = {{color: 'white'}}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>STUDIO++</p>
            </div>

            <p style = {{fontWeight: 'bold'}}>Default Evaluation Form</p>
            <DefaultEvaluation />
            
            <Fab variant="extended" style = {FabStyle}>
                 <DoneIcon sx={{ mr: 1, color: '#007377'}} />
                 Use Default Form
            </Fab>

            <Fab variant="extended" style = {NFabStyle}>
                 <AddIcon sx={{ mr: 1, color: '#007377'}} />
                 Create New Form
            </Fab>
        </div>
    );
}

const MainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
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

const NFabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 85,
    left: 'auto',
    position: 'fixed',
    backgroundColor: 'white'
  };

const FabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: 'white'
  };

export default PlusHome;