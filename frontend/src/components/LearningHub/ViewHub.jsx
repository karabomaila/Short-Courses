import { Button } from '@mui/material';
import React from 'react';
import ScienceIcon from '@mui/icons-material/Science';
import { useState } from 'react';
import Slide from './Slide';
import Fab from '@mui/material/Fab';
import NotesIcon from '@mui/icons-material/Notes';
import NavigationIcon from '@mui/icons-material/Navigation';
import Notes from './Notes';
import Navigation from './Navigation';
import axios from 'axios';
import { useContext } from 'react';
import { UserDataContext } from '../ContextAPI/UserDataContext';
import { useEffect } from 'react';

const ViewHub = (props)=>{

    const {user} = useContext(UserDataContext);
    const [onDisplay, setOnDisplay] = useState(props.slidesArray[0].content);

    const [showNav, setShowNav] = useState(false);
    const [showNotes, setShowNotes] = useState(false);

    const [myNotes, setMyNotes] = useState("");
    useEffect(()=>{
        getChapterNotes();
    }, []);

    const getChapterNotes = async()=>{
        await axios.post('/getChapterNotes', {userID: user.userID, courseID: props.courseID, chapterName: props.chapterName})
        .then((response)=>{
            setMyNotes(response.data);
        })
        .catch((err)=>{});
    }

    const onNav = ()=>{
        setShowNav(true);
    }

    const onNotes = ()=>{
        setShowNotes(true);
    }

    return(
        <div style = {MainStyle} data-testid = "viewhub-div">
            <div style = {NavStyle}>
                <ScienceIcon fontSize='large' sx = {{color: 'white'}}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>Learning Hub</p>
                <Button onClick = {()=> props.setView(false)} style = {{color: 'white'}}>Back</Button>
            </div>

            <div style = {Panel}>
                {showNav && 
                    <div style = {LeftPanel}>
                        <Navigation 
                        array = {props.slidesArray} 
                        setShowNav = {setShowNav}
                        setOnDisplay = {setOnDisplay}/>
                    </div>
                }

                <div style = {RightPanel}>
                    <Slide slidesArray = {onDisplay}/>
                </div>

                {showNotes && 
                    <div style = {LeftPanel}>
                    <Notes 
                    myNotes = {myNotes}
                    courseID = {props.courseID}
                    chapterName = {props.chapterName}
                    setMyNotes = {setMyNotes}
                    setShowNotes = {setShowNotes}/>
                    </div>
                }
            </div>

            {!showNav && 
                 <Fab variant="extended" style = {navFabStyle} onClick = {onNav}>
                 <NavigationIcon sx={{ mr: 1 , color: '#007377'}} />
                 Navigate
                  </Fab>
            }
           
            {!showNotes &&
                 <Fab variant="extended" style = {noteFabStyle} onClick = {onNotes}>
                 <NotesIcon sx={{ mr: 1, color: '#007377'}} />
                 Notes
                  </Fab>
            }
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
    background: '#007377',
    alignItems: 'center',
    padding: 3
}

const Panel ={
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
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
    marginLeft: 12,
    marginRight: 12
}

const LeftPanel ={
    display: 'flex',
    flexDirection: 'column',
    background: '#edf4f5',
    borderRadius: 12,
    flex: 1,
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.5)'
}


const navFabStyle = {
    margin: 0,
    top: 'auto',
    right:'auto',
    bottom: 20,
    left: 20,
    position: 'fixed',
    backgroundColor: 'white'
  };

  const noteFabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: 'white'
  };

export default ViewHub;