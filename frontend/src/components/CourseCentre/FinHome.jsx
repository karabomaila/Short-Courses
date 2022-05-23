import React from 'react';
import {useState, useEffect} from 'react';
import Action from './Actions';
import { db } from '../firebase-config';
import { doc, getDoc, setDoc} from "firebase/firestore";
import FeedbackDialog from '../Feedback/FeedbackDialog';
import AboutCourseDialog from '../AboutCourse/AboutCourseDialog';
import {useLocation,useNavigate } from 'react-router-dom';
import AddComment from './AddComment';
import ShowComments from './ShowComments';

const FinHome = ()=>{
    const {state} = useLocation();
    const userName = state.userName;
    const userID = state.userID;
    const courseName = state.courseName;
    const courseID = state.courseID;

    const [comments, setComment] = useState([]);

    useEffect(() => {
        const getComments = async ()=>{
           let ref = doc(db, 'CompletedCourses', state.courseID);
           const data = await getDoc(ref);
           if(data._document == null){
            await setDoc(ref, {allComments: new Array()}, {merge: true});
            const tempData = await getDoc(ref);
            const initFields = tempData._document.data.value.mapValue.fields;
            setComment(initFields.allComments.arrayValue.values);
           }else{
            let fields = data._document.data.value.mapValue.fields;
            if(fields.allComments == undefined){
                await setDoc(ref, {allComments: new Array()}, {merge: true});
                const tempData = await getDoc(ref);
                const initFields = tempData._document.data.value.mapValue.fields;
                setComment(initFields.allComments.arrayValue.values);
            }else{
             setComment(fields.allComments.arrayValue.values);
            }
           }
        }
        getComments();
    }, [])

    const [openFeedb, setOpenFeedb] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    const data = {decscription: "Des", duration: 12, outcomes: []};

    return(
        <div style = {FinHomeStyle}>
            <div style = {NavBarStyle}>
                 <h3 style = {{margin: 7, color: 'white'}}>{courseName}</h3>
                <div style={ActionBarStyle}>
                        <Action title = 'View' click = 'view'/>
                        <Action title = 'Comment' click = 'comment' openComment = {setOpenComment}/>
                        <Action title = 'Rate' click = 'rate' openFeedb = {setOpenFeedb}/>
                        <Action title = 'About' click = 'about' openAbout = {setOpenAbout}/>
                </div>
            </div>
            Comments on this course...
            <ShowComments comments = {comments}/>

            <AboutCourseDialog data = {data} courseName = {courseName} open = {openAbout} close = {setOpenAbout}/>
            <FeedbackDialog open = {openFeedb} close = {setOpenFeedb}/>
            <AddComment open = {openComment} 
                userID = {userID}
                userName = {userName}
                courseID = {courseID}
                courseName = {courseName}
                close = {setOpenComment}
            />

            
        </div>
    )
}

const FinHomeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const NavBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    background: '#003b5c',
    marginBottom: 12,
    alignItems: 'center'
}

const ActionBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    //margin: 5,
    justifyContent: 'center'
}
export default FinHome;