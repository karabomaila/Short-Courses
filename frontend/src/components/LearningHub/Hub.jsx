import React from 'react';
import ScienceIcon from '@mui/icons-material/Science';
import {db} from '../firebase-config';
import {useLocation} from 'react-router-dom';
import {collection, where, query, getDocs, getDoc, doc, setDoc} from 'firebase/firestore';
import { useState } from 'react';
import ViewHub from './ViewHub';
import Chapter from './Chapter'
import { useEffect } from 'react';

const Hub = ()=>{
    const {state} = useLocation();
    const [chaptersArray, setChaptersArray] = useState([]);
    const [courseName, setCourseName] = useState('');
    const [getIndex, setGetIndex] = useState(0);
    const [view, setView] = useState(false);

    const userID = state.userID;
    const courseID = state.courseID;
    
    const initNotes = {
        courses: [{courseID: courseID, chapters: new Array()}]
    }

    useEffect(() => {
        const getData = async ()=>{
            const q = query(collection(db, "slides"), where("courseID", "==", courseID));
            const data = await getDocs(q);
            data.forEach((doc) => {
                setCourseName(doc.data().name);
                setChaptersArray(doc.data().content);
              });
          
        }

        const getNotes = async ()=>{
            const docRef = doc(db, "Notes", userID);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            // create a new collection... 
            // doc.data() will be undefined in this case
            await setDoc(doc(db, "Notes", userID), initNotes);
            console.log("No such document!");
            }
        }
        getData();
        getNotes();
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
    background: '#007377',
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