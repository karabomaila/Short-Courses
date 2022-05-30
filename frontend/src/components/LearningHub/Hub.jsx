import React from 'react';
import ScienceIcon from '@mui/icons-material/Science';
import {db} from '../firebase-config';
import {useLocation} from 'react-router-dom';
import {collection, where, query, getDocs, getDoc, 
                    doc, setDoc, arrayUnion, updateDoc} from 'firebase/firestore';
import { useState } from 'react';
import ViewHub from './ViewHub';
import Chapter from './Chapter'
import { useEffect } from 'react';

const Hub = ()=>{
    const {state} = useLocation();
    const [chaptersArray, setChaptersArray] = useState([]);
    const [getIndex, setGetIndex] = useState(0);
    const [view, setView] = useState(false);

    const userID = state.userID;
    const courseID = state.courseID;
    const courseName = state.courseName;
    let notes = new Array();
    
    const initNotes = {
        courses: [{courseID: courseID, courseName: courseName, notes: 'Write Something...'}]
    }

    useEffect(() => {
        const getData = async ()=>{
            const q = query(collection(db, "slides"), where("courseID", "==", courseID));
            const data = await getDocs(q);
            data.forEach((doc) => {
                setChaptersArray(doc.data().content);
              });
          
        }

        const getNotes = async ()=>{
            const docRef = doc(db, "Notes", userID);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                //check if the current course is there...
                let flag = true;
                notes = docSnap.data().courses;
                for(let i = 0; i < notes.length; i++){
                    if(notes[i].courseID === courseID){
                        // The course has notes... 
                        flag = false;
                        break;
                    }
                }

                if(flag){
                    // when the course has no notes...
                    await updateDoc(docRef, 
                        {courses: arrayUnion({courseID: courseID, courseName: courseName, notes: 'Write Something...'})});
                }

            } else {
                // create a new collection... 
                // doc.data() will be undefined in this case
                await setDoc(doc(db, "Notes", userID), initNotes);
            }
        }

        getData();
        getNotes();
    }, [])

    if(view){
        // pass in props for the chapter wanna view... 
        return(<ViewHub setView = {setView} 
            slidesArray = {chaptersArray[getIndex].slides}
            courseID = {courseID}
            userID = {userID}/>);
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