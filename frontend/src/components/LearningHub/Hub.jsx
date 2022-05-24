import { Button } from '@mui/material';
import React from 'react';
import ScienceIcon from '@mui/icons-material/Science';
import {db} from '../firebase-config';
import {collection, where, query, getDocs} from 'firebase/firestore';
import { useState } from 'react';
import ViewHub from './ViewHub';
import Chapter from './Chapter'
import { useEffect } from 'react';

const Hub = ()=>{
    const [chaptersArray, setChaptersArray] = useState([]);
    const [courseName, setCourseName] = useState('');
    const [getIndex, setGetIndex] = useState(0);
    const [view, setView] = useState(false);

    useEffect(() => {
        const getData = async ()=>{
            const q = query(collection(db, "slides"), where("courseID", "==", "23552855Noe8"));
            const data = await getDocs(q);
            data.forEach((doc) => {
                setCourseName(doc.data().name);
                setChaptersArray(doc.data().content);
              });
          
        }
        getData();
    }, [])

    if(view){
        // pass in props for the chapter wanna view... 
        return(<ViewHub setView = {setView} slidesArray = {chaptersArray[getIndex].slides}/>);
    }

    return(
        <div style = {MainStyle}>
            <div style = {NavStyle}>
                <ScienceIcon fontSize='large' sx = {{color: 'white'}}/>
                <p style ={{color: 'white', fontWeight: 'bold', margin: 10}}>Learning Hub</p>
            </div>
            <p style ={{color: 'black', fontWeight: 'bold', marginBottom: 15, alignSelf: 'center'}} >{courseName}</p>
            <div style = {ShowStyle}>
                {chaptersArray.map((item, index)=>
                    <Chapter 
                        index = {index}
                        key = {index}
                        data = {item}
                        setGetIndex = {setGetIndex}
                        setView = {setView}
                    />
                )}
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
    marginBottom: 12,
    padding: 3
}

const ShowStyle ={
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignSelf: 'center'
}

export default Hub;