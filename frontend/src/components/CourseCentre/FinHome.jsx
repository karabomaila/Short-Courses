import MyCourseCard from '../CoursesUI/MyCourseCard';
import Action from './Actions';
import CommentCard from './CommentCard';
import EnrolledCard from '../CoursesUI/EnrolledCard'

const FinHome = ()=>{
    return(
        <div style = {FinHomeStyle}>
            <div style = {NavBarStyle}>
                 <h3 style = {{margin: 7, color: 'white'}}>COURSE NAME</h3>
                <div style={ActionBarStyle}>
                        <Action title = 'View'/>
                        <Action title = 'Comment'/>
                        <Action title = 'Rate'/>
                        <Action title = 'About'/>
                </div>
            </div>
            Comments on this course...

            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>

            <MyCourseCard/>
            <EnrolledCard/>
        </div>
    )
}

const FinHomeStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const NavBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: '#003b5c',
    marginBottom: 12
}

const ActionBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    //margin: 5,
    justifyContent: 'center'
}
export default FinHome;