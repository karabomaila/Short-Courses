import MyCourseCard from '../CoursesUI/MyCourseCard';
import React from 'react';
import {useState} from 'react';
import Action from './Actions';
import CommentCard from './CommentCard';
import EnrolledCard from '../CoursesUI/EnrolledCard';
import FeedbackDialog from '../Feedback/FeedbackDialog';

const FinHome = ()=>{
    const [openFeedb, setOpenFeedb] = useState(false);

    return(
        <div style = {FinHomeStyle}>
            <div style = {NavBarStyle}>
                 <h3 style = {{margin: 7, color: 'white'}}>COURSE NAME</h3>
                <div style={ActionBarStyle}>
                        <Action title = 'View' click = 'view'/>
                        <Action title = 'Comment' click = 'comment'/>
                        <Action title = 'Rate' click = 'rate' openFeedb = {setOpenFeedb}/>
                        <Action title = 'About' click = 'about'/>
                </div>
            </div>
            Comments on this course...

            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>

            <MyCourseCard/>
            <EnrolledCard/>

            <FeedbackDialog open = {openFeedb} close = {setOpenFeedb}/>
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