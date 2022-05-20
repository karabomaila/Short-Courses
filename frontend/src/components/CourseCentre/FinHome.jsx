import MyCourseCard from '../CoursesUI/MyCourseCard';
import React from 'react';
import {useState} from 'react';
import Action from './Actions';
import CommentCard from './CommentCard';
import EnrolledCard from '../CoursesUI/EnrolledCard';
import FeedbackDialog from '../Feedback/FeedbackDialog';
import AboutCourseDialog from '../AboutCourse/AboutCourseDialog';
import {useLocation,useNavigate } from 'react-router-dom';
import AddComment from './AddComment';

const FinHome = ()=>{

    const {state} = useLocation();

    const userName = state.userName;
    const userID = state.userID;
    const courseName = state.courseName;
    const courseID = state.courseID;

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
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>


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