import Menu from './Menu.jsx';
import Display from './Display.jsx';
import {useState, useEffect} from 'react';
import { db } from '../firebase-config.jsx';
import {collection, getDocs, doc, getDoc} from 'firebase/firestore';
import {useLocation,useNavigate } from 'react-router-dom';
import React from "react";

const MyPortfolio = (props) =>{

    const [view, setView] = useState('ExposeView');
    const [bio, setBio] = useState('');

    let name = '';
    let userID = '';
    
    if(props.user !== undefined){
        name = props.user.name;
        userID = props.user.username;
    }else{
        const {state} = useLocation();
        name = state.acc[0].name;
        userID = state.acc[0].username;
    }


    const getBio = async () =>{
        const bioRef = doc(db, "About", userID);
        const bioData = await getDoc(bioRef);
        let fields = bioData._document.data.value.mapValue.fields;
        setBio(fields.bio.stringValue);
    }
    
    const courseCollection = collection(db, "FinCourses");
    const commCollection = collection(db, "Comments");
    const [displayWindow, setDisplay] = useState(true);
    const [courses, setCourses] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getCourses = async ()=>{
            const data = await getDocs(courseCollection);
            setCourses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getCourses();
        getBio();
    }, [])

    useEffect(() => {
        const getComments = async ()=>{
            const data = await getDocs(commCollection);
            setComments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getComments();
    }, [])

    /*
    if(state.visible){
        return(<ProfileLoader/>)
    }*/
    
    return(
        <div data-testid = 'port-div' style = {MyPortfolioStyle}>
           
            <div className='pin' style = {LeftPanelStyle} >
                <Menu 
                name = {name}
                view = {view}
                setView = {setView}
                />
            </div>
            <div style = {RightPanelStyle}>
                <Display 
                view = {view}
                setView = {setView}
                userID = {userID} 
                userName = {name}
                courses = {courses} 
                comments = {comments}
                bio = {bio}
                setBio = {setBio}/>
            </div>
        </div>
    )
}

const MyPortfolioStyle = {
    display: 'flex',
    flexDirection: 'row', 
    background: 'gray', 
    height: '100vh',
    minHeight: '100vh'

}

const LeftPanelStyle = {
    flex: 1,
    display: 'flex',
    background: 'gray',
    height: '100vh',
    minHeight: '100vh'
    //position: 'fixed'
}

const RightPanelStyle = {
    flex: 3.5,
    height: '100vh',
    //minHeight: '100vh',
    background: 'white',
    overflowY: 'scroll'
}
export default MyPortfolio;